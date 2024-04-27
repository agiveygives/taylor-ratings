<script>
  import { onMount } from 'svelte';
  import { styleToString } from '$lib/utils/styles';

  export let value = 50;
  export let barColor = '#3498db'; // Initial color

  const barStyles = {
    'background-color': barColor,
    width: value + '%',
  }

  $: barStyles['width'] = value + '%'; // Update the width of the bar

  onMount(() => {
      updateBarColor();
  });

  function updateBarColor() {
      const percentage = (value / 100) * 100; // Calculate the percentage
      barColor = `hsl(${percentage}, 70%, 50%)`; // Convert percentage to a hue value
  }

  function handleChange(event) {
      value = event.target.value;
      updateBarColor();
  }
</script>

<style>
  .container {
    position: relative;
    width: 100%; /* Width of the outside container */
  }

  .bar {
    position: absolute;
    top: 25%;
    left: 0;
    border-radius: 10px;
    height: 50%;
    z-index: -1;
    margin: 2px;
  }

  /* The slider itself */
  .slider {
    -webkit-appearance: none;  /* Override default CSS styles */
    appearance: none;
    width: 100%; /* Full-width */
    height: 25px; /* Specified height */
    background-color: transparent;
    outline: none; /* Remove outline */
    filter: grayscale(1); /* Make the slider grayscale */
    -webkit-transition: .2s; /* 0.2 seconds transition on hover */
    transition: filter .2s;
  }

  /* Mouse-over effects */
  .slider:hover {
    filter: grayscale(0);
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 45px;
    height: 45px;
    border: 0;
    background: url('https://taylor-ratings.s3.amazonaws.com/images/heart-hands.png');
    background-size: cover; /* Scale the image to cover the entire container */
    background-position: center; /* Center the image within the container */
    background-repeat: no-repeat; /* Prevent the image from repeating */
    cursor: pointer;
  }

  .slider::-moz-range-thumb {
    width: 45px;
    height: 45px;
    border: 0;
    background: url('https://taylor-ratings.s3.amazonaws.com/images/heart-hands.png');
    background-size: cover; /* Scale the image to cover the entire container */
    background-position: center; /* Center the image within the container */
    background-repeat: no-repeat; /* Prevent the image from repeating */
    cursor: pointer;
  }
</style>

<div class="container">
  <div class='bar' style={styleToString(barStyles)}></div>
  <input type="range" min="1" max="100" class="slider" bind:value on:input={handleChange}>
</div>
