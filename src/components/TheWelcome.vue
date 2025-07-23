<template>
  <div class="share-page">
    <h1>Title for default-slug</h1>
    <p>Description for default-slug</p>
    <img src="https://images.khmer24.co/25-07-14/s--1983-built--1181135175247431343247132-c.jpg" alt="Thumbnail" style="max-width: 400px;">
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Title for default-slug',
  meta: [
    { name: 'description', content: 'Description for default-slug' },
    { property: 'og:title', content: 'Title for default-slug' },
    { property: 'og:description', content: 'Description for default-slug' },
    { property: 'og:image', content: 'https://images.khmer24.co/25-07-14/s--1983-built--1181135175247431343247132-c.jpg' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://images.khmer24.co/25-07-14/s--1983-built--1181135175247431343247132-c.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Title for default-slug' },
    { name: 'twitter:description', content: 'Description for default-slug' },
    { name: 'twitter:image', content: 'https://images.khmer24.co/25-07-14/s--1983-built--1181135175247431343247132-c.jpg' },
  ],
})
</script>

<style scoped>
.share-page {
  padding: 2rem;
  text-align: center;
}
</style>