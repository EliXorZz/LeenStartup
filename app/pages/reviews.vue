<script setup lang="ts">
import ReviewCard from "~/components/ReviewCard.vue";

definePageMeta({
  layout: 'user',
})
</script>

<template>
  <div class="pb-20 bg-[#A37968] min-h-svh text-white">
    <div class="z-10 sticky top-0 top w-full h-16 flex justify-between items-center text-white px-4">
      <div class="flex gap-4 items-center">
        <BackIcon/>
        <p class="font-semibold">_Cyrian74Tatou_</p>
      </div>
      <NuxtLink :to="{ name: 'messages-message' }">
        <UIcon class="mt-1" size="20" name="lucide:send-horizontal"/>
      </NuxtLink>
    </div>

    <div class="w-full flex justify-center pt-10 px-10">
      <div class="flex flex-col gap-3 justify-center items-center">
        <ReviewCard v-for="_ in 7"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.top {
  background-color: #29282D;
}
</style>