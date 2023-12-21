document.addEventListener('DOMContentLoaded', function () {
    const galleryContainer1 = document.getElementById('gallery-container1');
    const galleryContainer2 = document.getElementById('gallery-container2');

    const imagesFolder = './Imagenes/';

    imgs(galleryContainer1, 6, "torneo");
    imgs(galleryContainer2, 4, "torneo1dia");

    function imgs(container, numImgs, nombreImg) {
        for (let i = 1; i <= numImgs; i++) {
            const imgElement = document.createElement('img');
            imgElement.src = `${imagesFolder}${nombreImg}${i}.jpg`;
            imgElement.alt = `${nombreImg} ${i}`;

            const galleryItem = document.createElement('div');
            galleryItem.classList.add('gallery-item');
            galleryItem.appendChild(imgElement);

            container.appendChild(galleryItem);
        }
    }
});