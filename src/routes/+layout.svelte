<script>
	import { fade } from 'svelte/transition';
	import { allAlbumsData } from '$lib/data/albums';
	import { styleToString } from '$lib/utils/styles';
	import '../global.css';

	export let data;

	const eraColors = Object.values(allAlbumsData).map((album) => {
		return album.color;
	}).filter((color, index, self) => {
		return self.indexOf(color) === index;
	});

	const navStyles = styleToString({
		'background-image': `linear-gradient(to right, #fff, ${eraColors.join(', ')})`,
	});
</script>

{#key data.pathname}
	<header>
		<img class='logo' src="/logo.png" alt="Jukes McGee Taylor Ratings Logo" />
		<nav style={navStyles}>
			<ul>
				<li><a href="/albums">Albums</a></li>
				<li><a href="/albums/results">Results</a></li>
			</ul>
		</nav>
	</header>

	<div in:fade={{ duration: 300, delay: 400 }} out:fade={{ duration: 300 }}>
		<slot />
	</div>
{/key}

<style>
	header {
		display: grid;
		grid-template-columns: auto;
		align-items: center;
		height: 80px;
		margin: -8px -8px 16px -8px;
	}

	.logo {
		max-height: 80px;
		display: none;
	}

	nav {
		height: 100%;
		display: grid;
		align-items: center;
    padding-left: 13px;
	}

	ul {
		display: grid;
		grid-template-columns: max-content max-content;
		text-align: center;
		color: #fff;
		font-weight: 600;
		list-style: none;
		padding: 0px;
		margin: 0px;

		li:not(:last-child) {
			padding-right: 10px;
			border-right: 1px solid #fff;
		}

		li:not(:first-child) {
			padding-left: 10px;
		}
	}

	li {
		a {
			font-size: 20px;
			font-weight: bold;
			color: white;
			text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
			text-decoration: none;
			display: block;
			position: relative;
			padding: 2px 0;
			text-decoration: none;

			&::after {
				content: '';
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				height: 0.1em;
				background-color: #fff;
				border: 1px solid black;
				opacity: 0;
				transition: opacity 300ms, transform 300ms;
				opacity: 1;
				transform: scale(0);
				transform-origin: center;
			}

			&:hover::after,
			&:focus::after {
				opacity: 1;
				transform: translate3d(0, 0.2em, 0);
				transform: scale(1);
			}
		}
	}

	/* Tablet styles */
	@media only screen and (min-width: 600px) {
		.logo {
			display: block;
			width: 25vw;
		}

		header {
			grid-template-columns: auto 1fr;
		}
	}

	/* Desktop styles */
	@media only screen and (min-width: 1024px) {
		.logo {
			display: block;
			width: 25vw;
		}
	}

	/* Large desktop styles */
	@media only screen and (min-width: 1440px) {
		.logo {
			display: block;
		}
	}
</style>
