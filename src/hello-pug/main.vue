<template lang="pug">

form(style="width: 300px")

  include /hello

  input(v-model="userName" placeholder="Enter your name")

  footer
    button(
      type="submit" 
      uxp-variant="primary" 
      @click="close"
    ) Done

</template>
<script>
export default {
  name: "HelloPug",
  inheritAttrs: false,
}
</script>
<script setup>
const { ref } = require("vue");

let userName = ref("How are you ?");
const props = defineProps({
  dialog: {
    type: Object,
  }
});

function close() {
  props.dialog.close()
}

</script>