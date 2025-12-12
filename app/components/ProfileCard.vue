
<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

const props = withDefaults(defineProps<{
  name?: string
  rating?: number
  reviews?: number
  description?: string
  tags?: string[]
  images?: string[]
  avatar?: string
}>(), {
  name: 'Dylan',
  rating: 4.4,
  reviews: 120,
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  tags: ['Brulure', 'Cicatrice'],
  images: ['/galerie/tattoo1.jpg', '/galerie/tattoo2.jpg', '/galerie/tattoo3.jpg'],
  avatar: 'https://github.com/benjamincanac.png'
})
</script>

<template>
  <div id="container" class="relative flex flex-col gap-3 bg-gray-100 p-5 rounded-2xl w-full max-w-md">
    <div class="profile">
      <UAvatar :src="props.avatar" size="xl" />
      <div class="content">
        <div class="name">
          <p>{{ props.name }}</p>
        </div>
        <div class="notation">
          <Icon size="15" class="text-xl" name="custom:stars-icon"/>
          <p>{{ props.rating }}</p>
          <span class="text-xs text-gray-400">({{ props.reviews }})</span>
        </div>
      </div>
    </div>
    <div class="description">
      <p>{{ props.description }}</p>
    </div>
    <div class="tags">
      <div v-for="(tag, i) in props.tags" :key="i" :class="['px-3 py-1 rounded-full text-xs', tag === 'Cicatrice' ? 'bg-[#29282D] text-white' : 'bg-[#AED39A] text-black']">{{ tag }}</div>
    </div>
    <div class="images">
      <img v-for="(img, i) in props.images" :key="i" :src="img" alt="tattoo"/>
    </div>
    <NuxtLink :to="{ name: 'profile' }">
      <div class="action">
        <p>Voir son profil</p>
        <UIcon size="20" name="lucide:arrow-right"/>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>
.profile {
  font-size: 12px;

  display: flex;
  gap: 10px;

  align-items: center;
}

.profile img {
  width: 45px;
  height: 45px;

  background-color: #9b9b9b;
  border-radius: 100%;
}

.profile .content {
  display: flex;
  flex-direction: column;

  gap: 5px;
}

.profile .content p {
  margin: 0;
}

.profile .content .name {
  display: flex;
  align-items: center;

  gap: 4px;

  font-weight: 600;
}

.profile .content .name {
  font-weight: 600;
}

.profile .content .notation {
  font-weight: 600;

  display: flex;
  align-items: center;

  gap: 3px;
}

.profile .content .notation ion-icon {
  padding-bottom: 3px;
}

.description {
  font-size: 11px;
  margin-bottom: 15px;
}

.tags {
  position: absolute;

  top: 15px;
  right: 15px;

  display: flex;
  gap: 5px;

  justify-content: end;

  width: 140px;

  font-size: 11px;
  color: white;
}

.tags div {
  padding: 2px 10px;
  border-radius: 20px;
}

.images {
  display: flex;

  width: 100%;
  height: 100px;

  border-radius: 20px;

  overflow: hidden;

  margin-bottom: 10px;
}

.images img {
  width: 34%;
  object-fit: cover;
}

.action {
  display: flex;

  align-items: center;
  justify-content: end;

  gap: 6px;

  font-weight: 600;
  font-size: 11px;

  margin-right: 10px;
}
</style>
