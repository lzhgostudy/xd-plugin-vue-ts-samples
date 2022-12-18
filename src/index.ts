import getDialog from "./helloVue/main";

module.exports = {
  commands: {
    helloVue: function () {
      getDialog().showModal();
    },
  },
};
