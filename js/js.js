// script.js
document.addEventListener("DOMContentLoaded", () => {
  const videoOverlay = document.getElementById("video-overlay");
  const introVideo = document.getElementById("intro-video");
  const skipButton = document.getElementById("skip-button");
  const mainContent = document.getElementById("main-content");

  // 视频播放结束时隐藏覆盖层
  introVideo.addEventListener("ended", () => {
    videoOverlay.style.display = "none";
    mainContent.style.display = "block";
  });

  // 点击跳过按钮
  skipButton.addEventListener("click", () => {
    videoOverlay.style.display = "none";
    introVideo.pause();
    mainContent.style.display = "block";
  });
});