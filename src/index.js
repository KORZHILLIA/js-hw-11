import fetchImgs from "./js/fetchImgs";
import renderGallery from "./js/renderGallery";

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');

export { form, gallery, loadMoreBtn };

form.addEventListener('submit', formSubmitHandler);

async function formSubmitHandler(event) {
    event.preventDefault();
    const query = event.currentTarget.elements.searchQuery.value;
    const imgsArray = await fetchImgs(query);
    console.log(imgsArray);
    renderGallery(imgsArray);
}