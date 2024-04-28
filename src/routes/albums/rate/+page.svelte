<script>
  import { allAlbums } from '$lib/data/albums';
  import Masonry from '$components/Masonry.svelte';
  import AlbumRatingCard from '$components/AlbumRatingCard.svelte';

  export let data;
</script>

<main>
  <div class='ratings'>
    {#each data.selectedAlbums as album}
      <AlbumRatingCard album={album} />
    {/each}
  </div>
</main>

<style>
  .ratings {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
  }

  /* Tablet styles */
  @media only screen and (min-width: 600px) {
    .ratings {
      grid-template-columns: 1fr 1fr;
    }
  }

  /* Desktop styles */
  @media only screen and (min-width: 1024px) {
    .ratings {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  /* Large desktop styles */
  @media only screen and (min-width: 1440px) {
    .ratings {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
</style>
