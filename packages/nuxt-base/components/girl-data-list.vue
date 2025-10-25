<script lang="ts" setup>
import { GirlCard, GirlList } from "ui";
import { useGetGirls } from "../composables/use-get-girls";

const props = defineProps<{
  site: string;
}>();

// Fetch girls data
const { data: girls, pending, error } = await useGetGirls(props.site);
</script>

<template>
  <div v-if="pending" class="collections">
    <h2 class="section-header">Loading lonely women...</h2>
  </div>
  <div v-else-if="error" class="collections">
    <h2 class="section-header">
      Sorry, we couldn't load the lonely women. Please try again later.
    </h2>
  </div>
  <GirlList v-else-if="girls">
    <GirlCard v-for="girl in girls" :key="girl.name" :girl="girl" />
  </GirlList>
</template>
