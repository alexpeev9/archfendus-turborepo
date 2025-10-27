<script setup lang="ts">
const props = defineProps<{
  imagePath1: string;
  imagePath2: string;
  imagePath3: string;
}>();
</script>

<template>
  <section class="featured" id="featured">
    <div class="featured-container">
      <div class="featured-hero">
        <div class="featured-content">
          <span class="label">Find Your Perfect Match</span>
          <h2>The Art of Dating</h2>
          <p>
            Where genuine connections meet modern technology. Our advanced
            matching system combines personality insights with compatibility
            algorithms to create meaningful relationships that last. Join
            thousands of successful couples who found love here.
          </p>

          <div class="feature-highlights">
            <div class="highlight-item">
              <div class="highlight-icon">💎</div>
              <div class="highlight-title">Verified Profiles</div>
              <div class="highlight-desc">
                All profiles are verified to ensure authentic connections
              </div>
            </div>
            <div class="highlight-item">
              <div class="highlight-icon">🎯</div>
              <div class="highlight-title">Smart Matching</div>
              <div class="highlight-desc">
                AI-powered compatibility matching for better connections
              </div>
            </div>
            <div class="highlight-item">
              <div class="highlight-icon">❤️</div>
              <div class="highlight-title">Safe & Secure</div>
              <div class="highlight-desc">
                Your privacy and safety are our top priorities
              </div>
            </div>
          </div>

          <a href="#girls" class="feature-cta">Start Dating Now</a>
        </div>

        <div class="featured-image-section">
          <div class="featured-image-grid">
            <div class="featured-img">
              <img :src="imagePath1" alt="Girl 1" />
            </div>
            <div class="featured-img">
              <img :src="imagePath2" alt="Girl 2" />
            </div>
            <div class="featured-img">
              <img :src="imagePath3" alt="Girl 3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
