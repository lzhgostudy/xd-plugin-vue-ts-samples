import type { Selection } from "scenegraph";
import type {
  storage as Storage,
} from "uxp";
const ExportRendition = require("./main.vue").default;
import Vue from "vue";

const application = require("application");
const fs: Storage.FileSystemProvider = require("uxp").storage.localFileSystem;

export default async function exportRendition(selection: Selection) {
  if (selection.items.length === 0) {
    return console.log("No selection. Guide the user on what to do.");
  }

  const folder = await fs.getFolder();

  if (!folder) return console.log("User canceled folder picker.");
  
  const file = await folder.createFile("rendition.png", { overwrite: true });

  const renditionOptions = [
    {
      node: selection.items[0],
      outputFile: file,
      type: application.RenditionType.PNG,
      scale: 2,
    }
  ];

  try {
    const results = await application.createRenditions(renditionOptions);
    
    document.body.innerHTML = `<dialog><div id="container"></div></dialog>`;
    const dialog = document.querySelector("dialog");

    const app = new Vue({
      el: "#container",
      components: { ExportRendition },
      render: (h) => {
        return h(ExportRendition, { 
          props: { 
            filePath: results[0].outputFile.nativePath,
          } 
        })
      }
    });

    dialog?.showModal();

  } catch {
    return console.log("Something went wrong. Let the user know.");
  }
}