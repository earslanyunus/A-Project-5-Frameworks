<script>
  import SwiperPerView from "./SwiperPerView.svelte";
export let head
export let movies
</script>

<p class="container mx-auto text-3xl font-bold mb-4">
  {head}
</p>
<SwiperPerView movies={movies} />

