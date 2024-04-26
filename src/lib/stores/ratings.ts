import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import { allAlbumsData } from '$lib/data/albums';

type SongRatingType = {
	[key: string]: number | null
}

type AlbumRatingsType = {
	title: string;
	average: number | null;
	standardDeviation: number | null;
	songRatings: SongRatingType;
};

type RatingsType = {
	[key: string]: AlbumRatingsType
}

const defaultRatings: RatingsType = {}

Object.entries(allAlbumsData).forEach(([albumId, albumData]) => {
	const songRatings = albumData.songs.reduce((acc, song) => {
		acc[song] = null;
		return acc;
	}, {} as SongRatingType)

	defaultRatings[albumId] = {
		title: albumData.title,
		average: null,
		standardDeviation: null,
		songRatings,
	}
})

function createRatings() {
	const { subscribe, set, update } = writable(defaultRatings);

	const rateSong = (albumId: string, song: string, rating: number) => update((ratings) => {
		const albumSongRatings = ratings[albumId]?.songRatings;

		if (!albumSongRatings) return ratings;

		ratings[albumId].songRatings[song] = rating;

		ratings[albumId].average = Object.values(albumSongRatings).reduce<number>((acc, rating) => {
			if (rating === null) return acc;
			return acc + rating;
		}, 0) / allAlbumsData[albumId].songs.length;

		ratings[albumId].standardDeviation = Math.sqrt(
			Object.values(albumSongRatings).reduce<number>((acc, rating) => {
				if (rating === null) return acc;
				return acc + rating;
			}, 0) / allAlbumsData[albumId].songs.length
	);

		return ratings;
	});

	return {
		subscribe,
		rateSong,
		reset: () => set(defaultRatings),
		set,
	};
}

export const ratings = createRatings();

export const sortAlbumsByRatings = (ratings: RatingsType, sortBy: "average" | "standardDeviation") => {
	return Object.values(ratings).sort((a, b) => {
		const sortValueA = a[sortBy];
		const sortValueB = b[sortBy];

		if (sortValueA === null) return 1;
		if (sortValueB === null) return -1;

		return sortValueA - sortValueB;
	});
};

export const getRating = (ratings: RatingsType, albumId: string, song: string) => {
	return ratings[albumId]?.songRatings[song];
};

export const totalSongsRated = (ratings: RatingsType, albumId: string) => {
	return Object.values(ratings[albumId]?.songRatings).filter(rating => rating !== null).length;
}

// Initialize the store from localStorage
if (browser) {
	const storedData = localStorage.getItem('ratings');
	if (storedData) {


			ratings.set({
				...defaultRatings,
				...JSON.parse(storedData)
		});
	}

	// Subscribe to changes and update localStorage
	ratings.subscribe(value => {
			localStorage.setItem('ratings', JSON.stringify(value));
	});
}
