<script setup lang="ts">
const props = defineProps<{
  appName: string;
}>();
</script>

<template>
  <p>
    <code class="code">{{ props.appName }}</code>
  </p>
</template>
