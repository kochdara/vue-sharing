<script setup>
import { useHead } from '@unhead/vue'

useHead({
  title: 'Title for About',
  meta: [
    { name: 'description', content: 'Description for About' },
    { property: 'og:title', content: 'Title for About' },
    { property: 'og:description', content: 'Description for About' },
    { property: 'og:image', content: 'https://images.khmer24.co/25-07-14/s--1983-built--1181135175247431343247132-c.jpg' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://images.khmer24.co/25-07-14/s--1983-built--1181135175247431343247132-c.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Title for About' },
    { name: 'twitter:description', content: 'Description for About' },
    { name: 'twitter:image', content: 'https://images.khmer24.co/25-07-14/s--1983-built--1181135175247431343247132-c.jpg' },
  ],
})
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
