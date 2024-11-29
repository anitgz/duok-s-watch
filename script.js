const thumbnails = document.querySelectorAll('.thumbnail-row label');
const mainImage = document.getElementById('main-image');

const imageSources = [
    'z6065221985034_dcb8d355e39538afbd3cfc2410781a37.jpg',
    'z6065221998170_4ad25f24b37097ff1cbd5f8a36230442.jpg',
    'z6065222005587_15237c7e22fc61576dff65014fa92cfe.jpg',
    'z6065222017820_b13180ad95ed09b18f7b1c3a2b20846c.jpg'
];

thumbnails.forEach((label, index) => {
    label.addEventListener('click', () => {
        mainImage.src = imageSources[index]; 
    });
});
