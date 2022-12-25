import type { ImageFill as IImageFill, Selection, GraphicNode as IGraphicNode } from "scenegraph";
import type { storage as Storage } from "uxp";
import type { editDocument as IEditDocument } from "application";

const application = require("application");
const editDocument: typeof IEditDocument = application.editDocument;
const { ImageFill } = require("scenegraph");
const uxp = require("uxp");
const storage: Storage = uxp.storage;
const fs: Storage.FileSystemProvider = storage.localFileSystem;

type ImageRes = {
  message: string;
  status: string;
}

function xhrBinary(url: string): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.onload = () => {
      if (req.status === 200) {
        try {
          const arr = new Uint8Array(req.response);
          resolve(arr);
        } catch (err) {
          // @ts-ignore
          reject(`Couldnt parse response. ${err.message}, ${req.response}`);
        }
      } else {
        reject(`Request had an error: ${req.status}`);
      }
    }

    req.onerror = reject;
    req.onabort = reject;
    req.open('GET', url, true);
    req.responseType = "arraybuffer";
    req.send();
  })
}

export default function Panel() {
  let panel: HTMLElement;

  function create() {
    const html = `
    <button>
      Image Placeholder
    </button>
    `;

    panel = document.createElement("div");
    panel.innerHTML = html;

    panel.querySelector("button")?.addEventListener("click", () => {
      console.log("start");

      editDocument(async (selection) => {
        const imageUrl = "https://dog.ceo/api/breeds/image/random";
        const res = await fetch(imageUrl);
        const result: ImageRes = await res.json();

        const photoUrl = result.message;
        const photoObj = await xhrBinary(photoUrl);
        const tempFolder = await fs.getTemporaryFolder();
        const tempFile = await tempFolder.createFile("tmp", { overwrite: true });
        await tempFile.write(photoObj, { format: storage.formats.binary });
        
        const node = selection.items[0] as IGraphicNode;
        const imageFill: IImageFill = new ImageFill(tempFile);
        node.fill = imageFill;
      });
    });
  }

  function show(event) {
    if (!panel) {
      create();
      event.node.appendChild(panel);
    }
  }

  return {
    show,
  }
}