<script>
  import { styleToString } from '$lib/utils/styles';

  export let hidden = false;

  $: styles = {
    display: hidden ? 'none' : 'block',
  };
</script>

<div class="skeleton skeleton-content" style={styleToString(styles)}></div>

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

  .skeleton-content {
    width: 100%;
    height: 152px;
    border-radius: 13px;
  }
</style>
