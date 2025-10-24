<script lang="ts" setup>
definePageMeta({ layout: "page" });
useHead({ title: "Gold Dating Site" });

// Fetch girls data
const { data: girls, pending, error } = await useGetGirls("gold");
</script>

<template>
  <div>
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
