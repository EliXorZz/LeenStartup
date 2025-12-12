<script setup lang="ts">
definePageMeta({
  layout: 'user',
})

const users = [
  { id: 1, name: 'Gontrand', src: '/profile/tattoo1.jpg', last: 'Envoyé il y a 3j' },
  { id: 2, name: 'Gustave', src: '/profile/tattoo2.jpg', last: 'Envoyé il y a 2j' },
  { id: 3, name: 'Léa', src: '/profile/tattoo3.jpg', last: 'Envoyé il y a 1h' },
  { id: 4, name: 'Ana', src: '/profile/tattoo4.jpg', last: 'Envoyé il y a 4j' },
  { id: 5, name: 'Jules', src: '/profile/tattoo5.jpg', last: 'Envoyé il y a 6h' },
]
</script>

<template>
  <div>
    <div class="z-10 sticky top-0 top w-full h-16 flex justify-between items-center text-white px-4">
      <div class="flex gap-4 items-center">
        <BackIcon/>
      </div>
    </div>
    
    <img src="/banner8.png" alt="Banner" class="w-full h-auto object-cover block" />
    <h1 class="px-7 mt-5 text-xl font-semibold">Messages</h1>

    <div class="mt-3 flex flex-col">
      <NuxtLink v-for="user in users" :key="user.id" :to="{ name: 'messages-message', query: { id: user.id, name: user.name, src: user.src } }">
        <div class="flex justify-between items-center px-7 py-3">
          <div class="flex items-center gap-3">
            <UAvatar size="xl" :src="user.src" />
            <div class="flex flex-col">
              <p>{{ user.name }}</p>
              <p class="font-light text-xs">{{ user.last }}</p>
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