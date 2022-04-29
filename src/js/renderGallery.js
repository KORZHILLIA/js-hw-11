import { gallery } from '../index';

export default function renderGallery(imgsObj) {
    const imgsArray = imgsObj.hits;
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
    gallery.innerHTML = markup;
}