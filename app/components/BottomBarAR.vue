<script setup lang="ts">
const openDrawer = ref(false)

const router = useRouter()
function onBack() {
  router.back()
}
</script>

<template>
  <div class="flex justify-around gap-16 text-white rounded-full px-3 glass">
    <UDrawer v-model:open="openDrawer">
      <template #content>
        <div class="flex flex-col justify-center items-center w-full pt-6">
          <h1>Sélectionner un tatouage dans la bibliothèque</h1>

          <!-- wrapper pour ne pas casser le scroll -->
          <div class="w-full overflow-hidden">
            <div class="flex gap-4 overflow-x-auto whitespace-nowrap py-10 px-10 scroll-smooth">
              <div
                  v-for="i in 10"
                  :key="i"
                  class="w-40 h-40 p-4 rounded-2xl overflow-hidden shrink-0 bg-gray-100 inline-block"
                  @click="openDrawer = false"
              >
                <img
                    src="~/assets/tatoo.png"
                    alt=""
                    class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </template>
    </UDrawer>

    <div class="flex flex-col gap-1 items-center p-2 cursor-pointer hover:opacity-20" @click="openDrawer = true">
      <Icon class="text-xl" name="custom:design-icon" />
      <p class="text-xs font-light">Galerie</p>
    </div>
    <div class="cursor-pointer absolute -translate-y-10 w-20 h-20 rounded-full bg-white border-2 border-gray-400 flex justify-center items-center">
      <Icon size="50" name="custom:ra-icon-black" class="hover:opacity-65" />
    </div>
    <div class="flex flex-col gap-1 items-center p-2 cursor-pointer hover:opacity-20" @click="onBack">
      <UIcon class="text-xl" name="lucide:arrow-left" />
      <p class="text-xs font-light">Retour</p>
    </div>
  </div>
</template>

<style scoped>
.glass {
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(0, 0, 0, 0.3);
}
</style>