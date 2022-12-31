<template>
  <div class="spectrum-main">

    <h1>Typography</h1>
    <sp-divider size="m"></sp-divider>
    <SpTypography />

    <h1>Tooltip</h1>
    <sp-divider size="m"></sp-divider>
    <SpTooltip />

    <h1>Text Field</h1>
    <sp-divider size="m"></sp-divider>
    <SpTextField />

    <h1>Slider</h1>
    <sp-divider size="m"></sp-divider>
    <SpSlider />

    <h1>Radio</h1>
    <sp-divider size="m"></sp-divider>
    <SpRadio />

    <h1>Picker</h1>
    <sp-divider size="m"></sp-divider>
    <SpPicker />

    <h1>Action Button</h1>
    <sp-divider size="m"></sp-divider>
    <SpActionButton />

    <h1>Button</h1>
    <sp-divider size="m"></sp-divider>
    <SpButton />

    <h1>Checkbox</h1>
    <sp-divider size="m"></sp-divider>
    <SpCheckbox />

    <h1>Link</h1>
    <sp-divider size="m"></sp-divider>
    <SpLink />

    
   
  </div>
</template>
<script>
  export default {
    name: "SpectrumMain",
    inheritAttrs: false,
  }
</script>
<script setup>
import SpActionButton from './components/ActionButton.vue';
import SpButton from './components/Button.vue';
import SpCheckbox from "./components/Checkbox.vue";
import SpLink from "./components/Link.vue";
import SpPicker from "./components/Picker.vue";
import SpRadio from "./components/Radio.vue";
import SpSlider from "./components/Slider.vue";
import SpTextField from "./components/TextField.vue";
import SpTooltip from "./components/Tooltip.vue";
import SpTypography from "./components/Typography.vue";
</script>
<style scoped>
h1 {
  font-size: 16px;
  margin-top: 10px;
  font-weight: bolder;
}
sp-divider {
  margin-bottom: 10px;
}
</style>