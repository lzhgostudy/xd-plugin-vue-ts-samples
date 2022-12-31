import getDialog from "./hello-vue/main";
import createLinesHandlerFunction from "./how-to-draw-lines/main"
import exportRendition from "./export-a-rendition/main";
import imagePlaceholder from "./image-placeholder/main";
import spectrumCss from "./spectrum-css/main";

module.exports = {
  commands: {
    helloVue: function () {
      getDialog().showModal();
    },
    "createLinesCommand": createLinesHandlerFunction,
    exportRendition,
  },
  panels: {
    imagePlaceholder: {
      ...imagePlaceholder(),
    },
    spectrumCss: {
      ...spectrumCss(),
    },
  },
};
