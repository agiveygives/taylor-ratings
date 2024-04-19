import type { SettingsType } from "$lib/stores/settings";

export type AlbumType = {
	id: number;
	sortIndex: number;
	title: string;
	taylorsVersion: Boolean;
	originalId: number | null;
	rerecordingId: number | null;
	songs: Array<string>;
};

type AlbumsObjectType = {
	[key: string]: AlbumType;
};

const sortAlbums = (albums: AlbumsObjectType) => (
	Object.values(albums).sort((albumA, albumB) => {
		if (albumA.sortIndex === albumB.sortIndex) {
			return albumA.title.length - albumB.title.length;
		}

		return albumA.sortIndex - albumB.sortIndex
	})
)

export const filterTaylorsVersionOnly = (albums: AlbumsObjectType) => (
	Object.fromEntries(
		Object.entries(albums).filter(([_albumId, album]) => (
			album.taylorsVersion || !album.rerecordingId
		))
	)
);

export const allAlbumsData: AlbumsObjectType = {
	1: {
		id: 1,
		sortIndex: 1,
		title: "Taylor Swift",
		taylorsVersion: false,
		originalId: null,
		rerecordingId: null,
		songs: [
			"Tim McGraw",
			"Picture to Burn",
			"Teardrops on My Guitar",
			"A Place in This World",
			"Cold as You",
			"The Outside",
			"Tied Together with a Smile",
			"Stay Beautiful",
			"Should've Said No",
			"Mary's Song (Oh My My My)",
			"Our Song",
			"I'm Only Me When I'm with You",
			"Invisible",
			"A Perfectly Good Heart",
		],
	},
	2: {
		id: 2,
		sortIndex: 2,
		title: "Fearless",
		taylorsVersion: false,
		originalId: null,
		rerecordingId: 10,
		songs: [
			"Fearless",
			"Fifteen",
			"Love Story",
			"Hey Stephen",
			"White Horse",
			"You Belong with Me",
			"Breathe",
			"Tell Me Why",
			"You're Not Sorry",
			"The Way I Loved You",
			"Forever & Always",
			"The Best Day",
			"Change",
			"Jump Then Fall",
			"Untouchable",
			"Come In with the Rain",
			"Superstar",
			"The Other Side of the Door"
		]
	},
	3: {
		id: 3,
		sortIndex: 3,
		title: "Speak Now",
		taylorsVersion: false,
		originalId: null,
		rerecordingId: 13,
		songs: [
			"Mine",
			"Sparks Fly",
			"Back to December",
			"Speak Now",
			"Dear John",
			"Mean",
			"The Story of Us",
			"Never Grow Up",
			"Enchanted",
			"Better Than Revenge",
			"Innocent",
			"Haunted",
			"Last Kiss",
			"Long Live",
			"Ours",
			"If This Was a Movie",
			"Superman",
		],
	},
	4: {
		id: 4,
		sortIndex: 4,
		title: "Red",
		taylorsVersion: false,
		originalId: null,
		rerecordingId: 11,
		songs: [
			"State Of Grace",
			"Red",
			"Treacherous",
			"I Knew You Were Trouble",
			"All Too Well",
			"22",
			"I Almost Do",
			"We Are Never Ever Getting Back Together",
			"Stay Stay Stay",
			"The Last Time",
			"Holy Ground",
			"Sad Beautiful Tragic",
			"The Lucky One",
			"Everything Has Changed",
			"Starlight",
			"Begin Again",
			"The Moment I Knew",
			"Come Back... Be here",
			"Girl at Home",
		],
	},
	5: {
		id: 5,
		sortIndex: 5,
		title: "1989",
		taylorsVersion: false,
		originalId: null,
		rerecordingId: 14,
		songs: [
			"Welcome To New York",
			"Blank Space",
			"Style",
			"Out of the Woods",
			"All You Had To Do Was Stay",
			"Shake It Off",
			"I Wish You Would",
			"Bad Blood",
			"Wildest Dreams",
			"How You Get The Girl",
			"This Love",
			"I Know Places",
			"Clean",
			"Wonderland",
			"You Are In Love",
			"New Romantics",
		],
	},
	6: {
		id: 6,
		sortIndex: 6,
		title: "reputation",
		taylorsVersion: false,
		originalId: null,
		rerecordingId: null,
		songs: [
			"...Ready For It?",
			"End Game",
			"I Did Something Bad",
			"Don't Blame Me",
			"Delicate",
			"Look What You Made Me Do",
			"So It Goes...",
			"Gorgeous",
			"Getaway Car",
			"King Of My Heart",
			"Dancing With Our Hands Tied",
			"Dress",
			"This Is Why We Can't Have Nice Things",
			"Call It What You Want",
			"New Year's Day"
		]
	},
	7: {
		id: 7,
		sortIndex: 7,
		title: "Lover",
		taylorsVersion: true,
		originalId: null,
		rerecordingId: null,
		songs: [
			"I Forgot That You Existed",
			"Cruel Summer",
			"Lover",
			"The Man",
			"The Archer",
			"I Think He Knows",
			"Miss Americana & The Heartbreak Prince",
			"Paper Rings",
			"Cornelia Street",
			"Death By A Thousand Cuts",
			"London Boy",
			"Soon You'll Get Better",
			"False God",
			"You Need To Calm Down",
			"Afterglow",
			"ME!",
			"It's Nice To Have A Friend",
			"Daylight",
		],
	},
	8: {
		id: 8,
		sortIndex: 8,
		title: "folklore",
		taylorsVersion: true,
		originalId: null,
		rerecordingId: null,
		songs: [
			"the 1",
			"cardigan",
			"the last great american dynasty",
			"exile",
			"my tears ricochet",
			"mirrorball",
			"seven",
			"august",
			"this is me trying",
			"illicit affairs",
			"invisible string",
			"mad woman",
			"epiphany",
			"betty",
			"peace",
			"hoax",
			"the lakes"
		]
	},
	9: {
		id: 9,
		sortIndex: 9,
		title: "evermore",
		taylorsVersion: true,
		originalId: null,
		rerecordingId: null,
		songs: [
			"willow",
			"champagne problems",
			"gold rush",
			"'tis the damn season",
			"tolerate it",
			"no body, no crime",
			"happiness",
			"dorothea",
			"coney island",
			"ivy",
			"cowboy like me",
			"long story short",
			"marjorie",
			"closure",
			"evermore",
			"right where you left me",
			"it's time to go"
		]
	},
	10: {
		id: 10,
		sortIndex: 2,
		title: "Fearless (Taylor's Version)",
		taylorsVersion: true,
		originalId: 2,
		rerecordingId: null,
		songs: [
			"Fearless",
			"Fifteen",
			"Love Story",
			"Hey Stephen",
			"White Horse",
			"You Belong with Me",
			"Breathe",
			"Tell Me Why",
			"You're Not Sorry",
			"The Way I Loved You",
			"Forever & Always",
			"The Best Day",
			"Change",
			"Jump Then Fall",
			"Untouchable",
			"Come In with the Rain",
			"Superstar",
			"The Other Side of the Door",
			"Today Was a Fairytale",
			"You All Over Me",
			"Mr. Perfectly Fine",
			"We Were Happy",
			"That's When",
			"Don't You",
			"Bye Bye Baby"
		]
	},
	11: {
		id: 11,
		sortIndex: 4,
		title: "Red (Taylor's Version)",
		taylorsVersion: true,
		originalId: 4,
		rerecordingId: null,
		songs: [
			"State Of Grace",
			"Red",
			"Treacherous",
			"I Knew You Were Trouble",
			"All Too Well",
			"22",
			"I Almost Do",
			"We Are Never Ever Getting Back Together",
			"Stay Stay Stay",
			"The Last Time",
			"Holy Ground",
			"Sad Beautiful Tragic",
			"The Lucky One",
			"Everything Has Changed",
			"Starlight",
			"Begin Again",
			"The Moment I Knew",
			"Come Back... Be here",
			"Girl at Home",
			"Ronan",
			"Better Man",
			"Nothing New",
			"Babe",
			"Message In a Bottle",
			"I Bet You Think About Me",
			"Forever Winter",
			"Run",
			"The Very First Night",
			"All Too Well (10 Minute Version)"
		]
	},
	12: {
		id: 12,
		sortIndex: 10,
		title: "Midnights",
		taylorsVersion: true,
		originalId: null,
		rerecordingId: null,
		songs: [
			"Lavender Haze",
			"Maroon",
			"Anti-Hero",
			"Snow On The Beach",
			"You're On Your Own, Kid",
			"Midnight Rain",
			"Question...?",
			"Vigilante Shit",
			"Bejeweled",
			"Labyrinth",
			"Karma",
			"Sweet Nothing",
			"Mastermind",
			"The Great War",
			"Bigger Than The Whole Sky",
			"Paris",
			"High Infidelity",
			"Glitch",
			"Would've Could've Should've",
			"Dear Reader",
			"Hits Different",
			"You're Losing Me"
		]
	},
	13: {
		id: 13,
		sortIndex: 3,
		title: "Speak Now (Taylor's Version)",
		taylorsVersion: true,
		originalId: 3,
		rerecordingId: null,
		songs: [
			"Mine",
			"Sparks Fly",
			"Back to December",
			"Speak Now",
			"Dear John",
			"Mean",
			"The Story of Us",
			"Never Grow Up",
			"Enchanted",
			"Better Than Revenge",
			"Innocent",
			"Haunted",
			"Last Kiss",
			"Long Live",
			"Ours",
			"If This Was a Movie",
			"Superman",
			"Electric Touch (feat. Fall Out Boy)",
			"When Emma Falls in Love",
			"I Can See You",
			"Castles Crumbling (feat. Hayley Williams)",
			"Foolish One",
			"Timeless"
		]
	},
	14: {
		id: 14,
		sortIndex: 5,
		title: "1989 (Taylor's Version)",
		taylorsVersion: true,
		originalId: 5,
		rerecordingId: null,
		songs: [
			"Welcome To New York",
			"Blank Space",
			"Style",
			"Out of the Woods",
			"All You Had To Do Was Stay",
			"Shake It Off",
			"I Wish You Would",
			"Bad Blood",
			"Wildest Dreams",
			"How You Get The Girl",
			"This Love",
			"I Know Places",
			"Clean",
			"Wonderland",
			"You Are In Love",
			"New Romantics",
			"\"Slut!\"",
			"Say Don't Go",
			"Now That We Don't Talk",
			"Suburban Legends",
			"Is It Over Now?"
		]
	},
	15: {
		id: 15,
		sortIndex: 11,
		title: "The Tortured Poets Department",
		taylorsVersion: true,
		originalId: null,
		rerecordingId: null,
		songs: [
			"Fortnight (Ft. Post Malone)",
			"The Tortured Poets Department",
			"My Boy Only Breaks His Favorite Toy",
			"Down Bad",
			"So Long, London",
			"But Daddy I Love Him",
			"Fresh Out The Slammer",
			"Florida!!! (Ft. Florence + the Machine)",
			"Guilty as Sin?",
			"Who's Afraid of Little Old Me?",
			"I Can Fix Him (No Really I Can)",
			"loml",
			"I Can Do It With A Broken Heart",
			"The Smallest Man Who Ever Lived",
			"The Alchemy",
			"Clara Bow",
			"The Black Dog",
			"imgonnagetyouback",
			"The Albatross",
			"Chloe or Sam or Sophia or Marcus",
			"How Did It End?",
			"So High School",
			"I Hate It Here",
			"thanK you aIMee",
			"I Look in People's Windows",
			"The Prophecy",
			"Cassandra",
			"Peter",
			"The Bolter",
			"Robin",
			"The Manuscript",
		]
	}
};

export const albumsData = (settings: SettingsType) => (
	settings.taylorsVersionOnly ? filterTaylorsVersionOnly(allAlbumsData) : allAlbumsData
)

export const allAlbums = sortAlbums(allAlbumsData);

export const taylorsVersionOnly = (
	sortAlbums(Object.fromEntries(
		Object.entries(allAlbumsData).filter(([_albumId, album]) => (
			album.taylorsVersion || !album.rerecordingId
		))
	))
);