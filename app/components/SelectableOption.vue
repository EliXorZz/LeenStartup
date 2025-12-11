<script setup lang="ts">
defineProps<{
  name: string
}>()

const selected = ref(false)
const style = computed(() => selected.value ? ({ backgroundColor: '#A37968', color: 'white' }) : ({}) )
</script>

<template>
  <div class="px-3 py-1 bg-slate-200 rounded-3xl" :style="style" @click="selected = !selected">
    {{ name }}
  </div>
</template>

<style scoped>

</style>