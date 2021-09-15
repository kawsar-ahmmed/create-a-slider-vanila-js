const images = [
    'img/img-3.jpeg',
    'img/img-4.jpg',
    'img/slider-img-02.jpg',
    'img/slider-img-4.jpg',
    'img/waves.jpg'
];

let imgIndex = 0;
const slider = document.getElementById('slider-img');
setInterval(() => {
    if (imgIndex >= images.length){
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    imgIndex ++;
    slider.setAttribute('src', imgUrl);
    console.log(imgUrl)
}, 1500)