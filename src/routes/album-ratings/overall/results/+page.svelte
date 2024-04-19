<script>
	import { ratings, sortAlbumsByRatings } from '$lib/stores/ratings';
	import { settings } from '$lib/stores/settings';

	let albumRatings = sortAlbumsByRatings($ratings, "average");

	const roundTwoDecimals = (number) => {
		if (isNaN(number) || number === null) {
			return "N/A";
		}

		return Math.round(number * 100) / 100;
	}
</script>

<h1>your favorite taylor albums: ranked</h1>
<p>
		You have rated taylor's songs, and now it's time to find your favorite album.
</p>
<div id="albums">
	{#each albumRatings as albumRating}
		<div>
			<h2>{albumRating.title}</h2>
			<p>Average: {roundTwoDecimals(albumRating.average)}</p>
			<p>Standard Deviation: {roundTwoDecimals(albumRating.standardDeviation)}</p>
		</div>
	{/each}
</div>

<style>
	.row {
			display: flex;
			flex-direction: row;
	}

	.col {
			display: flex;
			flex-direction: column;
	}

	.song {
			align-items: center;
			border-radius: 4px;
			border: 1px solid lightgrey;
			box-shadow: 0 0 4px lightgrey;
			padding: 4px 8px;
			margin: 8px 0;
	}

	.rate-button {
			border-radius: 4px;
			border: 1px solid lightgrey;
			padding: 4px 8px;
			margin: 8px 8px;
	}

	.rate-button:hover {
			cursor: pointer;
			background-color: lightgrey;
			box-shadow: 0 0 4px lightgrey;
	}

	.active {
			background-color: #99cfff;
			box-shadow: 0 0 4px lightgrey;
	}

	.active:hover {
			background-color: #99cfff;
	}
</style>
