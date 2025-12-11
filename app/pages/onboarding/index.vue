<script setup lang="ts">
const items = ref([
  {
    label: 'Tatoueur spécialisé',
    value: 'tatoueur',
    description: 'Artiste certifié ou expérimenté dans le tatouage sur cicatrices, brûlures ou peaux sensibles.'
  },
  {
    label: 'Particulier',
    value: 'particulier',
    description: 'Personne souhaitant sublimer, camoufler ou transformer une cicatrice, brûlure ou zone sensible.'
  },
])

const selected = ref("particulier")
</script>

<template>
  <div class="w-full min-h-dvh bg-gray-50 flex flex-col">
    <div class="flex flex-col items-center justify-center min-h-dvh">
      <div class="w-40">
        <img class="object-contain" src="~/assets/logo.svg"/>
      </div>

      <div class="flex flex-col justify-center p-8 max-w-md w-full text-center">
        <div class="flex flex-col gap-6">
          <h1 class="text-3xl font-semibold text-gray-800">
            Vous êtes quelle personne ?
          </h1>

          <p class="text-gray-500 mt-2">
            Cela nous permet d’adapter l’expérience à votre profil.
          </p>
        </div>

        <div class="mt-6 flex flex-wrap justify-center gap-4">
          <URadioGroup
              v-model="selected"
              color="primary"
              variant="table"
              :items="items"
          />
        </div>
      </div>

      <div>
        <NuxtLink :to="{ name: 'onboarding-type' }">
          <UButton class="cursor-pointer">Continuer</UButton>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style>
fieldset button {
  display: none;
}
</style>