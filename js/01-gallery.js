import { galleryItems } from "./gallery-items.js";
// Change code below this line
const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
  })
  .join("");

const galleryEl = document.querySelector(".gallery");
galleryEl.innerHTML = markup;
let instance = null;
galleryEl.addEventListener("click", onclick);
function onclick(event) {
  event.preventDefault();
  if (event.target.tagName !== "IMG") {
    return;
  }
  const source = event.target.dataset.source;
  instance = basicLightbox.create(
    `
    <img src="${source}" width="800" height="600">
`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", onKeydown);
      },

      onClose: (instance) => {
        document.removeEventListener("keydown", onKeydown);
      },
    }
  );

  instance.show();
}

function onKeydown(event) {
  if (event.code === "Escape") {
    instance.close();
  }
}
