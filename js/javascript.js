// 为内部链接添加平滑滚动效果（如有需要）
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 为团队成员卡片添加悬停动画效果
document.querySelectorAll('.team-member').forEach(member => {
    member.addEventListener('mouseenter', () => {
        member.style.transition = 'transform 0.5s, box-shadow 0.5s'; // 鼠标移入时效果
    });

    member.addEventListener('mouseleave', () => {
        member.style.transition = 'transform 0.3s, box-shadow 0.3s'; // 鼠标移出时效果
    });
});

// 动态生成水印
document.addEventListener('DOMContentLoaded', () => {
    const watermarkContainer = document.querySelector('.watermark');
    const text = 'RUA'; // 水印内容
    const cols = 10; // 每行水印数量
    const rows = 10; // 每列水印数量
    const gap = 200; // 水印之间的间距

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const span = document.createElement('span');
            span.textContent = text;
            span.style.top = `${i * gap}px`; // 设置纵向位置
            span.style.left = `${j * gap}px`; // 设置横向位置
            watermarkContainer.appendChild(span);
        }
    }
});
// 词语库
const words = ["小毅！", "苏员！", "Furry！", "rua~", "希望！", "美好！", "永恒！", "感恩！"];

// 点击事件监听器
document.addEventListener("click", function(event) {
    // 从词语库中随机选取一个词
    const randomWord = words[Math.floor(Math.random() * words.length)];

    // 创建一个新的元素用于显示漂浮文字
    const floatText = document.createElement("span");
    floatText.classList.add("float-text");
    floatText.textContent = randomWord;

    // 设置文字的位置（基于鼠标点击位置）
    floatText.style.left = `${event.pageX}px`;
    floatText.style.top = `${event.pageY}px`;

    // 将元素添加到页面中
    document.body.appendChild(floatText);

    // 等待动画结束后移除元素
    floatText.addEventListener("animationend", function() {
        floatText.remove();
    });
});