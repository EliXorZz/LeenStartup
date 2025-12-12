<script setup lang="ts">
const route = useRoute()
function selectedBase(current: string) {
  return route.path.includes(current) ? ['rounded-full border-1 border-white px-2'] : null
}
</script>

<template>
  <div class="flex justify-around text-white rounded-full px-3 glass">
    <NuxtLink :to="{ name: 'ar' }">
      <div class="flex flex-col gap-1 items-center p-2 cursor-pointer hover:opacity-50">
        <Icon class="text-xl" name="custom:ra-icon"/>
        <p class="text-xs font-light" :class="selectedBase('/ar')">RA</p>
      </div>
    </NuxtLink>
    <NuxtLink :to="{ name: 'search' }">
      <div class="flex flex-col gap-1 items-center p-2 cursor-pointer hover:opacity-50">
        <Icon class="text-xl" name="custom:search-icon" />
        <p class="text-xs font-light" :class="selectedBase('/search')">Recherche</p>
      </div>
    </NuxtLink>
    <NuxtLink :to="{ name: 'home' }">
      <div class="flex flex-col gap-1 items-center p-2 cursor-pointer hover:opacity-50">
        <Icon class="text-xl" name="custom:home-icon" />
        <p class="text-xs font-light" :class="selectedBase('/home')">Accueil</p>
      </div>
    </NuxtLink>
    <NuxtLink :to="{ name: 'messages' }">
      <div class="flex flex-col gap-1 items-center p-2 cursor-pointer hover:opacity-50">
        <Icon class="text-xl" name="custom:chat-icon"/>
        <p class="text-xs font-light" :class="selectedBase('/messages')">Messages</p>
      </div>
    </NuxtLink>
    <NuxtLink :to="{ name: 'profile' }">
      <div class="flex flex-col gap-1 items-center p-2 cursor-pointer hover:opacity-50">
        <Icon class="text-xl" name="custom:profile-icon"/>
        <p class="text-xs font-light" :class="selectedBase('/profile')">Profile</p>
      </div>
    </NuxtLink>
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