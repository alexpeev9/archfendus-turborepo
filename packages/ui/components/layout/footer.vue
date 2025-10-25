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
          <li><a href="#">Platinum</a></li>
          <li><a href="#">Diamond</a></li>
          <li><a href="#">Emerald</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>Support</h4>
        <ul>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Size Guide</a></li>
          <li><a href="#">Shipping Info</a></li>
          <li><a href="#">Returns</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>Company</h4>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Press</a></li>
          <li><a href="#">Sustainability</a></li>
          <li><a href="#">Terms</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>
