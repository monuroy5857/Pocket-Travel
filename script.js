const images = document.querySelector('.carousel-images');
const imageCount = images.children.length;
let index = 0;

function showNextImage() {
    index = (index + 1) % imageCount;
    images.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(showNextImage, 4000);