<template>
    <div class="mr-5 mb-5 px-4 py-2 bg-white text-primary rounded-lg flex flex-row text-base font-medium">
        <img :src="image" class="mr-2"/>
        <span>{{title}}</span>
    </div>
</template>

<script>
export default {
  props: {
    title: { type: String},
    image: { type: String},
  },
};
</script>
