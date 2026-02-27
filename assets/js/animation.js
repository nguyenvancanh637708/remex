document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(
        ".reveal-left, .reveal-right, .reveal-item"
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add("reveal-active");
                    }, index * 120);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 }
    );

    elements.forEach(el => observer.observe(el));
});

const animatedItems = document.querySelectorAll(
    '.reveal-left, .reveal-right, .reveal-up, .reveal-fade, .reveal-item'
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Khi vào viewport → thêm animation
            entry.target.classList.add('reveal-active');
        } else {
            // Khi ra khỏi viewport → reset để lần sau chạy lại
            entry.target.classList.remove('reveal-active');
        }
    });
}, {
    threshold: 0.2
});

animatedItems.forEach(item => observer.observe(item));