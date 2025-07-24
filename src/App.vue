<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'My Awesome Article',
  meta: [
    { name: 'description', content: 'This is a powerful Vue 3 article for SEO.' },
    
    // Facebook / Open Graph
    { property: 'og:title', content: 'My Awesome Article' },
    { property: 'og:description', content: 'Learn how to add Facebook SEO support in Vue 3.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://demo-vue-sharing.netlify.app' },
    { property: 'og:image', content: 'https://demo-vue-sharing.netlify.app/content.png' },
    { property: 'og:image:width', content: '1024' },
    { property: 'og:image:height', content: '1024' },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'My Awesome Article' },
    { name: 'twitter:description', content: 'Learn how to add Twitter SEO support in Vue 3.' },
    { name: 'twitter:image', content: 'https://demo-vue-sharing.netlify.app/content.png' }
  ]
})
</script>

<template>
  <h1>My Awesome Article</h1>
</template>
