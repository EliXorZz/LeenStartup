<script setup lang="ts">
const options = [
  "Cicatrice récente",
  "Cicatrice ancienne",
  "Brûlure légère",
  "Brûlure profonde",
  "Peau abîmée",
  "Peau sensible",
  "Peau post-opératoire",
  "Vergetures",
  "Cicatrice chéloïde",
  "Peau irritée ou fragilisée"
]
</script>

<template>
  <div class="w-full min-h-dvh bg-gray-50 flex flex-col">

    <div class="flex flex-col items-center justify-center min-h-dvh">
      <div class="w-40">
        <img class="object-contain" src="~/assets/logo.svg"/>
      </div>

      <div class="flex flex-col justify-center gap-10 p-8 max-w-md w-full text-center">
        <div class="flex flex-col gap-3">
          <h1 class="text-3xl font-semibold text-gray-800">
            Votre type de peau, et particularités ?
          </h1>

          <p class="text-gray-500 mt-2">
            Cela nous permet d’adapter l’expérience à votre profil.
          </p>
        </div>

        <div class="flex flex-wrap justify-center gap-4">
          <SelectableOption v-for="name in options" :key="name" :name="name"/>
        </div>
      </div>

      <NuxtLink :to="{ name: 'onboarding-zone' }">
        <UButton class="cursor-pointer">Continuer</UButton>
      </NuxtLink>
    </div>
  </div>
</template>
