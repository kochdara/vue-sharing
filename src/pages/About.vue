<template>
  <div>
    <h1>About Page</h1>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'About - Vue SSR',
  meta: [
    { name: 'description', content: 'Learn more about us here.' }
  ]
})
</script>
