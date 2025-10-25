<script lang="ts" setup>
import { GirlCard } from "ui";
import { useGetGirls } from "../composables/use-get-girls";

const props = defineProps<{
  site: "gold" | "silver";
}>();

// Fetch girls data
const { data: girls, pending, error } = await useGetGirls(props.site);
</script>

<template>
  <div>
    <div class="container">
      <h1>
        Meet Our {{ site.charAt(0).toUpperCase() + site.slice(1) }} Members
      </h1>

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
