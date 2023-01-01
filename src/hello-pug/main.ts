import Vue from "vue";

const hello = require("./main.vue").default;

let dialog;

export default function getDialog() {
  if (!dialog) {
    document.body.innerHTML = `<dialog><div id="container"></div></dialog>`;
    dialog = document.querySelector("dialog");

    const app = new Vue({
      el: "#container",
      components: { hello },
      render(h) {
        return h(hello, { props: { dialog } });
      }
    });
  }

  return dialog;
}