<template>
  <div>
    <div class="sp-field-label" for="name-0">Name</div>
    <sp-textfield id="name-0" placeholder="Enter your name"></sp-textfield>

    <div class="sp-field-label" for="name-1">Name</div>
    <sp-textfield
      id="name-1"
      placeholder="Enter your name"
      valid
      value="My Name"
    ></sp-textfield>

    <div class="sp-field-label" for="name-2">Name</div>
    <sp-textfield
      id="name-2"
      invalid
      placeholder="Enter your name"
    ></sp-textfield>

    <div class="sp-field-label" for="name-3">Name (quietly)</div>
    <sp-textfield
      id="name-3"
      placeholder="Enter your name"
      quiet
    ></sp-textfield>

    <div class="sp-field-label" for="tel-1">Telephone</div>
    <sp-textfield
      id="tel-1"
      type="tel"
      placeholder="Enter your phone number"
    ></sp-textfield>

    <div class="sp-field-label" for="password-1">Password</div>
    <sp-textfield id="password-1" type="password"></sp-textfield>
    
  </div>
</template>
<script>
export default {
  name: "TextField",
  inheritAttrs: false,
};
</script>
<style scoped>
.sp-field-label {
  margin-top: 10px;
  margin-bottom: 5px;
}
</style>