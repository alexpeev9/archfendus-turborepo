<script setup lang="ts">
import { GirlDataList } from "nuxt-base";
import { Hero } from "ui";
import strings from "~/assets/strings.json";

definePageMeta({ layout: "page" });
useHead({ title: "Home" });
</script>

<template>
  <Hero />
  <GirlDataList :site="strings.site" />
</template>
