// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const cardsMarkup = createImgCardsMarkup(galleryItems);
const galleryEl = document.querySelector(".gallery");

galleryEl.insertAdjacentHTML("beforeend", cardsMarkup);
galleryEl.addEventListener("click", onGalleryClick);
function createImgCardsMarkup(galleryItems){
    
    return galleryItems.map(({preview, original, description}) => {
        return   `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
        `;
    }).join('');
};
function onGalleryClick(evt) {
    evt.preventDefault();

    if(!evt.target.classList.contains('gallery__image')) {
        return;
    }

    openLightbox();
};
function openLightbox() {
    let lightbox = new SimpleLightbox('.gallery a',
        {
            captionSelector: 'img',
            captionType: 'attr',
            captionsData: 'alt',
            captionPosition: 'top',
            captionDelay: 900,
            enableKeyboard: true,
            maxZoom: 0,
            fadeSpeed: 700,
        });
    lightbox.open();
};

// Change code below this line

console.log(galleryItems);
