<script>
  import { allAlbums } from '$lib/data/albums';
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
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 48px;
  }
</style>
