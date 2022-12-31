<template>
  <div>
    <sp-button size="m">Medium</sp-button>
    <sp-button variant="primary">Label only</sp-button>
    <sp-button variant="primary" style="display: inline-flex;">
      <svg
        slot="icon"
        viewBox="0 0 36 36"
        focusable="false"
        aria-hidden="true"
        role="img"
        style="width: 18px; height: 18px; display: inline-block"
      >
        <path
            d="M16 36a4.407 4.407 0 0 0 4-4h-8a4.407 4.407 0 0 0 4 4zm9.143-24.615c0-3.437-3.206-4.891-7.143-5.268V3a1.079 1.079 0 0 0-1.143-1h-1.714A1.079 1.079 0 0 0 14 3v3.117c-3.937.377-7.143 1.831-7.143 5.268C6.857 26.8 2 26.111 2 28.154V30h28v-1.846C30 26 25.143 26.8 25.143 11.385z"
        ></path>
      </svg>
      <span>SVG Icon + Label</span>
    </sp-button>
    <sp-button variant="accent">Label only</sp-button>
    <sp-button treatment="fill" variant="primary">Primary, Fill</sp-button>
    <sp-button treatment="fill" variant="secondary">Secondary, Fill</sp-button>
    <sp-button treatment="fill" variant="negative">Negative, Fill</sp-button>
    <sp-button variant="primary">Normal</sp-button>
    <sp-button variant="primary" disabled>Disabled</sp-button>
  </div>
</template>
<script>
export default {
  name: "Button",
  inheritAttrs: false,
}
</script>