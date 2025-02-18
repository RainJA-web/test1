/* scripts.js */
// Scroll smooth
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Hiệu ứng khi hover vào hình ảnh
    document.querySelectorAll('.intro-container .intro-image img').forEach(img => {
      img.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
      });
  
      img.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
      });
    });
  });
   // search-library.js
(function() {
    function searchText() {
        const input = document.getElementById('searchInput').value.toLowerCase();
        const sections = document.querySelectorAll('.searchable');

        // Nếu không có nội dung tìm kiếm thì không làm gì cả
        if (!input) return;

        // Tìm tất cả các phần tử chứa từ khóa tìm kiếm
        let found = false;
        sections.forEach(section => {
            const content = section.innerHTML.toLowerCase();
            const regex = new RegExp(input, 'gi');

            if (regex.test(content)) {
                // Cuộn đến phần tử tìm thấy đầu tiên
                section.scrollIntoView({ behavior: 'smooth', block: 'center' });
                found = true;
                return; // Ngừng tìm kiếm khi đã tìm thấy
            }
        });

        // Nếu không tìm thấy từ khóa, hiển thị thông báo
        if (!found) {
            alert('Không tìm thấy kết quả nào!');
        }
    }

    // Đặt hàm searchText vào window để có thể gọi từ bên ngoài
    window.searchText = searchText;
})();

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('details a').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
            const targetId = this.getAttribute('href').substring(1); // Lấy ID của phần tử mục tiêu
            const targetElement = document.getElementById(targetId); // Tìm phần tử mục tiêu
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
