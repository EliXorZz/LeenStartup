<script setup lang="ts">
import ProfileCard from "~/components/ProfileCard.vue";

definePageMeta({
  layout: 'user',
})
</script>

<template>
  <div class="pb-20">
    <div class="top w-full h-16 flex justify-between items-center text-white px-10">
      <div class="flex gap-4 justify-around items-center w-full">
        <UInput
            class="glass rounded-2xl w-full"
            icon="i-lucide-search"
            size="md"
            variant="outline"
            placeholder="Rechercher..."
            :ui="{
              base: 'rounded-2xl'
            }"
        />

        <UButton size="xl" class="cursor-pointer bg-white text-black rounded-lg hover:text-white" icon="lucide:filter"/>
      </div>
    </div>

    <div class="w-full flex flex-col justify-center items-center gap-3 pt-10 px-7">
      <ProfileCard/>
      <ProfileCard/>
      <ProfileCard/>
      <ProfileCard/>
    </div>
  </div>
</template>

<style scoped>
.glass {
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(0, 0, 0, 0.3);
}

.top {
  background-color: #29282D;
}
</style>