<script>
  import { ratings, sortAlbumsByRatings } from '$lib/stores/ratings';
  import { allAlbumsData } from '$lib/data/albums';

	let albumRatings = sortAlbumsByRatings($ratings, "average");

  let currentPlace = 0;
  let groupRatings = albumRatings.reduce((acc, albumRating) => {
    albumRating.topSong = topSong(albumRating.songRatings);

    if (currentPlace === 0) {
      currentPlace += 1;
      acc[currentPlace] = [albumRating];
    } else if (acc[currentPlace][0].average === albumRating.average) {
      acc[currentPlace].push(albumRating);
    } else {
      currentPlace += 1;
      acc[currentPlace] = [albumRating];
    }

    return acc;
  }, {});

  function topSong(songRatings) {
    return Object.entries(songRatings).reduce((acc, [title, rating]) => {
      if (rating === undefined || rating === null) return acc;

      if (rating > acc.rating) {
        acc.title = title;
        acc.rating = rating;
      }

      return acc;
    }, { title: '--', rating: 0 }).title;
  }
</script>

<table>
  <thead>
    <tr>
      <th>Place</th>
      <th>Album</th>
      <th>Average Rating</th>
      <th>Top Song</th>
    </tr>
  </thead>
  <tbody>
    {#each Object.entries(groupRatings) as [place, albums]}
      <tr>
        <td rowspan={albums.length}>{place}</td>
        <td>{albums[0].title}</td>
        <td>{albums[0].average ? Math.round(albums[0].average) : 'unrated'}</td>
        <td>{albums[0].topSong}</td>
      </tr>
      {#each albums.slice(1) as album}
        <tr>
          <td>{album.title}</td>
          <td>{album.average ? Math.round(album.average) : 'unrated'}</td>
          <td>{album.topSong}</td>
        </tr>
      {/each}
    {/each}
  </tbody>
</table>

<style>
  table {
    width: 100%;
    border-collapse: collapse;
  }

  th, td {
    border: 1px solid black;
    padding: 8px;
  }

  th {
    background-color: #f2f2f2;
  }
</style>
