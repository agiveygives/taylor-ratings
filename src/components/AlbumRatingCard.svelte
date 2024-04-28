<script>
  import { ratings, getRating } from '$lib/stores/ratings';
  import { styleToString } from '$lib/utils/styles';
  import RatingSlider from '$components/RatingSlider.svelte';

  export let album;

  let ratingValue = {};

  album.songs.forEach((song) => {
    ratingValue[song] = getRating(ratings, album.id, song);
  });
</script>

<div class="container">
  <div class="card">
    <span class="header">
      <img class="cover-art" src={album.coverUrl} alt={album.title} />
      <h3 class="title">{album.title}</h3>
    </span>

    <div class="ratings">
      {#each album.songs as song}
        <div class="song">
          <div class="song-title">{song} - {ratingValue[song]}</div>
          <div>
            <RatingSlider
              rating={getRating(ratings, album.id, song)}
              barColor={album.color}
              onChange={(value) => {
                ratingValue[song] = value;
              }}
            />
          </div>
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
    grid-template-columns: 100px 1fr;
    align-items: center;
    gap: 13px;
  }

  .cover-art {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50px;
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