<template>
  <component :is="Page" v-bind="pageProps" />
</template>

<script setup>
defineProps(['Page', 'pageProps'])
</script>