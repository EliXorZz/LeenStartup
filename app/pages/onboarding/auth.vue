<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent, AuthFormField } from '@nuxt/ui'

const toast = useToast()

const fields: AuthFormField[] = [
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Entre ton adresse mail',
    required: false
  },
  {
    name: 'password',
    label: 'Mot de passe',
    type: 'password',
    placeholder: 'Entre ton mot de passe',
    required: false
  },
  {
    name: 'password',
    label: 'Confirmation de passe',
    type: 'password',
    placeholder: 'Entre la confirmation ton mot de passe',
    required: false
  }
]

const schema = z.object({
})

type Schema = z.output<typeof schema>

const router = useRouter()
function onSubmit(payload: FormSubmitEvent<Schema>) {
  router.push({ name: 'index' })
}
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
            Créer ton profil
          </h1>
          <p class="text-gray-500 mt-2">
            Inscris-toi pour continuer et accéder aux tatoueurs spécialisés adaptés à ton profil.
          </p>
        </div>

        <div class="text-left flex flex-wrap justify-center gap-4">
          <UAuthForm
              :schema="schema"
              :fields="fields"
              :submit="{ label: 'Inscription' }"
              @submit="onSubmit"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>