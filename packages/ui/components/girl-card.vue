<script setup lang="ts">
import type { GirlData } from "shared-types";

const props = defineProps<{
  girl: GirlData;
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
