<template>
  <div>
    <sp-picker id="picker-m" size="m">
      <sp-menu-item>Deselect</sp-menu-item>
      <sp-menu-item>Select inverse</sp-menu-item>
      <sp-menu-item>Feather...</sp-menu-item>
      <sp-menu-item>Select and mask...</sp-menu-item>
      <sp-menu-item>Save selection</sp-menu-item>
      <sp-menu-item disabled>Make work path</sp-menu-item>
    </sp-picker>
  </div>
</template>
<script>
export default {
  name: "Picker",
  inheritAttrs: false,
}
</script>