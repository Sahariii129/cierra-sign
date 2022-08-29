<template>
  <div
    class="card p-8 flex flex-col justify-between rounded-xl mr-14 last:mr-0"
    :class="bgColor"
  >
    <span :class="titleColor">{{ number }}</span>
    <img width="133" :src="image" class="mx-auto mt-4" />
    <h6 :class="titleColor" class="mb-3 mt-12">{{ title }}</h6>
    <p :class="textColor">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    bgColor: { type: String, required: true },
    text: { type: String },
    titleColor: { type: String },
    textColor: { type: String },
    image: { type: String },
    number: { type: Number },
  },
};
</script>
