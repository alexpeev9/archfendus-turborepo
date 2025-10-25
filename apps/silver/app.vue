<script setup lang="ts">
import strings from "~/assets/strings.json";
useHead({
  title: strings.title,
  meta: [
    { name: "description", content: "Meet amazing women on our platform" },
  ],
});
</script>

<template>
  <Body>
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </Body>
</template>
