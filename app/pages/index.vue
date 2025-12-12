<script setup lang="ts">
const categories = [
	'Cicatrice',
	'Brûlure',
	'Tatouage permanent',
	'Moignons',
	'Reconstruction mammaire',
	'Cover'
] as const;
</script>

<template>
	<div class="min-h-screen bg-[#fefdf2] text-gray-900">
		<!-- Hero -->
		<section class="relative h-[62vh] md:h-[68vh] overflow-hidden">
			<img
				src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=6a1b6d0a1a6b2b1c2c3d4e5f6a7b8c9d"
				alt="Hero"
				class="absolute inset-0 w-full h-full object-cover"
			/>
			<div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60"></div>

			<div class="relative z-10 max-w-xl mx-auto h-full flex flex-col justify-center items-center px-6 text-center">
				<p class="text-sm text-white/80 mb-3 tracking-widest">DÉCOUVRE LE CATALOGUE RÉÉDUCATIF</p>
				<h1 class="text-3xl md:text-4xl font-semibold text-white mb-6">Retrouve le style qui te correspond</h1>
				<button class="bg-white/90 text-gray-900 py-2.5 px-6 rounded-full font-medium shadow">Découvrir</button>
				<!-- dots -->
				<div class="mt-6 flex items-center gap-2">
					<span class="w-3 h-3 rounded-full bg-white/90"></span>
					<span class="w-2 h-2 rounded-full bg-white/50"></span>
					<span class="w-2 h-2 rounded-full bg-white/50"></span>
				</div>
			</div>
		</section>

		<main class="-mt-12 px-4 pb-16 md:px-8">
			<!-- Categories grid -->
			<section class="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
				<template v-for="(label, idx) in categories" :key="label">
					<div class="relative rounded-xl overflow-hidden h-28 bg-gray-200 shadow-sm">
						<img
							src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=abcd1234"
							:alt="label"
							class="w-full h-full object-cover grayscale/20 brightness-75"
						/>
						<div class="absolute inset-0 bg-black/25"></div>
						<div class="absolute bottom-2 left-2 right-2 text-white">
							<div class="bg-black/40 px-3 py-1 rounded-full inline-block text-sm">{{ label }}</div>
						</div>
					</div>
				</template>
			</section>

             <img src="/banner2.svg" alt="Banner" />

			<!-- Artist card -->
			<section class="mt-6 bg-[#a57a69]">
               
				<div class="bg-white rounded-xl shadow p-4 flex items-center gap-4">
					<img src="https://images.unsplash.com/photo-1540218858-2b6c6a4af86b?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&s=artistimg" alt="avatar" class="w-16 h-16 rounded-full object-cover" />
					<div class="flex-1">
						<div class="flex items-center justify-between">
							<div>
								<div class="font-semibold">Cyrilan G</div>
								<div class="text-xs text-gray-500 mt-0.5">Gris & Bio-ink, textures et recouvrements</div>
							</div>
							<div class="text-right">
								<div class="text-sm font-medium">4.8</div>
								<div class="text-xs text-gray-400">(320)</div>
							</div>
						</div>
						<div class="mt-3 flex items-center gap-3">
							<button class="text-sm bg-slate-800 text-white px-3 py-1 rounded-full">Voir son profil</button>
							<button class="text-sm text-gray-600 underline">Voir samples</button>
						</div>
					</div>
				</div>
			</section>

			<!-- Popular tattooers -->
			<section class="mt-6">
                <img src="/banner4.svg" alt="Banner" />
				<h3 class="text-sm text-gray-600 mb-3">Les tatoueurs populaires</h3>
				<div class="flex gap-4 overflow-x-auto pb-2">
					<template v-for="i in 8" :key="'pop-'+i">
						<div class="w-20 flex-shrink-0 text-center">
							<img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&s=avatar" class="w-14 h-14 rounded-full mx-auto object-cover border-2 border-white shadow-sm" />
							<div class="text-xs mt-2">Cyrilan</div>
						</div>
					</template>
				</div>
			</section>
		</main>

		<BottomBar />
	</div>
</template>

<style scoped>
/* small visual tweaks handled by Tailwind classes */
</style>
