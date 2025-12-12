<script setup lang="ts">

</script>

<template>
  <div class="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl z-50">
    <div class="flex justify-around text-white rounded-full px-3 py-2 glass">
    <div class="flex flex-col gap-1 items-center p-2 cursor-pointer hover:opacity-20">
      <Icon class="text-xl" name="custom:ra-icon" />
      <p class="text-xs font-light">RA</p>
    </div>
    <div class="flex flex-col gap-1 items-center p-2 cursor-pointer hover:opacity-20">
      <Icon class="text-xl" name="custom:search-icon" />
      <p class="text-xs font-light">Recherche</p>
    </div>
    <div class="flex flex-col gap-1 items-center p-2 cursor-pointer hover:opacity-20">
      <Icon class="text-xl" name="custom:home-icon" />
      <NuxtLink to="/" class="text-xs font-light">Accueil</NuxtLink>
    </div>
    <div class="flex flex-col gap-1 items-center p-2 cursor-pointer hover:opacity-20">
      <Icon class="text-xl" name="custom:chat-icon" />
      <p class="text-xs font-light">Messages</p>
    </div>
    <div class="flex flex-col gap-1 items-center p-2 cursor-pointer hover:opacity-20">
      <Icon class="text-xl" name="custom:profile-icon" />
      <p class="text-xs font-light">Profile</p>
    </div>
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
</style>