<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { styleToString } from '$lib/utils/styles';

  export let title;
  export let totalSongsRated;
  export let totalSongs;
  export let coverUrl;
  export let color;
  export let selected;
  export let onClick;

  let isPhone = false;

  onMount(() => {
    const checkIsPhone = () => {
      isPhone = (window.innerWidth <= 768); // Adjust 768 to your desired breakpoint
    };

    // Initial check
    checkIsPhone();

    // Update isPhone when window is resized
    window.addEventListener('resize', checkIsPhone);

    // Cleanup listener
    return () => {
      window.removeEventListener('resize', checkIsPhone);
    };
  });

  let isHovered = false;

  const cardStyles = {
    background: color,
    'background-size': 'contain',
    'background-repeat': 'no-repeat',
    'background-position': 'center'
  }

  $: {
    if (title.includes('reputation') || title.includes('folklore')) {
      cardStyles['background-color'] = (isHovered || selected) ? color : '#ededed'
    }
    cardStyles['z-index'] = isHovered ? 1 : 0;
    cardStyles['filter'] = (isHovered || selected) ? 'grayscale(0)' : 'grayscale(1)';
    cardStyles['box-shadow'] = `0 0 ${isHovered ? 100 : 13}px ${color}`;
    cardStyles['transform'] = (!isPhone && isHovered) ? 'scale(1.2)' : 'scale(1)';
  }

</script>

<span
  tabindex='0'
  role='button'
  aria-label={title}
  class='card'
  style={styleToString(cardStyles)}
  on:mouseenter={() => isHovered = true}
  on:mouseleave={() => isHovered = false}
  on:focus={() => isHovered = true}
  on:blur={() => isHovered = false}
  on:click={onClick}
  on:keydown={(e) => e.key === 'Enter' && onClick()}
>
  <div class='title'>{title}</div>
  <div class='total-rated'>
    {totalSongsRated}/{totalSongs} songs rated
  </div>
  <img class='cover-image' src={coverUrl} alt={title} />
</span>

<style>
  .card {
    display: grid;
    border-radius: 13px;
    overflow: hidden;
    cursor: pointer;
    padding: 13px;
    justify-items: center;
    gap: 13px;
    transition: 'transform 0.3s';
  }

  /* Styles for screens larger than 768px wide (tablets and desktops) */
  @media only screen and (min-width: 769px) {
    .card {
      transform: scale(1);
    }
  }

  .title {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: white;
    text-shadow:
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000;
  }

  .total-rated {
    text-align: center;
    font-size: 15px;
    font-weight: bold;
    color: white;
    text-shadow:
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000;
  }

  .cover-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>