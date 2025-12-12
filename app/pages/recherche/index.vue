<script setup>
import ProfileCard from "~/components/ProfileCard.vue";

definePageMeta({ layout: 'user' })
import { ref } from 'vue'

const query = ref('')
const mapOpen = ref(false)
const filtersOpen = ref(false)
const galleryImages = ref([
  '/galerie/tattoo1.jpg',
  '/galerie/tattoo2.jpg',
  '/galerie/tattoo3.jpg',
  '/galerie/tattoo4.jpg',
  '/galerie/tattoo5.jpg',
  '/galerie/tattoo6.jpg',
  '/galerie/tattoo7.jpg',
  '/galerie/tattoo8.jpg',
  '/galerie/tattoo9.jpg',
  '/galerie/tattoo10.jpg',
  '/galerie/tattoo11.jpg',
  '/galerie/tattoo12.jpg'
])

function openMap() {
  mapOpen.value = true
}
function openFilters() {
  filtersOpen.value = true
}

const items = ref([
  {
    label: 'Galerie',
    slot: 'images'
  },
  {
    label: 'Tatoueurs',
    slot: 'tatoueurs'
  }
])
</script>

<template>
    <div class="w-full min-h-screen flex flex-col">
        <!-- Header with search + icons (kept from index) -->
        <div class="flex flex-col justify-center items-center h-full w-full bg-[#29282d] px-4 py-4">
            <div class="flex items-center gap-3">
                <input
                    v-model="query"
                    type="search"
                    placeholder="Rechercher..."
                    class="flex-1 px-6 py-1 rounded-full border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />

                <button @click="openMap" class="flex justify-center items-center p-3 rounded-full bg-white/10 text-white hover:bg-white/20">
                  <Icon class="text-xl" name="lucide:map" />
                </button>

                <button @click="openFilters" class="flex justify-center items-center p-3 rounded-full bg-white/10 text-white hover:bg-white/20">
                  <Icon class="text-xl" name="lucide:filter" />
                </button>
            </div>

            <!-- Keep any other header controls as needed -->
        </div>
        <img src="/banner8.png" alt="Banner" class="w-full h-auto object-cover block" />
        
        <div class="px-5">
          <!-- Map overlay (placeholder) -->
          <div v-if="mapOpen" class="fixed inset-0 z-40 bg-black/60 flex items-center justify-center">
            <div class="bg-white rounded-lg p-6 w-11/12 max-w-3xl">
              <div class="flex justify-between items-center mb-4">
                <h3 class="text-lg font-medium">Map</h3>
                <button @click="mapOpen = false" class="text-sm text-gray-600">Fermer</button>
              </div>
              <div class="h-64 bg-gray-100 rounded">Carte (placeholder)</div>
            </div>
          </div>

          <!-- Filters panel -->
          <div v-if="filtersOpen" class="fixed inset-y-0 right-0 z-50 w-80 bg-white p-4 shadow-lg">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-lg font-medium">Filtres</h3>
              <button @click="filtersOpen = false" class="text-sm text-gray-600">Fermer</button>
            </div>
            <div class="space-y-3">
              <div class="text-sm text-gray-500">(Options de filtre placeholder)</div>
            </div>
          </div>
          <UTabs
              size="md"
              variant="pill"
              :items="items"
              class="w-full bg-white/0"
          >
            <template #tatoueurs>
              <!-- Results area: responsive grid so cards fit on screen -->
              <main class="flex-1 overflow-auto p-4">
                <h2 class="text-xl font-semibold mb-4">Tatoueurs</h2>

                <div class="w-full flex flex-col justify-center items-center gap-3">
                  <ProfileCard
                    name="Cyrilan G"
                    :rating="4.8"
                    :reviews="320"
                    description="Gris & Bio-ink, textures et recouvrements"
                    :tags="['Gris','Bio-ink']"
                    :images="['/galerie/tattoo1.jpg','/galerie/tattoo2.jpg','/galerie/tattoo3.jpg']"
                    avatar="https://github.com/benjamincanac.png"
                  />
                  <ProfileCard
                    name="Margot L"
                    :rating="4.6"
                    :reviews="210"
                    description="Couleurs vives, micro-realism"
                    :tags="['Cover','Realism']"
                    :images="['/galerie/tattoo4.jpg','/galerie/tattoo5.jpg','/galerie/tattoo6.jpg']"
                    avatar="https://github.com/identicon.png"
                  />
                  <ProfileCard
                    name="Jules R"
                    :rating="4.9"
                    :reviews="540"
                    description="Textures, dépôts et recouvrements"
                    :tags="['Textures','Recouvrements']"
                    :images="['/galerie/tattoo7.jpg','/galerie/tattoo8.jpg','/galerie/tattoo9.jpg']"
                    avatar="https://github.com/identicon2.png"
                  />
                  <ProfileCard
                    name="Amina K"
                    :rating="4.7"
                    :reviews="128"
                    description="Aréoles et réparations esthétiques"
                    :tags="['Aréole','Réparations']"
                    :images="['/galerie/tattoo10.jpg','/galerie/tattoo11.jpg','/galerie/tattoo12.jpg']"
                    avatar="https://github.com/identicon3.png"
                  />
                </div>
              </main>
            </template>
            <template #images>
              <main class="flex-1 overflow-auto p-4">
                <h2 class="text-xl font-semibold mb-4">Tatouages</h2>

                <div class="mt-6 grid grid-cols-3 gap-1">
                  <div v-for="(img, i) in galleryImages" :key="i" class="w-full aspect-square overflow-hidden relative">
                    <UModal>
                      <img
                          :src="img"
                          :alt="`Tatouage ${i + 1}`"
                          class="w-full h-full object-cover"
                      />

                      <template #content>
                        <img
                            :src="img"
                            :alt="`Tatouage ${i + 1}`"
                            class="w-full h-full object-cover"
                        />
                      </template>
                    </UModal>
                  </div>
                </div>
              </main>
            </template>
          </UTabs>
        </div>
    </div>
</template>