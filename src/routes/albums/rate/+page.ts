import { allAlbums } from '$lib/data/albums';

export async function load({ params, url }) {
  const ids = url.searchParams.get('ids');

  let selectedAlbums = allAlbums;

  if (ids) {
    const albumIds = ids.split(',').map((id) => parseInt(id, 10));

    selectedAlbums = allAlbums.filter((album) => albumIds.includes(album.id));
  }

  return { selectedAlbums };
}
