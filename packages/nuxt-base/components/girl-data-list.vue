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
  <div v-if="pending" class="loading">Loading lonely women...</div>
  <div v-else-if="error" class="error">
    Sorry, we couldn't load the lonely women. Please try again later.
  </div>
  <GirlList v-else-if="girls">
    <GirlCard v-for="girl in girls" :key="girl.name" :girl="girl" />
  </GirlList>
</template>
