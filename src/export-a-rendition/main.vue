<template>
  <form style="width: 400px">
    <h1>Redition saved</h1>
    <p>Your rendition was saved at:</p>
    <input style="width: 100%" :value="props.filePath" readonly />
    <footer>
      <button type="submit" uxp-variant="cta" id="ok-button">
        OK
      </button>
    </footer>
  </form>
</template>
<script>
  export default {
    name: "ExportRendition",
    inheritAttrs: false,
  }
</script>
<script setup>
import { ref } from "vue";

const props = defineProps({
  filePath: {
    type: String,
  },
});

</script>