<template>
  <div>
    <sp-radio-group @change="onChange">
      <sp-radio value="first" size="m">Option 1</sp-radio>
      <sp-radio value="second" checked size="m">Option 2</sp-radio>
      <sp-radio value="third" size="m">Option 3</sp-radio>
      <sp-radio value="fourth" size="m">Option 4</sp-radio>
    </sp-radio-group>

    <button @click="consoleValue">Echo Value</button>
  </div>
</template>
<script>
export default {
  name: "Radio",
  inheritAttrs: false,
}
</script>
<script setup>
import { ref } from "vue";

const selected = ref("second");

function onChange(e) {
  selected.value = e.target.value;
}

function consoleValue() {
  console.log(selected.value)
}
</script>