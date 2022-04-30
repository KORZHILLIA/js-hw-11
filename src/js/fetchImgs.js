import { loadMoreBtn } from "../index";

const URL_MAIN = 'https://pixabay.com/api/';
const KEY = '27083627-728c5d78e0dae05c6569d7d6c';
const searchParams = new URLSearchParams({
    per_page: 40,
    imageType: 'photo',
    orientation: 'horizontal',
    safesearch: true
});

export default async function fetchImgs(query, page) {
    const response = await fetch(`${URL_MAIN}?key=${KEY}&q=${query}&${searchParams}&page=${page}`);
    if (!response.ok) {
        throw new Error('Error occured. Please try again');
    }
    const imgs = await response.json();
    if (!imgs.hits.length) {
        throw new Error('Sorry, there are no images matching your search query. Please try again.');
    }
    console.log(imgs);
    return imgs;
}