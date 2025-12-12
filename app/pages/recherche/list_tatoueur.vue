<script setup>
definePageMeta({ layout: 'user' })
import { ref } from 'vue'

const query = ref('')
const mapOpen = ref(false)
const filtersOpen = ref(false)

const tatoueurs = [
    {
        name: 'Cyrian',
        avatar: 'https://i.pravatar.cc/80?img=3',
        rating: 4.8,
        tags: ['Cicatrices', 'Brulure'],
        desc: "Lorem ipsum is simply dummy text of the printing and industry...",
        images: [
            'https://source.unsplash.com/400x300/?tattoo,1',
            'https://source.unsplash.com/400x300/?tattoo,2',
            'https://source.unsplash.com/400x300/?tattoo,3'
        ]
    },
    {
        name: 'Amelie',
        avatar: 'https://i.pravatar.cc/80?img=5',
        rating: 4.6,
        tags: ['Noir & Gris'],
        desc: "Artist expérimentée spécialisée en finitions noir & gris.",
        images: [
            'https://source.unsplash.com/400x300/?tattoo,4',
            'https://source.unsplash.com/400x300/?tattoo,5',
            'https://source.unsplash.com/400x300/?tattoo,6'
        ]
    }
]

function openMap() { mapOpen.value = true }
function openFilters() { filtersOpen.value = true }
</script>

<template>
    <div class="w-full min-h-screen flex flex-col">
        <!-- Header with search + icons (kept from index) -->
        <div class="w-full mb-4 bg-[#29282d] p-4">
            <div class="flex items-center gap-3 mb-4">
                <input
                    v-model="query"
                    type="search"
                    placeholder="Rechercher..."
                    class="flex-1 px-6 py-3 rounded-full border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
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

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                <article v-for="(t, idx) in tatoueurs" :key="idx" class="bg-white rounded-lg p-4 shadow flex flex-col">
                    <div class="flex gap-4">
                        <img :src="t.avatar" alt="avatar" class="w-16 h-16 rounded-full object-cover flex-shrink-0" />
                        <div class="flex-1 min-w-0">
                            <div class="flex items-center gap-3">
                                <h3 class="font-medium truncate">{{ t.name }}</h3>
                                <div class="text-sm text-gray-500">★ {{ t.rating }}</div>
                                <div class="ml-auto flex gap-2">
                                    <span v-for="(tag,i) in t.tags" :key="i" class="text-xs bg-gray-100 px-2 py-1 rounded-full">{{ tag }}</span>
                                </div>
                            </div>
                            <p class="text-sm text-gray-600 mt-2 line-clamp-3">{{ t.desc }}</p>

                            <div class="mt-3 flex gap-2 overflow-hidden">
                                <img v-for="(img, i) in t.images" :key="i" :src="img" class="w-24 h-20 object-cover rounded" />
                            </div>
                        </div>
                    </div>

                    <div class="mt-3 text-right">
                        <button class="text-sm text-indigo-600 font-medium">Voir son profil →</button>
                    </div>
                </article>
            </div>
        </main>
    </div>
</template>