import fetchImgs from './js/fetchImgs';
import renderGallery from './js/renderGallery';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');
let page = null;

export { form, gallery, loadMoreBtn };

loadMoreBtn.classList.add('hidden');
form.addEventListener('submit', formSubmitHandler);
form.addEventListener('input', formInputHandler);
loadMoreBtn.addEventListener('click', loadMoreHandler);

async function formSubmitHandler(event) {
  try {
    event.preventDefault();
    page = 1;
    gallery.innerHTML = '';
    const query = event.currentTarget.elements.searchQuery.value;
    const imgsArray = await fetchImgs(query, page);
    // console.log(imgsArray);
    loadMoreBtn.classList.remove('hidden');
    renderGallery(imgsArray, page);
    page += 1;
  } catch (error) {
    console.log(error.message);
  }
}

async function loadMoreHandler() {
  const query = form.elements.searchQuery.value;
  const imgsArray = await fetchImgs(query, page);
  renderGallery(imgsArray, page);
  page += 1;
}

function formInputHandler(event) {
  const query = event.currentTarget.elements.searchQuery.value;
  if (query === '') {
    gallery.innerHTML = query;
    loadMoreBtn.classList.add('hidden');
  }
}
