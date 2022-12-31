
const SpectrumMain = require("./main.vue").default;
import Vue from "vue";

export default function Panel() {
  let panel: HTMLElement;
  
  function create() {
    panel = document.createElement("div");
    panel.id = "container";
  }

  function show(event) {
    if (!panel) {
      create();
      event.node.appendChild(panel);
      const app = new Vue({
        el: panel,
        components: { SpectrumMain },
        render(h) {
          return h(SpectrumMain);
        }
      });
    }
  }

  return {
    show,
  }
}