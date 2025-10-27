<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
</script>

<template>
  <footer>
    <div class="footer-content">
      <div class="footer-brand">
        <h3>{{ props.title }}</h3>
        <p>
          Redefining connection with genuine chemistry, meaningful matches, and
          a new standard of authenticity. Join us in shaping the future of love.
        </p>
      </div>
      <div></div>
      <div></div>
      <div class="footer-column">
        <h4>Links</h4>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#girls">Hot Girls</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>
