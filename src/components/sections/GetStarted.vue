<template>
   <div class="get-started mt-36 lg:mx-32 sm:mx-4">
      <h2 class="text-primary mb-12 font-semibold">
        Getting <span class="text-secondary">started</span> with us
      </h2>
      <div class="lg:flex flex-row sm:block justify-between items-center">
        <GetStartedCard
          v-for="(card, index) in cards"
          :key="'GetStartedCard' + index"
          :number="index + 1"
          :title="card.title"
          :text="cardText"
          :bgColor="card.bgColor"
          :titleColor="card.titleColor"
          :textColor="card.textColor"
          :image="card.image"
        ></GetStartedCard>
      </div>
      <button
        class="btn py-3 px-6 mt-9 bg-white text-primary text-base border border-solid border-primary"
      >
        Get started
      </button>
    </div>
</template>

<script setup>
import { ref } from "vue";
import GetStartedCard from "../GetStartedCard.vue";

import ArrowIcon from "../../assets/images/arrow.svg";
import CheckIcon from "../../assets/images/check.png";
import FrameIcon from "../../assets/images/Frame 106.png";

const cardText = ref(
  "Lorem ipsum dolor sit amet, conse ctetur adipiscing lorem eliteque ut curabitur semper in."
);
const cards = ref([
  {
    title: "Click Get started",
    image: ArrowIcon,
    text: cardText.value,
    bgColor: "bg-lightblue",
    titleColor: "text-primary",
    textColor: "text-primaryVariant",
  },
  {
    title: "Complete the registration",
    image: FrameIcon,
    text: cardText.value,
    bgColor: "bg-secondaryVariant",
    titleColor: "text-primary",
    textColor: "text-primaryVariant",
  },
  {
    title: "Start uploading and sign",
    image: CheckIcon,
    text: cardText.value,
    bgColor: "bg-primary",
    titleColor: "text-white",
    textColor: "text-darkblue",
  },
]);



</script>

<style>

</style>