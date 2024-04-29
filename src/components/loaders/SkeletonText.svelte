<div class="skeleton skeleton-text"></div>

<style>
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

  .skeleton-text {
    width: 100%;
    height: 15px;
    margin-top: 5px;
    margin-bottom: 5px;
    border-radius: 10px;
  }
</style>
