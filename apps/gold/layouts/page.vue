<script setup>
import { Footer, Header } from "ui";
import strings from "~/assets/strings.json";
</script>

<template>
  <Header :title="strings.title" />
  <main>
    <slot />
  </main>
  <Footer :title="strings.title" />
</template>
