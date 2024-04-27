<script>
  import { findAlbumById } from '$lib/data/albums';

  export let data;

  const album = findAlbumById(data.albumId);
</script>


<h1>{album.title}</h1>
