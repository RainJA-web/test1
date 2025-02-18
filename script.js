// script.js
// Lắng nghe sự kiện click của nút Admin
document.getElementById('admin-link').addEventListener('click', function(event) {
  event.preventDefault(); // Ngăn chặn việc tải lại trang
  // Chuyển hướng người dùng đến khu vực của admin
  window.location.href = 'admin.html';
});

// Lắng nghe sự kiện submit của form đăng nhập
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Ngăn chặn việc tải lại trang

  // Lấy giá trị của tài khoản và mật khẩu
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Lưu thông tin đăng nhập vào localStorage
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);

  // Lưu lịch sử đăng nhập
  saveLoginHistory(username);

  // Chuyển hướng người dùng đến trang thống kê phim yêu thích
  window.location.href = 'favorite-movies.html';
});

// Hàm để lưu lịch sử đăng nhập vào localStorage
function saveLoginHistory(username) {
  // Lấy lịch sử đăng nhập từ localStorage
  var loginHistory = JSON.parse(localStorage.getItem('loginHistory')) || [];

  // Thêm lịch sử đăng nhập mới vào mảng
  loginHistory.push({
    username: username,
    time: new Date().toLocaleString()
  });

  // Lưu lịch sử đăng nhập vào localStorage
  localStorage.setItem('loginHistory', JSON.stringify(loginHistory));
}

// For login.html
document.addEventListener('DOMContentLoaded', function() {
const loginButton = document.querySelector('#login-form button');

if (loginButton) {
  loginButton.addEventListener('click', function() {
    window.location.href = 'Subscribe.html';
  });
}
});

// For subscribe.html
document.addEventListener('DOMContentLoaded', function() {
const registerButton = document.querySelector('#register-btn');

if (registerButton) {
  registerButton.addEventListener('click', function() {
    window.location.href = 'login.html';
  });
}
});

document.addEventListener('DOMContentLoaded', function() {
const registerForm = document.getElementById('register-form');
const gmailInput = document.getElementById('gmail');

registerForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Kiểm tra định dạng Gmail
  const gmailValue = gmailInput.value.trim();
  if (!gmailValue.endsWith('@gmail.com')) {
    alert('Gmail phải kết thúc bằng @gmail.com');
    return;
  }

  // Giả lập đăng ký thành công (thay bằng logic thực tế)
  alert('Đăng ký thành công!');

  // Tùy chọn: Chuyển hướng đến trang đăng nhập sau khi đăng ký thành công
  window.location.href = 'login.html';
});
});


