<template>
  <div>
    <div>
      <sp-action-button>Standard Default</sp-action-button>
      <sp-action-button>
        ✏️
        Edit
      </sp-action-button>
      <sp-action-button>
        ✏️
      </sp-action-button>
      <sp-action-button hold-affordance>
        ✏️
      </sp-action-button>
    </div>
    
    <div>
      <sp-action-button disabled>Standard Disabled</sp-action-button>
      <sp-action-button disabled>
        ❤️
        Like
      </sp-action-button>
      <sp-action-button disabled>
        ❤️
      </sp-action-button>
      <sp-action-button hold-affordance disabled>
        ❤️
      </sp-action-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "ActionButton",
  inheritAttrs: false,
}
</script>
<style scoped>
h2 {
  font-size: 14px;
}
</style>