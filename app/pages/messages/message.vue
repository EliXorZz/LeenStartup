<script setup lang="ts">
import BackIcon from "~/components/BackIcon.vue";

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
  { text: 'Très bien ! Quelle taille et quelle zone exactement ?', sender: 'other' }
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

    <div ref="chatContainer" class="flex-1 flex flex-col gap-3 px-4 pt-4 overflow-y-auto">
      <div
          v-for="(msg, index) in messages"
          :key="index"
          :class="msg.sender === 'user' ? 'self-end bg-[#A37968] text-white rounded-3xl rounded-br-none px-4 py-2 max-w-[70%]'
                                     : 'self-start bg-[#655D5A] text-white rounded-3xl rounded-bl-none px-4 py-2 max-w-[70%]'"
      >
        <p>{{ msg.text }}</p>
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