<script setup lang="ts">
definePageMeta({
  layout: 'user',
})
</script>

<template>
  <div>
    <div class="z-10 sticky top-0 top w-full h-16 flex justify-between items-center text-white px-4">
      <div class="flex gap-4 items-center">
        <BackIcon/>
        <p class="font-semibold">_Cyrian74Tatou_</p>
      </div>
    </div>
    
    <img src="/banner8.png" alt="Banner" class="w-full h-auto object-cover block" />
    <h1 class="px-7 mt-5 text-xl font-semibold">Messages</h1>

    <div class="mt-3 flex flex-col">
      <NuxtLink v-for="_ in 5" :to="{ name: 'messages-message' }">
        <div class="flex justify-between items-center px-7 py-3">
          <div class="flex items-center gap-3">
            <UAvatar size="xl" src="https://github.com/benjamincanac.png" />
            <div class="flex flex-col">
              <p>Cyrian</p>
              <p class="font-light text-xs">Envoyer il y a 3j</p>
            </div>
          </div>

          <UIcon class="mt-1" size="20" name="lucide:arrow-right"/>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.top {
  background-color: #29282D;
}
</style>