<script setup lang="ts">
const categories = [
	{ label: 'Cicatrice', img: '/home/cicatrice.png' },
	{ label: 'Brûlure', img: '/home/brulure.png' },
	{ label: 'Tatouage permanent', img: '/home/tatouage_permanent.png' },
	{ label: 'Moignons', img: '/home/moignon.jpg' },
	{ label: 'Aréole', img: '/home/areole.jpg' },
	{ label: 'Cover', img: '/home/cover.png' },
] as const;

definePageMeta({
  layout: 'user',
})
</script>

<template>
	<div class="min-h-screen bg-[#fefdf2] text-gray-900">
		<!-- Hero -->
		<section class="relative h-[62vh] md:h-[68vh] overflow-hidden">
			<img
				src="/img/home.jpg"
				alt="Hero"
				class="absolute inset-0 w-full h-full object-cover"
			/>
			<div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80"></div>

			<div class="relative z-10 max-w-xl mx-auto h-full flex flex-col justify-end items-center px-6 text-center pb-8">
				<p class="text-sm text-white/80 mb-3 tracking-widest">DÉCOUVRE LE CATALOGUE</p>
				<h1 class="text-3xl md:text-4xl font-semibold text-white mb-6">Retrouve le style qui te correspond</h1>
				<NuxtLink :to="{ name: 'recherche' }">
          <button class="cursor-pointer bg-white/90 text-gray-900 py-2.5 px-6 rounded-full font-medium shadow">Découvrir</button>
        </NuxtLink>
				<!-- dots -->
				<div class="mt-6 flex items-center gap-2">
					<span class="w-3 h-3 rounded-full bg-white/90"></span>
					<span class="w-2 h-2 rounded-full bg-white/50"></span>
					<span class="w-2 h-2 rounded-full bg-white/50"></span>
				</div>
			</div>
		</section>

		<main class="mt-6 px-4 pb-16 md:px-8">
			<!-- Categories grid -->
			<section class="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
								<template v-for="(cat, idx) in categories" :key="cat.label">
										<NuxtLink :to="{ name: 'recherche' }">
						<div class="cursor-pointer relative rounded-xl overflow-hidden h-28 bg-gray-200 shadow-sm">
							<img
									:src="cat.img"
									:alt="cat.label"
									class="w-full h-full object-cover grayscale/20 brightness-75"
							/>
							<div class="absolute inset-0 bg-black/25"></div>
							<div class="absolute bottom-2 left-2 right-2 text-white">
								<div class="bg-black/40 px-3 py-1 rounded-full inline-block text-sm">{{ cat.label }}</div>
							</div>
						</div>
					</NuxtLink>
								</template>
			</section>

			<section class="-mx-4 md:-mx-8 mt-6 bg-[#a57a69]">
				<div class="overflow-hidden">
					<img src="/banner2.svg" alt="Banner" class="w-full h-auto object-cover block" />
				</div>
				<div class="px-4 md:px-8 text-white mt-6">
					<h3 class="text-sm mb-3 font-bold">Le tatoueur du moment</h3>
				</div>
				<div class="px-4 md:px-8">
					<div class="mt-6">
						<div class="bg-white/75 rounded-xl shadow p-4 flex items-center gap-4">
              <div class="w-20">
                <UAvatar class="w-full h-full" size="xl" src="https://github.com/benjamincanac.png" />
              </div>
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
                  <NuxtLink :to="{ name: 'profile' }">
                    <button class="cursor-pointer text-sm bg-slate-800 text-white px-3 py-1 rounded-full">Voir son profil</button>
									</NuxtLink>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="overflow-hidden mt-6">
					<img src="/banner6.svg" alt="Banner" class="w-full h-auto object-cover block" />
				</div>
			</section>
			<section class="-mx-4 md:-mx-8 bg-[#29282d] py-5 pb-20 md:pb-28 -mb-16">
				<div class="px-4 md:px-8 text-white mt-6">
					<h3 class="text-sm mb-3 font-bold">Les tatoueurs favoris	</h3>
					<div class="flex gap-1 overflow-x-auto pb-2">
					<template v-for="i in 8" :key="'pop-'+i">
            <NuxtLink :to="{ name: 'profile' }">
              <div class="cursor-pointer flex flex-col items-center justify-center gap-2 w-20 flex-shrink-0 text-center">
                <div class="text-xs mt-2 font-bold">Cyrilan</div>
                <div class="w-10">
                  <UAvatar class="w-full h-full" size="xl" src="https://github.com/benjamincanac.png" />
                </div>
              </div>
            </NuxtLink>
					</template>
					</div>
				</div>
			</section>
		</main>
	</div>
</template>

<style scoped>
/* small visual tweaks handled by Tailwind classes */
</style>
