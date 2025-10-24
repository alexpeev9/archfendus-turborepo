<script lang="ts" setup>
import { useGetGirls } from "nuxt-base/composables/use-get-girls";
import { GirlCard } from "ui";

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
        <GirlCard v-for="girl in girls" :key="girl.name" :girl="girl" />
      </div>
    </div>
  </div>
</template>
