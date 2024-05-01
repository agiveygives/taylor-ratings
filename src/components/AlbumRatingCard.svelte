<script>
  import { onMount } from 'svelte';
  import { ratings, getRating } from '$lib/stores/ratings';
  import { styleToString } from '$lib/utils/styles';
  import RatingSlider from '$components/RatingSlider.svelte';
  import EmbeddedSpotifyPlayer from '$components/EmbeddedSpotifyPlayer.svelte';
  import SkeletonText from '$components/loaders/SkeletonText.svelte';

  export let album;

  let spotifyLoaded = false;
  let ratingStore;

  onMount(() => {
    ratings.subscribe(value => {
      ratingStore = value;
    })();
  });
</script>

<div class="container">
  <div class="card">
    <span class="header">
      <h3 class="title">{album.title}</h3>
      <EmbeddedSpotifyPlayer album={album} />
    </span>

    <div class="ratings">
      {#each album.songs as song}
        <div class="song">
          {#if ratingStore}
            <div class="song-title">{song} - {getRating($ratings, album.id, song) || "Unrated"}</div>
            <div>
              <RatingSlider
                value={getRating(ratingStore, album.id, song)}
                barColor={album.color}
                onChange={(value) => {
                  ratings.rateSong(album.id, song, parseInt(value, 10));
                }}
              />
            </div>
          {:else}
            <div class="song-title">{song}</div>
            <SkeletonText />
          {/if}
        </div>
      {/each}
    </div>
  </div>

  <div class='filler' style={`background-color: ${album.color}`}></div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    border-radius: 13px;
  }

  .card {
    padding: 20px;
    border: 1px solid #000;
    border-radius: 13px;
  }

  .filler {
    margin-top: 24px;
    padding: 20px;
    flex-grow: 1;
    border-radius: 13px;
    opacity: 0.25;
  }

  .header {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
  }

  .ratings {
    display: grid;
    gap: 13px;
    margin-top: 13px;
    width: 100%;
    justify-items: center;
  }

  .song-title {
    text-align: center;
  }

  .song {
    width: 100%;
  }
</style>