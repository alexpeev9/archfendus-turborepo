<script setup lang="ts">
import { useGetGirls } from "nuxt-base/composables/use-get-girls";
import { GirlCard } from "ui";

useHead({
  title: "Silver Dating Site",
  meta: [
    {
      name: "description",
      content: "Meet amazing women on our Silver platform",
    },
  ],
});

// Fetch girls data from Gold app API
const { data: girls, pending, error } = await useGetGirls("silver");
</script>

<template>
  <div>
    <div class="container">
      <h1>Meet Our Silver Members</h1>

      <div v-if="pending" class="loading">Loading amazing women...</div>

      <div v-else-if="error" class="error">
        Sorry, we couldn't load the profiles. Please try again later.
      </div>

      <div v-else-if="girls" class="girls-grid">
        <GirlCard v-for="girl in girls" :key="girl.name" :girl="girl" />
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
</style>
