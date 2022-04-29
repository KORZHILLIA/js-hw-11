const URL_MAIN = 'https://pixabay.com/api/';
const KEY = '27083627-728c5d78e0dae05c6569d7d6c';
const searchParams = new URLSearchParams({
    imageType: 'photo',
    orientation: 'horizontal',
    safesearch: true
});

export default async function fetchImgs(query) {
    const response = await fetch(`${URL_MAIN}?key=${KEY}&q=${query}&${searchParams}`);
    if (!response.ok) {
        throw new Error('Error occured. Please, try again');
    }
    const imgs = await response.json();
    return imgs;
}