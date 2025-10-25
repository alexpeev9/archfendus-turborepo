<template>
  <section class="collections" id="girls">
    <div class="section-header">
      <h2 class="section-title">Meet Beautiful Women</h2>
      <p class="section-subtitle">Connect with amazing girls</p>
    </div>

    <div class="category-tabs">
      <button class="tab-btn active" data-category="all">All</button>
      <button class="tab-btn" data-category="online">Online Now</button>
      <button class="tab-btn" data-category="verified">Verified</button>
      <button class="tab-btn" data-category="premium">Premium</button>
      <button class="tab-btn" data-category="new">New Members</button>
    </div>
    <div class="grid" id="collectionsGrid">
      <slot />
    </div>
  </section>
</template>
