<script setup lang="ts">
import { Page } from "ui";
import { name } from "./package.json";
import type { Girl } from "./types/girl";

useHead({
  title: "Gold Dating Site",
  meta: [
    { name: "description", content: "Meet amazing women on our Gold platform" },
  ],
});

// Fetch girls data
const {
  data: girls,
  pending,
  error,
} = await useFetch<Girl[]>("/api/girls?site=gold");
</script>

<template>
  <div>
    <Page :app-name="name" />

    <div class="container">
      <h1>Meet Our Gold Members</h1>

      <div v-if="pending" class="loading">Loading amazing women...</div>

      <div v-else-if="error" class="error">
        Sorry, we couldn't load the profiles. Please try again later.
      </div>

      <div v-else-if="girls" class="girls-grid">
        <div v-for="girl in girls" :key="girl.name" class="girl-card">
          <img :src="girl.image" :alt="girl.name" class="girl-image" />
          <div class="girl-info">
            <h3 class="girl-name">{{ girl.name }}</h3>
            <p class="girl-description">{{ girl.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  color: #333;
}

.loading,
.error {
  text-align: center;
  padding: 40px;
  font-size: 18px;
}

.error {
  color: #e74c3c;
}

.girls-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

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
