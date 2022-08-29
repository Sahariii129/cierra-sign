<template>
  <header class="my-8">
    <div class="flex flex-row items-center justify-between mx-32">
      <div>
        <img src="../../assets/images/logo.svg" />
      </div>
      <nav>
        <HeaderLink title="Get started"></HeaderLink>
        <HeaderLink title="Integrations"></HeaderLink>
        <HeaderLink title="Features"></HeaderLink>
        <HeaderLink title="FAQ"></HeaderLink>
      </nav>
      <div class="flex flex-row justify-between items-center">
        <a href="#">Sign in</a>
        <button
          class="btn btn-get-started text-white ml-5 bg-primary px-4 h-10 py-2"
        >
          Get Started
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import HeaderLink from "../HeaderLink.vue";
</script>

<style></style>
