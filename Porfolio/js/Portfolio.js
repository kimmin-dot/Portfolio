// 실시간 시간 업데이트
function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
  const dateString = now.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });
  document.getElementById('dateTime').textContent =
    `${dateString} ${timeString}`;
}
setInterval(updateTime, 1000);
updateTime();

//
function openFinder() {
  document.getElementById('finder-modal').classList.add('show');
}
function closeFinder() {
  document.getElementById('finder-modal').classList.remove('show');
}
document.getElementById("finder-modal").addEventListener("click", function(e) {
  if (e.target === this) closeFinder();  // 바깥만 클릭했을 때 동작하도록 설정
});

const tabBtns = document.querySelectorAll('.finderSidebar button');
const tabContents = document.querySelectorAll('.tabContent');

tabBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    tabContents.forEach(c => c.classList.remove('active'));
    tabContents[index].classList.add('active');
  });
});

//
function openProfile() {
  document.getElementById('profile-modal').classList.add('show');
}
function closeProfile() {
  document.getElementById('profile-modal').classList.remove('show');
}
document.getElementById("profile-modal").addEventListener("click", function(e) {
  if (e.target === this) closeProfile();
});

//
function openImageModal() {
  document.getElementById("image-modal").classList.add("show");
}
function closeImageModal() {
  document.getElementById("image-modal").classList.remove("show");
}
document.getElementById("image-modal").addEventListener("click", function (e) {
  if (e.target === this) closeImageModal();
});
const thumbs = document.querySelectorAll(".thumbImg");
const mainPreview = document.getElementById("main-preview");
thumbs.forEach(img => {
  img.addEventListener("click", () => {
    mainPreview.src = img.dataset.full;
  });
});

