function showContactPopup(event) {
    event.preventDefault(); // Ngăn hành vi mặc định
    const popup = document.getElementById('contactPopup');
    popup.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('contactPopup');
    popup.style.display = 'none';
}

// Đóng popup khi bấm ra ngoài
window.onclick = function (event) {
    const popup = document.getElementById('contactPopup');
    if (event.target === popup) {
        popup.style.display = 'none';
    }
};
