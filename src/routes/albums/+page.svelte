<script>
	import { allAlbums } from '$lib/data/albums';
	import { ratings, totalSongsRated } from '$lib/stores/ratings';

  import AlbumCard from '$components/AlbumCard.svelte';

  let selectedAlbums = [];

  let buttonText = "Rate All Albums";

  function toggleAlbumSelection(albumId) {
    if (selectedAlbums.includes(albumId)) {
      selectedAlbums = selectedAlbums.filter((id) => id !== albumId);
    } else {
      selectedAlbums = selectedAlbums.concat(albumId);
    }

    if (selectedAlbums.length === 0 || selectedAlbums.length === allAlbums.length) {
      buttonText = "Rate All Albums";
    } else {
      buttonText = `Rate ${selectedAlbums.length} Album${selectedAlbums.length > 1 ? 's' : ''}`;
    }

    selectedAlbums = selectedAlbums.sort((a, b) => a - b);
  }
</script>

<div>
  <header>
    <h1>Long live all the magic we made.</h1>
  </header>

  <main>
    <a class='rate-button' href={`/albums/rate${selectedAlbums.length > 0 ? '?ids=' + selectedAlbums.join(',') : ''}`}>
      {buttonText}
    </a>

    <div class='albums'>
      {#each allAlbums as album}
        <AlbumCard
          key={album.id}
          id={album.id}
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

  .rate-button {
    -webkit-appearance: none;
    appearance: none;
    tab-index: 0;
    position: fixed;
    bottom: 26px;
    right: 26px;
    margin: 13px 13px;
    padding: 12px 24px;
    font-size: 16px;
    border: 2px solid #000;
    border-radius: 13px;
    background-color: #fff;
    cursor: pointer;
    transition:
      background-color 0.3s ease-in-out,
      color 0.3s ease-in-out;
    z-index: 100;
    text-decoration: none;
    color: #000;
  }

  .rate-button:hover {
    background-color: #000;
    color: #fff;
  }

  .rate-button:focus {
    outline: 2px solid #000;
  }

  .albums {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: minmax(300px, auto);
    gap: 48px;
  }
</style>