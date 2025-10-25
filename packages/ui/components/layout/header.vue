<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
</script>

<template>
  <nav id="navbar">
    <div class="nav-container">
      <a href="#home" class="logo-link">
        <svg
          class="logo-svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color: #fff; stop-opacity: 1" />
              <stop offset="100%" />
            </linearGradient>
          </defs>
          <polygon
            points="50,10 20,50 50,90 80,50"
            fill="none"
            stroke="url(#logoGrad)"
            stroke-width="3"
          />
          <circle cx="50" cy="50" r="5" fill="url(#logoGrad)" />
        </svg>
        <span class="logo-text">{{ props.title }}</span>
      </a>
      <ul class="nav-links">
        <li><a href="#home" class="nav-link">Home</a></li>
        <li><a href="#girls" class="nav-link">Hot Girls</a></li>
        <li><a href="#girls" class="nav-cta">Start Messaging</a></li>
      </ul>
    </div>
  </nav>

  <div class="mobile-nav" id="mobileNav">
    <ul class="mobile-nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#girls">Hot Girls</a></li>
    </ul>
  </div>
</template>
