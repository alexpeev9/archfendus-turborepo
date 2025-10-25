<script setup lang="ts">
import { GirlsList } from "nuxt-base";

definePageMeta({ layout: "page" });
useHead({ title: "About Us" });
</script>

<template>
  <div>
    <div class="container">
      <h1>About Us</h1>
      <GirlsList site="gold" />
    </div>
  </div>
</template>
