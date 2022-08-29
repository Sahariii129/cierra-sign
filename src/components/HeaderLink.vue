<template>
  <a :href="address" class="text-primaryVariant text-base pr-7 font-medium last:pr-0">{{ title }}</a>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    address: { type: String, default: "#" },
  },
};
</script>
