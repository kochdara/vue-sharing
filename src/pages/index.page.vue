<template>
  <div>
    <h1>{{ props.siteTitle || '' }}</h1>
    <h1>Home Page</h1>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Home - Vue SSR',
  meta: [
    { name: 'description', content: 'Welcome to the home page' }
  ]
})

const props = defineProps(['siteTitle'])
</script>
