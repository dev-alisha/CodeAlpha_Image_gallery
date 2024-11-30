const images = document.querySelectorAll('.image-gallery img');
let index = 0;

function toggleImages() {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
}
setInterval(toggleImages, 1000);

const galleryItem = document.getElementsByClassName("gallery-item");
const lightBoxContainer = document.createElement("div");
const lightBoxContent = document.createElement("div");
const lightBoxImg = document.createElement("img");
const lightBoxPrev = document.createElement("div");
const lightBoxNext = document.createElement("div");

lightBoxContainer.classList.add('lightbox');
lightBoxContent.classList.add('lightbox-content');
lightBoxPrev.classList.add("fa", "fa-angle-left", "lightbox-prev");
lightBoxNext.classList.add("fa", "fa-angle-right", "lightbox-next");

lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);
document.body.appendChild(lightBoxContainer);

let myIndex = 1;

function showLightBox(n) {
    if (n > galleryItem.length) {
        myIndex = 1;
    } else if (n < 1) {
        myIndex = galleryItem.length;
    }
    let imageLocation = galleryItem[myIndex - 1].children[0].getAttribute("src");
    lightBoxImg.setAttribute("src", imageLocation);
}

function currentImage() {
    lightBoxContainer.style.display = "block";
    let imageIndex = parseInt(this.getAttribute("data-index"));
    showLightBox(myIndex = imageIndex);
}

for (let i = 0; i < galleryItem.length; i++) {
    galleryItem[i].addEventListener("click", currentImage);
}

function sliderImage(n) {
    showLightBox(myIndex += n);
}

function prevImage() {
    sliderImage(-1);
}

function nextImage() {
    sliderImage(1);
}

lightBoxPrev.addEventListener("click", prevImage);
lightBoxNext.addEventListener("click", nextImage);

function closeLightBox(event) {
    if (this === event.target) {
        lightBoxContainer.style.display = "none";
    }
}
lightBoxContainer.addEventListener("click", closeLightBox);
document.body.classList.add('lightbox-open');
document.body.classList.remove('lightbox-open');
