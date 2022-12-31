<template>
  <div>
    
    <sp-tooltip open placement="top">Label</sp-tooltip>
    <sp-tooltip open placement="bottom">Label</sp-tooltip>
    <sp-tooltip open placement="left">Label</sp-tooltip>
    <sp-tooltip open placement="right">Label</sp-tooltip>

    <br />
    <br />

    <sp-tooltip open placement="top" variant="info">Label</sp-tooltip>
    <sp-tooltip open placement="top" variant="info">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </sp-tooltip>
    <sp-tooltip open placement="top" variant="info"> Label </sp-tooltip>
    <sp-tooltip open placement="top" variant="info">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </sp-tooltip>

    <br />
    <br />

    <sp-tooltip open placement="top" variant="positive">Label</sp-tooltip>
    <sp-tooltip open placement="top" variant="positive">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </sp-tooltip>
    <sp-tooltip open placement="top" variant="positive">
      Label
    </sp-tooltip>
    <sp-tooltip open placement="top" variant="positive">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </sp-tooltip>

    <br />
    <br />

    <sp-tooltip open placement="top" variant="negative">Label</sp-tooltip>
    <sp-tooltip open placement="top" variant="negative">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </sp-tooltip>
    <sp-tooltip open placement="top" variant="negative">
      Label
    </sp-tooltip>
    <sp-tooltip open placement="top" variant="negative">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </sp-tooltip>
  </div>
</template>
<script>
export default {
  name: "Tooltip",
  inheritAttrs: false,
};
</script>