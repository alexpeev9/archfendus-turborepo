<script setup lang="ts">
import type { GirlData } from "shared-types";

const props = defineProps<{
  girl: GirlData;
}>();
</script>

<template>
  <div class="collection-card" :data-category="props.girl.status">
    <div class="collection-thumbnail">
      <img :src="props.girl.image" :alt="props.girl.name" />
    </div>
    <div class="card-content">
      <span class="card-badge">Online Now</span>
      <h3 class="card-title">{{ props.girl.name }}</h3>
      <p class="card-subtitle">
        {{ props.girl.age }} • {{ props.girl.location }}
      </p>
      <p class="card-price">{{ props.girl.message }}</p>
    </div>
  </div>
</template>
