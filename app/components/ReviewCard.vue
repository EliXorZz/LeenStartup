
<script setup lang="ts">

</script>

<template>
  <div class="bg-[#71625C] rounded-2xl px-5 py-5">
    <div class="flex flex-col gap-5">
      <div class="flex items-center gap-4">
        <div class="w-15 mt-2">
          <UAvatar class="w-full h-full" src="https://github.com/benjamincanac.png" />
        </div>
        <div>
          <div class="name">
            <p class="text-base">Dylan</p>
            <p class="text-sm font-light">11/12/2025 - 11/03/2026</p>
          </div>
          <div class="flex items-center">
            <UIcon v-for="_ in 4" class="mt-1 text-yellow-500" size="15" name="heroicons:star-16-solid"/>
          </div>
        </div>
      </div>
      <div>
        <p class="text-sm">Grâce à BloomInk, trouvez un tatoueur spécialisé en tatouage reconstructif, découvrez des ... plus</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
