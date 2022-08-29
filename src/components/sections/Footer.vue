<template>
  <footer class="bg-primary">
    <div class="flex flex-row items-start justify-between">
      <div>
        <img src="../../assets/images/logo.svg" />
      </div>
      <nav>
        <HeaderLink title="Get started"></HeaderLink>
        <HeaderLink title="Integrations"></HeaderLink>
        <HeaderLink title="Features"></HeaderLink>
        <HeaderLink title="FAQ"></HeaderLink>
      </nav>
      <div>
        <h4 class="text-white mb-3">Sign to our newsletter</h4>
        <div class="relative">
          <input
            type="text"
            id="first_name"
            class="bg-primary h-12 mb-1 border border-darkblue text-darkblue text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter your email"
            required
          />
          <div
            class="flex justify-center items-center bg-secondary rounded-full w-9 h-9 absolute top-1.5 right-1.5"
          >
            <img :src="ChevronRightIcon" alt="" />
          </div>
        </div>

        <p class="text-blue font-normal">
          By sending this you agree to our Data privacy.
        </p>
      </div>
    </div>
    <hr class="border-primaryVariant mt-8 mb-6" />
    <div class="flex flex-row items-center justify-between pb-6">
      <p class="text-blue">
        © 2022 Cierra. Made with <span class="text-red">♥</span> in Göttingen.
      </p>
      <nav class="text-darkblue text-sm font-medium">
        <a href="">Data privacy</a>
        <a class="mx-10" href="">Impressum</a>
        <a href="">Terms of service</a>
      </nav>
    </div>
  </footer>
</template>

<script setup>
import HeaderLink from "../HeaderLink.vue";

import ChevronRightIcon from "../../assets/svg/Chevron right.svg";
</script>
