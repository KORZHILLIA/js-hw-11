import { gallery, loadMoreBtn } from '../index';

let currentPageNumber = 0;

export default function renderGallery(imgsObj) {
  const imgsArray = imgsObj.hits;
  const totalHits = imgsObj.totalHits;
  const maxPossiblePages = Math.ceil(totalHits / 40);
    const markup = imgsArray.map( ({ comments, downloads, largeImageURL: large, likes, tags, views, webformatURL: web }) => {
        return `
        <div class="photo-card">
  <img src="${web}" alt="${tags}" loading="lazy" />
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
</div>`
    }).join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  currentPageNumber += 1;
  console.log(currentPageNumber, maxPossiblePages);
  if (currentPageNumber === maxPossiblePages) {
    loadMoreBtn.classList.add('hidden');
    setTimeout(() => {
      alert("We're sorry, but you've reached the end of search results.");
    }, 1000);
  }
}
// To ask: why alert doesn't work properly without setTimeout? I mean, if setTimeout is not in use,
//  alert appears first, and rendering fires AFTER pressing button 'OK'.