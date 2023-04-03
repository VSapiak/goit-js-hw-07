import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryItem = document.querySelector(".gallery");

const imageItem = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
		<a class="gallery__link" href="${original}">
			<img class="gallery__image" src="${preview}" alt="${description}" />
		</a>
	</li>`
  )
  .join("");

galleryItem.insertAdjacentHTML("beforeend", imageItem);
galleryItem.addEventListener("click", (e) => {
  e.preventDefault();
  const target = e.target;
  if (target.nodeName !== "IMG") {
    return;
  }

  let gallery = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionsPosition: "bottom",
    captionDelay: 250,
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      gallery.close();
    }
    return gallery;
  });
});

console.log(galleryItems);
