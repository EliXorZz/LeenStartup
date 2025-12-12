<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent, AuthFormField } from '@nuxt/ui'

definePageMeta({
  layout: 'user',
})

const fields: AuthFormField[] = [
  {
    name: 'username',
    type: 'text',
    label: 'Nom d\'utilisateur',
    placeholder: 'Entre ton nom d\'utilisateur',
    required: false,
    defaultValue: '_Cyrian74Tatou_'
  },
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Entre ton adresse mail',
    required: false,
    defaultValue: 'cyrian@gmail.com'
  },
]

const schema = z.object({
})

type Schema = z.output<typeof schema>
</script>

<template>
  <div class="pb-20">
    <div class="z-10 sticky top-0 top w-full h-16 flex justify-between items-center text-white px-4">
      <div class="flex gap-4 items-center">
        <BackIcon/>
        <p class="font-semibold">_Cyrian74Tatou_</p>
      </div>
    </div>

    <div class="w-full flex justify-center pt-10 px-10">
      <div class="flex flex-col gap-2 w-full">
        <div class="flex gap-5 items-center">
          <div class="w-20">
            <UAvatar class="w-full h-full" src="https://github.com/benjamincanac.png" />
          </div>
          <div class="flex flex-col gap-1.5">
            <p class="text-lg">Cyrian</p>
          </div>
        </div>

        <UPageCard title="Profil d'utilisateur" class="mt-10">
          <UAuthForm
              :schema="schema"
              :fields="fields"
              :submit="{ label: 'Modifier', block: true }"
          />
        </UPageCard>
      </div>
    </div>
  </div>
</template>

<style scoped>
.top {
  background-color: #29282D;
}
</style>