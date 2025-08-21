document.addEventListener('DOMContentLoaded', function() {
  // 只在首页应用效果
  if (document.querySelector('.homepage-scroll-animation')) {
    const scrollItems = document.querySelectorAll('.homepage-scroll-animation .scroll-item');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    scrollItems.forEach(item => {
      observer.observe(item);
    });
  }
});