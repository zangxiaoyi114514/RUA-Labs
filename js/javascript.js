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
