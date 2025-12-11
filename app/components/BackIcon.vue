<script setup lang="ts">
const router = useRouter()
function onClick() {
  router.back()
}
</script>

<template>
  <UIcon class="mt-1" size="20" name="lucide:arrow-left" @click="onClick"/>
</template>

<style scoped>

</style>