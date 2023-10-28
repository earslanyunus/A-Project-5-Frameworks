<script setup>
  import SwiperPerView from "./SwiperPerView.vue";
  const props = defineProps(['movies','head'])
</script>
<template>
<p class="container mx-auto text-3xl font-bold mb-4">
  {{props.head}}
</p>
<SwiperPerView :movies='props.movies' />
</template>
