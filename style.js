window.addEventListener('load', function () {
  document.body.classList.add('loaded');
});
///

window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.remove('transparent');
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.add('transparent');
    navbar.classList.remove('scrolled');
  }
});
////
function openModal() {
  const modal = document.getElementById("docModal");
  const iframe = document.getElementById("docFrame");

  // 🔗 เปลี่ยนลิงก์ Google Drive ตรงนี้ให้เป็นของคุณ
  // ตัวอย่างลิงก์: https://drive.google.com/file/d/FILE_ID/preview
  iframe.src = "https://drive.google.com/file/d/1x4Yp5LAbC1sDFwz8U1xE5V3EXAMPLE/preview";

  modal.classList.add("active");
}

function closeModal() {
  const modal = document.getElementById("docModal");
  const iframe = document.getElementById("docFrame");

  modal.classList.remove("active");
  iframe.src = ""; // หยุดโหลดเมื่อปิด modal
}




