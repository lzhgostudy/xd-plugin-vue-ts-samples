import "./styles.css";
import Vue from "vue";
const hello = require("./main.vue").default;

let dialog;
export default function getDialog() {
  if (dialog == null) {
    document.body.innerHTML = `<dialog><div id="container"></div></dialog>`;
    dialog = document.querySelector("dialog");

    var app4 = new Vue({
      el: "#container",
      components: { hello },
      render(h) {
        return h(hello, { props: { dialog } });
      },
    }); 
  }
  return dialog;
}