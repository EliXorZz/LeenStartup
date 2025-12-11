<script setup lang="ts">
definePageMeta({
  layout: 'user',
})
</script>

<template>
  <div>
    <div class="top w-full h-16 flex justify-between items-center text-white px-4">
      <div class="flex gap-4 items-center">
        <BackIcon/>
        <p class="font-semibold">_Cyrian74Tatou_</p>
      </div>
    </div>

    <div class="w-full flex justify-center pt-10 px-10">
      <div class="flex flex-col gap-2 w-full">
        <div class="flex gap-5">
          <div class="w-20">
            <UAvatar class="w-full h-full" src="https://github.com/benjamincanac.png" />
          </div>
          <div class="flex flex-col gap-1">
            <p class="text-lg">Cyrian</p>
            <div class="flex gap-5 leading-none">
              <div class="flex flex-col justify-center items-center gap-1">
                <p class="font-bold">4.8</p>
                <p>Note</p>
              </div>

              <div class="flex flex-col justify-center items-center gap-1">
                <p class="font-bold">+400</p>
                <p>Avis</p>
              </div>

              <div class="flex flex-col justify-center items-center gap-1">
                <p class="font-bold">140</p>
                <p>Tatouages</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-2 flex flex-col">
          <p class="text-sm font-semibold">France</p>
          <p class="text-xs">Rue de l'arc en ciel</p>
        </div>

        <p class="mt-3 text-sm">Le tatoueur qui répare vos cicatrices</p>

        <UButton :to="{ name: 'messages-message' }" variant="outline" class="mt-5 rounded-full justify-center">Contacter</UButton>

        <div class="mt-6 grid grid-cols-3 gap-1">
          <div v-for="i in 12" :key="i" class="w-full aspect-square overflow-hidden">
            <img
                src="~/assets/galerie.jpg"
                alt=""
                class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.top {
  background-color: #29282D;
}
</style>