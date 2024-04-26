
<script>
	import { onMount } from 'svelte';
	import FaGuitar from 'svelte-icons/fa/FaGuitar.svelte';
	import { allAlbums, taylorsVersionOnly } from '$lib/data/albums';
	import { ratings, getRating } from '$lib/stores/ratings';
	import { settings } from '$lib/stores/settings';

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
					<div class="guitar"><FaGuitar fill={$settings.taylorsVersionOnly} style="width: 40px;" /></div>
					<p style="color: black; text-align: start;">
						{$settings.taylorsVersionOnly ? 'Taylor\'s Version Only' : 'All Albums'}
					</p>
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
	.guitar {
		width: 35px;
	}

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

	p,
	a,
	li,
	th,
	td {
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
		width: fit-content;
		width: -moz-fit-content;
		appearance: none;
		border: none;
		background: none;
	}
	.taylorsVersionToggleBtn:hover,
	.taylorsVersionToggleBtn:hover > .toggledOn > .guitar {
		background: none;
		color: #B8396B;
	}

	.taylorsVersionToggleBtn:focus {
		background: none;
		outline: 1px solid #B8396B;
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

