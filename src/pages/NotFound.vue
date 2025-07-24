<template>
  <div>
    <h1>Not Found Page.</h1>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'NotFound - Vue SSR',
  meta: [
    { name: 'description', content: 'Not Found Page' }
  ]
})
</script>
