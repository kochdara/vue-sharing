<template>
  <head>
    <title>{{ title }}</title>
    <meta name="description" :content="description" />
    <meta property="og:title" :content="title" />
    <meta property="og:description" :content="description" />
    <meta property="og:image" :content="image" />
    <meta property="og:type" content="website" />
    <meta property="og:url" :content="url" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" :content="title" />
    <meta name="twitter:description" :content="description" />
    <meta name="twitter:image" :content="image" />
  </head>
</template>

<script setup>
defineProps(['title', 'description', 'image', 'url'])
</script>
