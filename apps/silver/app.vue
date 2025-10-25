<script setup lang="ts">
useHead({
  title: "Silver Dating Site",
  meta: [
    {
      name: "description",
      content: "Meet amazing women on our Silver platform",
    },
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
