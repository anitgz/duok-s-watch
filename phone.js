function copyPhoneNumber(event) {
    // Chặn hành vi mặc định của thẻ a (mở ứng dụng điện thoại)
    event.preventDefault();

    // Tạo một input tạm thời để chứa số điện thoại
    var phoneNumber = '+84337601775'; // Số điện thoại cần sao chép
    var tempInput = document.createElement("input");

    // Đặt giá trị của input là số điện thoại
    tempInput.value = phoneNumber;

    // Thêm input vào DOM, để có thể sao chép
    document.body.appendChild(tempInput);

    // Chọn và sao chép nội dung trong input
    tempInput.select();
    document.execCommand('copy');

    // Xóa input tạm thời sau khi sao chép
    document.body.removeChild(tempInput);

    // Hiển thị thông báo sao chép thành công (tùy chọn)
    alert("Số điện thoại đã được sao chép: " + phoneNumber);

    // Mở ứng dụng điện thoại (chỉ trên thiết bị di động)
    window.location.href = "tel:" + phoneNumber;
}
