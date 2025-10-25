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
          a new standard of authenticity. Join us in shaping the future of
          modern love.
        </p>
        <div class="social-links">
          <a href="#" class="social-link">f</a>
        </div>
      </div>
      <div class="footer-column">
        <h4>Dating</h4>
        <ul>
          <li><a href="#">Gold</a></li>
          <li><a href="#">Silver</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>
