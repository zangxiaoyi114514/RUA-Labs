// 希望爪哇能对我好点
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry)
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		} else {
			entry.target.classList.remove('show');
		}
	})
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
// 最蛋疼的图标位移
const topImage = document.getElementById("topImage");

function updateImagePosition() {
    const scrollY = window.scrollY;
    const maxScroll = 300;
    const progress = Math.min(scrollY / maxScroll, 1);

    const imageWidth = topImage.offsetWidth;
    const screenWidth = window.innerWidth;

    const startX = -imageWidth / 2; // 居中位置，没啥好看的
    const targetX = (screenWidth / 2) - imageWidth - 20 + 50; // 图标移动到右上角后的位置（加号后面的数值越到越靠右）
    const moveX = startX + progress * (targetX - startX);

    const startY = 0;
    const targetY = 3; // 图标移动到右上角后的位置（决定了距离上边界有多远）
    const moveY = startY + progress * targetY;

    const scale = 1 - progress * 0.6;

    topImage.style.transform = `translate(${moveX}px, ${moveY}px) scale(${scale})`;
}

window.addEventListener("load", updateImagePosition);
window.addEventListener("scroll", updateImagePosition);
window.addEventListener("resize", updateImagePosition);
// 不好！不好！一点都不好！c！