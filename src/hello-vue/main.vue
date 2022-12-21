<template>
  <form style="width: 300px">
    <h1>
      {{ message }}
    </h1>
    <input type="text" v-model="count" placeholder="Enter your name">
    <p>Button has been clicked {{ count }} times.</p>
    <footer>
      <button uxp-variant="cta" @click="increment">Click me</button>
      <button type="submit" uxp-variant="primary" @click="close">
        Done
      </button>
    </footer>
  </form>
</template>
<script>
  export default {
    name: "HelloVue",
    inheritAttrs: false,
  }
</script>
<script setup>
const { ref } = require("vue");

let count = ref(0);
let message = ref("Hello World Vue2.7 Setup Component!")

const props = defineProps({
  dialog: {
    type: Object,
  }
});

const increment = () => {
  count.value++;
}

function close() {
  props.dialog.close()
}
</script>
