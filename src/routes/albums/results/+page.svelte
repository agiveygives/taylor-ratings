<script>
  import { ratings, sortAlbumsByRatings } from '$lib/stores/ratings';
  import { allAlbumsData } from '$lib/data/albums';

	let albumRatings = sortAlbumsByRatings($ratings, "average");
</script>

<div>
  <table>
    <thead>
      <tr>
        <th>Place</th>
        <th>Album</th>
        <th>Average Rating</th>
      </tr>
    </thead>
    <tbody>
      {#each albumRatings as albumRating, i}
        <tr>
          <td>{i + 1}</td>
          <td>{albumRating.title}</td>
          <td>{albumRating.average}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
