<script setup>
import ProfileCard from "~/components/ProfileCard.vue";

definePageMeta({ layout: 'user' })
import { ref } from 'vue'

const query = ref('')
const mapOpen = ref(false)
const filtersOpen = ref(false)

function openMap() { mapOpen.value = true }
function openFilters() { filtersOpen.value = true }

const items = ref([
  {
    label: 'Gallerie',
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
        <div class="flex flex-col justify-center items-center h-full w-full mb-4 bg-[#29282d] px-4 py-4">
            <div class="flex items-center gap-3">
                <input
                    v-model="query"
                    type="search"
                    placeholder="Rechercher..."
                    class="flex-1 px-6 py-1 rounded-full border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />

                <button @click="openMap" class="p-3 rounded-full bg-white/10 text-white hover:bg-white/20">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A2 2 0 013 15.382V5.618a2 2 0 011.553-1.941L9 1l6 2 5.447 2.724A2 2 0 0121 8.618v9.764a2 2 0 01-1.553 1.941L15 23l-6-2z" />
                    </svg>
                </button>

                <button @click="openFilters" class="p-3 rounded-full bg-white/10 text-white hover:bg-white/20">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 019 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
                    </svg>
                </button>
            </div>

            <!-- Keep any other header controls as needed -->
        </div>

        <div class="px-5">
          <UTabs
              size="md"
              variant="pill"
              :items="items"
              class="w-full bg-white/0"
          >
            <template #tatoueurs>
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

              <!-- Results area: responsive grid so cards fit on screen -->
              <main class="flex-1 overflow-auto p-4">
                <h2 class="text-2xl font-semibold mb-4">Résultats</h2>

                <div class="w-full flex flex-col justify-center items-center gap-3">
                  <ProfileCard/>
                  <ProfileCard/>
                  <ProfileCard/>
                  <ProfileCard/>
                </div>
              </main>
            </template>
            <template #images>
              <div class="mt-6 grid grid-cols-3 gap-1">
                <div v-for="i in 24" :key="i" class="w-full aspect-square overflow-hidden">
                  <UModal>
                    <img
                        src="~/assets/galerie.jpg"
                        alt=""
                        class="w-full h-full object-cover"
                    />

                    <template #content>
                      <img
                          src="~/assets/galerie.jpg"
                          alt=""
                          class="w-full h-full object-cover"
                      />
                    </template>
                  </UModal>
                </div>
              </div>
            </template>
          </UTabs>
        </div>
    </div>
</template>