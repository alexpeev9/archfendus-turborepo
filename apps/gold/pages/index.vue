<script setup lang="ts">
import { GirlDataList } from "nuxt-base";
import { Featured, Hero } from "ui";
import strings from "~/assets/strings.json";

definePageMeta({ layout: "page" });
useHead({ title: strings.title });
const heroPath = "/images/hero.webp";
</script>

<template>
  <div>
    <Hero :heroPath="heroPath" />
    <GirlDataList :site="strings.site" />
    <Featured
      :imagePath1="'/images/girl-01.webp'"
      :imagePath2="'/images/girl-02.webp'"
      :imagePath3="'/images/girl-03.webp'"
    />
  </div>
</template>
