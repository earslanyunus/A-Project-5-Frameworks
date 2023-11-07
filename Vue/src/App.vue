<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/Common/Navbar.vue';
import Footer from './components/Common/Footer.vue';
</script>

<template>
    <Navbar/>
<RouterView>
</RouterView>
    <Footer/>
</template>

