<template>
  <div class="questions px-32 relative bg-primary text-center mt-44 pt-16">
    <img
      class="Rectangle49 absolute"
      src="../../assets/images/Rectangle 49.png"
      alt=""
    />
    <img
      class="Vector3 absolute"
      src="../../assets/images/Vector3.png"
      alt=""
    />
    <img
      class="Vector5 absolute"
      src="../../assets/images/Vector5.png"
      alt=""
    />
    <img
      class="Vector6 absolute"
      src="../../assets/images/Vector6.png"
      alt=""
    />
    <img
      class="Vector7 absolute"
      src="../../assets/images/Vector7.png"
      alt=""
    />
    <h2 class="font-semibold text-lightgrey pb-1">Frequently asked questions</h2>

    <div
      class="py-6 border-b-primaryVariant border-b cursor-pointer mx-24"
      v-for="(question, index) in questions"
      :key="'question' + index"
      @click="setActiveIndex(index)"
    >
      <div class="flex justify-between items-center w-full">
        <div class="text-base font-semibold text-lightgrey">
          {{ question.question }}
        </div>

        <div>
          <img
            :class="activeIndex == index ? 'rotateUpIcon' : 'rotateDownIcon'"
            :src=" ChevronDownIcon"
            alt=""
          />
        </div>
      </div>

      <div
        v-show="activeIndex == index"
        class="text-base mt-5 font-normal text-lightblue text-left "
      >
        {{ question.answer }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ChevronDownIcon from "../../assets/svg/Chevron down.svg";
import ChevronUpIcon from "../../assets/svg/Chevron up.svg";

const activeIndex = ref(-1);

const setActiveIndex = (index) => {
  if (index == activeIndex.value) activeIndex.value = -1;
  else activeIndex.value = index;
};

const questions = ref([
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 1",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magnis egestas eget elementum leo sit molestie varius. Turpis tortor et scelerisque tortor. Elit feugiat enim neque quis tincidunt orci sem molestie. Semper eu dis amet, consectetur ",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 2",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magnis egestas eget elementum leo sit molestie varius. Turpis tortor et scelerisque tortor. Elit feugiat enim neque quis tincidunt orci sem molestie. Semper eu dis amet, consectetur ",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.3",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magnis egestas eget elementum leo sit molestie varius. Turpis tortor et scelerisque tortor. Elit feugiat enim neque quis tincidunt orci sem molestie. Semper eu dis amet, consectetur ",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 4",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magnis egestas eget elementum leo sit molestie varius. Turpis tortor et scelerisque tortor. Elit feugiat enim neque quis tincidunt orci sem molestie. Semper eu dis amet, consectetur ",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 5",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magnis egestas eget elementum leo sit molestie varius. Turpis tortor et scelerisque tortor. Elit feugiat enim neque quis tincidunt orci sem molestie. Semper eu dis amet, consectetur ",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 6",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magnis egestas eget elementum leo sit molestie varius. Turpis tortor et scelerisque tortor. Elit feugiat enim neque quis tincidunt orci sem molestie. Semper eu dis amet, consectetur ",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 7",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magnis egestas eget elementum leo sit molestie varius. Turpis tortor et scelerisque tortor. Elit feugiat enim neque quis tincidunt orci sem molestie. Semper eu dis amet, consectetur ",
  },
]);
</script>

<style></style>
