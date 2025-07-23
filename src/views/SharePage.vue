<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <img :src="image" alt="Thumbnail" style="max-width: 400px;">
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head'

const title = 'Share Title'
const description = 'This is the description for sharing'
const image = 'https://images.khmer24.co/25-07-14/s--1983-built--1181135175247431343247132-c.jpg'
const url = window.location.href // Or your custom URL

useHead({
  title,
  meta: [
    { name: 'description', content: description },

    // Open Graph
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: image },
    { property: 'og:url', content: url },
    { property: 'og:type', content: 'website' },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image },
  ]
})
</script>
