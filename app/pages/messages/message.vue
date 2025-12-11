<script setup lang="ts">
definePageMeta({
  layout: 'user',
})
interface Message {
  text: string
  sender: 'user' | 'other'
}

const messages = ref<Message[]>([
  { text: 'Bonjour ! Comment puis-je t’aider pour ton tatouage ?', sender: 'other' },
  { text: 'Bonjour ! Je voudrais couvrir une cicatrice sur mon bras.', sender: 'user' },
  { text: 'Très bien ! Quelle taille et quelle zone exactement ?', sender: 'other' },
  { text: 'Parfait', sender: 'user' },
])
</script>

<template>
  <div class="flex flex-col">

    <div class="top w-full h-16 flex justify-between items-center text-white px-4">
      <div class="flex gap-4 items-center">
        <BackIcon/>
        <p class="font-semibold">_Cyrian74Tatou_</p>
      </div>
      <div>
        <UIcon class="mt-1" size="20" name="lucide:send-horizontal"/>
      </div>
    </div>

    <div ref="chatContainer" class="flex flex-col gap-3 px-4 pt-4 overflow-y-auto h-[calc(100dvh-260px)] pb-10">
      <div
          v-for="(msg, index) in messages"
          :key="index"
          :class="msg.sender === 'user' ? 'self-end bg-[#A37968] text-white rounded-3xl rounded-br-none px-4 py-2 max-w-[70%]'
                                     : 'self-start bg-[#655D5A] text-white rounded-3xl rounded-bl-none px-4 py-2 max-w-[70%]'"
      >
        <p>{{ msg.text }}</p>
      </div>

      <div class="self-end flex flex-col items-center justify-center gap-2">
        <div class="relative group w-40 cursor-pointer">

          <!-- Halo doux -->
          <div class="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#A37968] to-[#c6473f]
        opacity-20 blur-xl group-hover:opacity-40 group-hover:blur-2xl
        transition-all duration-500"></div>

          <!-- Liseré animé fin -->
          <div class="absolute inset-0 rounded-3xl p-[1.5px] bg-gradient-to-r
        from-[#A37968] to-[#add399]
        opacity-60 group-hover:opacity-100 transition-all duration-300"></div>

          <!-- Contenu -->
          <NuxtLink :to="{ name: 'ar' }">
            <div class="relative bg-white rounded-3xl p-6 shadow-lg group-hover:shadow-xl
                transition-all duration-300 group-hover:scale-[1.03]">
                <img src="~/assets/tatoo.png" alt="">
            </div>
          </NuxtLink>
        </div>

        <p class="text-xs w-30 text-center font-light text-slate-600">Clique pour l'afficher en réalité augmenté</p>
      </div>

      <div class="self-end bg-[#A37968] text-white rounded-3xl rounded-br-none px-4 py-2 max-w-[70%]">
        <p>Voilà le tatouage</p>
      </div>
    </div>

    <div class="absolute bottom-22 flex items-center bg-slate-100 py-5 w-full">
      <div class="px-5 w-full">
        <UTextarea class="cursor-pointer w-full" placeholder="Mon message ..." trailing-icon="lucide:send-horizontal"/>
      </div>
    </div>

  </div>
</template>

<style scoped>
.top {
  background-color: #29282D;
}
</style>

<style>
textarea {
  font-size: 16px;
}
</style>