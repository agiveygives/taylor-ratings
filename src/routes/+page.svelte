<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  onMount(() => {
    goto('/album-ratings/overall');
  });
</script>

