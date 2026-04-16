import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
let instance = '';

gallery.innerHTML = createMarkup(galleryItems);

gallery.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const source = evt.target.dataset.source;

  instance = basicLightbox.create(
    `
    <img src="${source}" width="800" height="600">
`,
    {
      onShow: () => {
        document.addEventListener('keydown', onKeyDown);
      },
      onClose: () => {
        document.removeEventListener('keydown', onKeyDown);
      },
    }
  );

  instance.show();
}

function onKeyDown(evt) {
  if (evt.code === 'Escape') {
    instance.close();
  }
}

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join('');
}
