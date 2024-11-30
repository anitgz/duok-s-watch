document.querySelector('.prev-btn').addEventListener('click', function() {
    const currentImage = document.querySelector('#mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail-row input');
    let currentIndex = Array.from(thumbnails).findIndex(input => input.checked);
    currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;  // Lùi 1 ảnh
    thumbnails[currentIndex].checked = true;  // Chọn thumbnail tương ứng
    currentImage.src = document.querySelector(`#product7-thumb${currentIndex + 1}`).previousElementSibling.src;
});

document.querySelector('.next-btn').addEventListener('click', function() {
    const currentImage = document.querySelector('#mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail-row input');
    let currentIndex = Array.from(thumbnails).findIndex(input => input.checked);
    currentIndex = (currentIndex + 1) % thumbnails.length;  // Tiến 1 ảnh
    thumbnails[currentIndex].checked = true;  // Chọn thumbnail tương ứng
    currentImage.src = document.querySelector(`#product7-thumb${currentIndex + 1}`).previousElementSibling.src;
});
