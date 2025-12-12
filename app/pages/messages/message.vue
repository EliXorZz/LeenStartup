<script setup lang="ts">

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

const route = useRoute()
const userName = computed(() => (route.query.name as string) || '_Cyrian74Tatou_')
const userSrc = computed(() => (route.query.src as string) || '/profile/tattoo1.jpg')
</script>

<template>
  <div class="flex flex-col">

    <div class="z-10 sticky top-0 top w-full h-16 flex justify-between items-center text-white px-4">
      <div class="flex gap-4 items-center">
        <BackIcon/>
        <UAvatar size="md" :src="userSrc" />
        <p class="font-semibold">{{ userName }}</p>
      </div>
    </div>
    <img src="/banner8.png" alt="Banner" class="w-full h-auto object-cover block" />
    <div ref="chatContainer" class="flex flex-col gap-3 px-4 pt-4 overflow-y-auto h-[calc(100dvh-260px)] pb-10">
      <div
          v-for="(msg, index) in messages"
          :key="index"
          :class="msg.sender === 'user' ? 'self-end bg-[#655D5A] text-white rounded-3xl rounded-br-none px-4 py-2 max-w-[70%]'
                                     : 'self-start bg-[#A37968] text-white rounded-3xl rounded-bl-none px-4 py-2 max-w-[70%]'"
      >
        <p>{{ msg.text }}</p>
      </div>

      <div class="self-end flex flex-col items-center justify-center gap-2">
        <div class="relative group w-40 cursor-pointer">

          <!-- Halo doux -->
          <div class="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#655D5A] to-[#c6473f]
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

      <div class="self-end bg-[#655D5A] text-white rounded-3xl rounded-br-none px-4 py-2 max-w-[70%]">
        <p>Voilà le tatouage</p>
      </div>
    </div>

    <div class="fixed bottom-0 left-0 right-0 flex justify-center px-4 pb-6">
      <div class="w-full max-w-3xl">
        <div class="bg-[#2f2f33] rounded-full flex items-center px-4 py-3 shadow-inner glass">
          <button class="w-10 h-10 flex items-center justify-center rounded-full bg-[#a07b72] text-white mr-3">
            <UIcon name="lucide:image" size="18" />
          </button>

          <input
            type="text"
            placeholder="Votre message..."
            class="flex-1 bg-transparent outline-none text-gray-200 placeholder-gray-400"
          />

          <button class="w-10 h-10 flex items-center justify-center rounded-full bg-[#c08b7f] text-white ml-3">
            <UIcon name="lucide:mic" size="18" />
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.top {
  background-color: #29282D;
}

.glass {
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(0, 0, 0, 0.3);
}
</style>

<style>
textarea {
  font-size: 16px;
}
</style>