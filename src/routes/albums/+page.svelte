<script>
	import { allAlbums } from '$lib/data/albums';
	import { ratings, totalSongsRated } from '$lib/stores/ratings';

  import AlbumCard from '$components/AlbumCard.svelte';

  let selectedAlbums = [];

  function toggleAlbumSelection(albumId) {
    if (selectedAlbums.includes(albumId)) {
      selectedAlbums = selectedAlbums.filter((id) => id !== albumId);
    } else {
      selectedAlbums = selectedAlbums.concat(albumId);
    }
    console.log(selectedAlbums)
  }
</script>

<div>
  <header>
    <h1>Long live all the magic we made.</h1>
  </header>

  <main>
    <div class='albums'>
      {#each allAlbums as album}
        <AlbumCard
          title={album.title}
          totalSongsRated={totalSongsRated($ratings, album.id)}
          totalSongs={album.songs.length}
          coverUrl={album.coverUrl}
          color={album.color}
          selected={selectedAlbums.includes(album.id)}
          onClick={() => toggleAlbumSelection(album.id)}
        />
      {/each}
    </div>
  </main>
</div>

<style>
  h1 {
    font-family: 'Carattere', cursive;
    width: 100%;
    text-align: center;
  }

  .albums {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: minmax(300px, auto);
    gap: 48px;
  }
</style>