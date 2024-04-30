<script>
  export let album;

  let showSpotify = false;
</script>

<div class={`spotify-embed flip-card ${showSpotify ? 'flipped' : ''}`}>
  <div class="flip-card-inner">
    <div class="flip-card-front" style={`background-color: ${album.color}`}>
      <button
        class="spotify-button"
        on:click={() => showSpotify = true}
      >
        Listen on Spotify
      </button>
    </div>
    <div class="skeleton flip-card-back">
      <iframe
        title={`Spotify Embed for ${album.title}`}
        class="spotify-embed"
        style={showSpotify ? '' : 'display: none'}
        src={album.spotifyEmbedUrl}
        width="100%"
        height="152"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  </div>
</div>

<style>
  .spotify-embed {
    border-radius: 13px;
    height: 152px;
    width: 100%;
  }

  .spotify-button {
    border: none;
    border-radius: 13px;
    height: 100%;
    color: black;
    padding: 10px 24px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    width: 100%;
    background: transparent;
  }

  .flip-card {
    background-color: transparent;
    border: 1px solid #f1f1f1;
    perspective: 1000px; /* Remove this if you don't want the 3D effect */
  }

  /* This container is needed to position the front and back side */
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  /* Do an horizontal flip when you move the mouse over the flip box container */
  .flipped .flip-card-inner {
    transform: rotateY(180deg);
  }

  /* Position the front and back side */
  .flip-card-front, .flip-card-back {
    position: absolute;
    border-radius: 13px;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
  }

  /* Style the front side (fallback if image is missing) */
  .flip-card-front {
    color: black;
    opacity: 0.25;
  }

  .flip-card-front:hover, .flip-card-front:focus {
    opacity: 1;
  }

  .skeleton {
    animation: skeleton-loading 1s linear infinite alternate;
  }

  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 80%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }

  /* Style the back side */
  .flip-card-back {
    width: 100%;
    height: 152px;
    border-radius: 13px;
    transform: rotateY(180deg);
  }
</style>
