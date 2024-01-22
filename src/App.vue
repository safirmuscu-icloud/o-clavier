<template>

  <div class="div-main">

    <HeaderComponent />

    <router-view />

    <FooterComponent />

  </div>

</template>

<script setup>
// Importez le composant HeaderCode et FooterCode avec les bons chemins
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import { RouterView } from 'vue-router';

</script>

<style>
/* Vos styles ici */
</style>
