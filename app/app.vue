<template>
  <Head>
    <Meta name="viewport" content="viewport-fit=cover, width=device-width, initial-scale=1, maximum-scale=1" />
  </Head>
  <NuxtLayout>
    <NuxtPage :key="$route.fullPath" />
  </NuxtLayout>
</template>

<script setup lang="ts">
</script>