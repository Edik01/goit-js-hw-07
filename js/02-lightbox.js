import { galleryItems } from "./gallery-items.js";
// Change code below this line
const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="large-image.jpg"
      alt="${description}"
    />
  </a>
</li>`;
  })
  .join("");

const galleryEl = document.querySelector(".gallery");
galleryEl.innerHTML = markup;

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
