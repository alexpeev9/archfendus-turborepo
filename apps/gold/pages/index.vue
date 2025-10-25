<script setup lang="ts">
import { GirlDataList } from "nuxt-base";
import { Hero } from "ui";
import strings from "~/assets/strings.json";

definePageMeta({ layout: "page" });
useHead({ title: strings.title });
const heroPath = "/images/hero.webp";
</script>

<template>
  <Hero :heroPath="heroPath" />
  <GirlDataList :site="strings.site" />
</template>
