
<script setup lang="ts">
defineProps({
  name: String,
});
</script>

<template>
  <div id="container" class="relative flex flex-col gap-3 bg-gray-100 p-5 rounded-2xl">
    <div class="profile">
      <UAvatar size="xl" src="https://github.com/benjamincanac.png" />
      <div class="content">
        <div class="name">
          <p>Dylan</p>
        </div>
        <div class="notation">
          <Icon size="15" class="text-xl" name="custom:stars-icon"/>
          <p>4.4</p>
        </div>
      </div>
    </div>
    <div class="description">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </div>
    <div class="tags">
      <div class="bg-[#AED39A]">Brulure</div>
      <div class="bg-[#29282D]">Cicatrice</div>
    </div>
    <div class="images">
      <img src="~/assets/tatouage1.jpg"/>
      <img src="~/assets/tatouage2.jpg"/>
      <img src="~/assets/tatouage3.jpg"/>
    </div>
    <NuxtLink :to="{ name: 'profile' }">
      <div class="action">
        <p>Voir son profile</p>
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

  background-color: red;
  border-radius: 20px;

  overflow: hidden;

  margin-bottom: 10px;
}

.images img {
  width: 34%;
  background-color: white;
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
