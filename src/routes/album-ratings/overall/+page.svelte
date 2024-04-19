
<script>
	import { onMount } from 'svelte';
	import { allAlbums, taylorsVersionOnly } from '$lib/data/albums';
	import { ratings, getRating } from '$lib/stores/ratings';
	import { settings } from '$lib/stores/settings';

	import AcousticGuitar from '$components/icons/AcousticGuitar.svelte';

	const toggleTaylorsVersion = () => {
		settings.update({ taylorsVersionOnly: !$settings.taylorsVersionOnly });
	};

	let albumsData = [];

	settings.subscribe((value) => {
		albumsData = value.taylorsVersionOnly ? taylorsVersionOnly : allAlbums;
	});
</script>

<div class="col" style="height: 100%;">
	<div class="col" style="overflow-y: auto;">
		<div class="body">
			<h1>rate all of taylor's songs to find your favorite album</h1>

			<button class="taylorsVersionToggleBtn" on:click={toggleTaylorsVersion}>
				<span class={$settings.taylorsVersionOnly ? 'toggledOn' : ''}>
					<AcousticGuitar fill={$settings.taylorsVersionOnly} />
					<p style="color: black;">Toggle Taylor's Version Only</p>
				</span>
			</button>

			<div id="songs">
				{#each albumsData as album}
					<h2>{album.title}</h2>

					{#each album.songs as song}
						<div class="song col">
							<p style="margin: 0;">{song}</p>
							<div class="row">
								<button
									class="rate-button {getRating($ratings, album.id, song) === null && 'active'}"
									on:click={() => ratings.rateSong(album.id, song, null)}
								>
									None
								</button>
								<button
									class="rate-button {getRating($ratings, album.id, song) === 1 && 'active'}"
									on:click={() => ratings.rateSong(album.id, song, 1)}
								>
									1
								</button>
								<button
									class="rate-button {getRating($ratings, album.id, song) === 2 && 'active'}"
									on:click={() => ratings.rateSong(album.id, song, 2)}
								>
									2
								</button>
								<button
									class="rate-button {getRating($ratings, album.id, song) === 3 && 'active'}"
									on:click={() => ratings.rateSong(album.id, song, 3)}
								>
									3
								</button>
								<button
									class="rate-button {getRating($ratings, album.id, song) === 4 && 'active'}"
									on:click={() => ratings.rateSong(album.id, song, 4)}
								>
									4
								</button>
								<button
									class="rate-button {getRating($ratings, album.id, song) === 5 && 'active'}"
									on:click={() => ratings.rateSong(album.id, song, 5)}
								>
									5
								</button>
							</div>
						</div>
					{/each}
				{/each}
			</div>
		</div>
	</div>
	<div class="row" style="justify-content: center; padding: 16px 0; width: 100%; border-top: solid 1px grey;">
		<a href="/album-ratings/overall/results" style="margin: 0;" class="button">
			See Results
		</a>
	</div>
</div>

<style>
	html,
	body {
			/* overflow-y: hidden; */
			width: 100%;
			height: 100%;
			margin: 0;
	}

	.body {
			display: flex;
			flex-direction: column;
			max-width: min(90%, 500px);
			margin: 0 auto;
			padding-top: 1rem;
	}

	/* Define gradient background with color stops aligned with items */
	.album-colors {
		background: linear-gradient(to bottom,
			#40fdc1 0,       /* Start with red */
			#40fdc1 33.33%,  /* Change to blue at the first item */
			blue 33.33%,
			blue 66.66%, /* Change to green at the second item */
			green 66.66%,
			green 100%,   /* Change to yellow at the third item */
			yellow 100%
		);
		background-size: 100% 300%; /* Size to cover the whole gradient */
		transition: background-position 0.5s; /* Smooth transition */
	}

	/* Adjust background position as you scroll */
	.album-colors.scrolling {
		background-position: 0 calc(-100vh + 1px); /* Shift the gradient up by one viewport height */
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	a,
	ul,
	table {
			margin: 0 0 1rem 0;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
			font-family: 'Georgia', serif;
	}

	p,
	a,
	li,
	th,
	td {
			font-family: 'Roboto', sans-serif;
			font-size: 1.2rem;
			line-height: 1.5;
	}

	.button {
			border-radius: 8px;
			border: none;
			outline: none;
			padding: 4px 8px;
			background-color: #66b3ff;
			color: white;
			font-size: 20px;
			font-weight: bold;
			box-shadow: 0 0 4px lightgrey;
	}

	nav {
			position: sticky;
			top: 0;
			left: 0;
			background-color: white;
			box-shadow: 0 0 4px grey;
			position: fixed;
	}

	button:hover {
			cursor: pointer;
			background-color: #3f9fff;
	}

	.row {
			display: flex;
			flex-direction: row;
			align-items: center;
	}

	.col {
			display: flex;
			flex-direction: column;
			align-items: center;
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

	.taylorsVersionToggleBtn {
		appearance: none;
		border: none;
		background: none;
	}

	.taylorsVersionToggleBtn:hover {
		background-color: #B8396B;
		border: solid 1px #B8396B;
	}

	.taylorsVersionToggleBtn:focus {
		border: solid 1px #B8396B;
	}

	.taylorsVersionToggleBtn > span {
		height: 36px;
		display: inline-flex;
		align-items: center;
	}

	.toggledOn {
		color: #76BAE0;
	}
</style>

