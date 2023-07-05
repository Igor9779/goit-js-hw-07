import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imagesList = document.querySelector('.gallery');
const imagesMarkup = createGallery(galleryItems);
imagesList.insertAdjacentHTML('beforeend', imagesMarkup);

imagesList.addEventListener('click', onImagesClick);

function createGallery(images) {
    return images.map(({original, description, preview}) => {
    return `
<li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
</li>
    `
    }).join('');
};

function onImagesClick(e) {
    e.preventDefault();
    console.log(e.target);

    if (e.target.nodeName !== 'IMG') {
        return;
    };

    let lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
});
};