import { gallery, loadMoreBtn } from '../index';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function renderGallery(imgsObj, page) {
  let currentPageNumber = page - 1;
  const imgsArray = imgsObj.hits;
  const totalHits = imgsObj.totalHits;
  const maxPossiblePages = Math.ceil(totalHits / 40);
    const markup = imgsArray.map( ({ comments, downloads, largeImageURL: large, likes, tags, views, webformatURL: web }) => {
        return `
        <div class="photo-card">
  <img src="${web}" alt="${tags}" title="${tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
      ${likes}
    </p>
    <p class="info-item">
      <b>Views</b>
      ${views}
    </p>
    <p class="info-item">
      <b>Comments</b>
      ${comments}
    </p>
    <p class="info-item">
      <b>Downloads</b>
      ${downloads}
    </p>
  </div>
</div>`;
    }).join('');
    if (!currentPageNumber) {
      Notify.success(`Hooray! We found ${totalHits} images.`);
    }
    gallery.insertAdjacentHTML('beforeend', markup);
  const { height: galleryHeight } = gallery.getBoundingClientRect();
  window.scrollTo({ top: galleryHeight, behavior: 'smooth' });
  currentPageNumber += 1;
  console.log(
    currentPageNumber,
    maxPossiblePages,
  );
  if (currentPageNumber === maxPossiblePages) {
    loadMoreBtn.classList.add('hidden');
    Notify.info("We're sorry, but you've reached the end of search results.");
  }
}

// To ask: If Notiflix is not in use, why alert doesn't work properly without setTimeout? I mean, if setTimeout is not in use,
//  alert appears first, and rendering fires AFTER pressing button 'OK'.