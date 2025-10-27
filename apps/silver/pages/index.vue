<script setup lang="ts">
import { GirlDataList } from "nuxt-base";
import { Hero, Testimonials } from "ui";
import strings from "~/assets/strings.json";

definePageMeta({ layout: "page" });
useHead({ title: strings.title });
const heroPath = "/images/hero.webp";
</script>

<template>
  <div>
    <Hero :heroPath="heroPath" />
    <GirlDataList :site="strings.site" />
    <Testimonials />
  </div>
</template>
