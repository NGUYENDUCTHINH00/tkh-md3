// Lấy dữ liệu trên local
const userLogin = JSON.parse(localStorage.getItem("userLogin"));

const userLoginElement = document.getElementById("userLogin");

if (userLogin) {
    // Hiển thị tên của user đang đăng nhập lên header
    userLoginElement.innerHTML = userLogin.userName;
} else {
    userLoginElement.innerHTML = "";
}
