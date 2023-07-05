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
    <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
    />
 </a>
</li>
    `
    }).join('');
};

let instance;

function onImagesClick(e) {
    e.preventDefault();
    console.log(e.target);

    if (e.target.nodeName !== 'IMG') {
        return;
    };
    
    const selectedImages = e.target.dataset.source;
    console.log(selectedImages);

    instance = basicLightbox.create(`<div class="modal">
        <img src="${selectedImages}">
    </div>`);

    instance.show();

    document.addEventListener('keydown', onCloseOnEscape);
};

function closeModal() {
    if (instance) {
        instance.close();
    }

    document.removeEventListener('keydown', onCloseOnEscape);
};

function onCloseOnEscape(e) {
    if (e.key === 'Escape') {
        closeModal();
    };
};