import fetchImgs from "./js/fetchImgs";
import renderGallery from "./js/renderGallery";

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');
let page = 1;

export { form, gallery, loadMoreBtn };

form.addEventListener('submit', formSubmitHandler);
form.addEventListener('input', formInputHandler);
loadMoreBtn.addEventListener('click', loadMoreHandler);

async function formSubmitHandler(event) {
    event.preventDefault();
    gallery.innerHTML = '';
    const query = event.currentTarget.elements.searchQuery.value;
    const imgsArray = await fetchImgs(query, page);
    // console.log(imgsArray);
    renderGallery(imgsArray);
    loadMoreBtn.classList.remove('hidden');
    page += 1;
}

function formInputHandler(event) {
    const query = event.currentTarget.elements.searchQuery.value;
    if (query === '') {
        gallery.innerHTML = query;
        loadMoreBtn.classList.add('hidden');
    }
}

async function loadMoreHandler() {
    const query = form.elements.searchQuery.value;
    const imgsArray = await fetchImgs(query, page);
    renderGallery(imgsArray);
    page += 1;
}