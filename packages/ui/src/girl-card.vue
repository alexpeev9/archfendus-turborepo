<script setup lang="ts">
interface Girl {
  name: string;
  image: string;
  description: string;
}

const props = defineProps<{
  girl: Girl;
}>();
</script>

<template>
  <div class="girl-card">
    <img :src="props.girl.image" :alt="props.girl.name" class="girl-image" />
    <div class="girl-info">
      <h3 class="girl-name">{{ props.girl.name }}</h3>
      <p class="girl-description">{{ props.girl.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.girl-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease;
}

.girl-card:hover {
  transform: translateY(-5px);
}

.girl-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.girl-info {
  padding: 20px;
}

.girl-name {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #2c3e50;
}

.girl-description {
  color: #666;
  line-height: 1.5;
  font-size: 16px;
}
</style>
