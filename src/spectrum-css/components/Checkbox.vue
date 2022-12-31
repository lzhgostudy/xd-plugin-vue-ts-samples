<template>
  <div>
    <h4 class="spectrum-Heading--subtitle1">Default</h4>
    <div><sp-checkbox size="m">Medium</sp-checkbox></div>
    <div><sp-checkbox size="m" checked>Medium Checked</sp-checkbox></div>
    <div><sp-checkbox size="m" indeterminate>Medium Indeterminate</sp-checkbox></div>

    <h4 class="spectrum-Heading--subtitle1">Invalid</h4>
    <div><sp-checkbox invalid>Web component</sp-checkbox></div>
    <div><sp-checkbox checked invalid>Web component</sp-checkbox></div>
    <div><sp-checkbox indeterminate invalid>Web component</sp-checkbox></div>
    
    <h4 class="spectrum-Heading--subtitle1">Disabled</h4>
    <div><sp-checkbox disabled>Web component</sp-checkbox></div>
    <div><sp-checkbox checked disabled>Web component</sp-checkbox></div>
    <div><sp-checkbox indeterminate disabled>Web component</sp-checkbox></div>
    
    <h4 class="spectrum-Heading--subtitle1">Emphasized</h4>
    <div><sp-checkbox emphasized>Web component</sp-checkbox></div>
    <div><sp-checkbox emphasized checked>Web component</sp-checkbox></div>
    <div><sp-checkbox emphasized indeterminate>Web component</sp-checkbox></div>
        
  </div>
</template>
<script>
export default {
  name: "Checkbox",
  inheritAttrs: false,
}
</script>
<style scoped>
h4 {
  margin-top: 10px;
}
</style>