import getDialog from "./hello-vue/main";
import createLinesHandlerFunction from "./how-to-draw-lines/main"
import exportRendition from "./export-a-rendition/main";

module.exports = {
  commands: {
    helloVue: function () {
      getDialog().showModal();
    },
    "createLinesCommand": createLinesHandlerFunction,
    exportRendition,
  },
};
