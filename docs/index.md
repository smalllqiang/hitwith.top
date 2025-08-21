---
hide:
  - toc        # 隐藏目录
  - navigation 
---

<style>
    /* 保持原有样式不变 */
    body, html {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }
  .md-main,
  .md-main__inner,
  .md-content,
  .md-typeset {
    margin: 0 ;
    padding: 0 ;
    background: transparent;
    max-width: 100% ;
  }
  .welcome{
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    background-image: url("../images/index/8street.jpg");
    background-size: cover;
    background-position: center;
    position: fixed;   /* 固定全屏 */
    top: 0;
    left: 0;
    z-index: 1;
  }
  .title-container {
    position: fixed; /* 固定定位，不随滚动移动 */
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 2;
    pointer-events: none; /* 允许点击穿透到下方内容 */
  }
  .title{
    /* 水平居中 */
    text-align: center;
    
    /* 垂直居中需要的定位设置 */
    position: absolute; /* 绝对定位，相对于标题容器 */
    top: 35%;           /* 距离顶部35% */
    left: 50%;          /* 距离左侧50% */
    transform: translate(-50%, -50%); /* 向左上方移动自身一半尺寸，实现精确居中 */
    
    /* 标题样式 */
    font-size: 2.5rem;  /* 标题大小 */
    font-weight: bold;  /* 加粗 */
    color: #ffffffbd;   /* 文字颜色 */
    margin: 0;          /* 清除默认外边距 */
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6); 
    /* 淡入淡出过渡效果 */
    transition: opacity 0.5s ease;
    pointer-events: auto; /* 恢复点击能力 */
  }
  iframe.title{
    text-align: center;
    
    /* 垂直居中需要的定位设置 */
    position: absolute; /* 绝对定位，相对于标题容器 */
    top: 55%;           /* 距离顶部55% */
    left: 50%;          /* 距离左侧50% */
    transform: translate(-50%, -50%); /* 向左上方移动自身一半尺寸，实现精确居中 */
    
    /* 样式设置 */
    margin: 0;          /* 清除默认外边距 */
    /* 淡入淡出过渡效果 */
    transition: opacity 0.5s ease;
    pointer-events: auto; /* 恢复点击能力 */
  }

  .scroll-indicator {
    position: absolute;
    bottom: 3rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    pointer-events: auto;
    text-align: center;
  }
  
  .scroll-text {
    color: #ffffffbd;
    margin-bottom: 0.8rem; /* 调整为底部外边距，与箭头保持距离 */
    font-size: 1rem; /* 稍微增大字体 */
    font-weight: 500; /* 增加字重，更醒目 */
    text-shadow: 0 1px 2px rgba(0,0,0,0.5);
  }
  
  .v-arrow-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px; /* 箭头之间的间距 */
  }
  
  .v-arrow {
    width: 24px;
    height: 24px;
    border-right: 3px solid white;
    border-bottom: 3px solid white;
    transform: rotate(45deg); /* 形成V形 */
    opacity: 0.4; /* 默认透明度 */
    transition: opacity 0.3s ease;
  }
  
  /* 箭头动画 - 轮流高亮显示 */
  @keyframes arrowPulse {
    0% { opacity: 0.4; }
    20% { opacity: 1; }
    40% { opacity: 0.4; }
    100% { opacity: 0.4; }
  }
  
  .v-arrow:nth-child(1) {
    animation: arrowPulse 1.5s infinite 0s;
  }
  
  .v-arrow:nth-child(2) {
    animation: arrowPulse 1.5s infinite 0.3s;
  }
  
  .v-arrow:nth-child(3) {
    animation: arrowPulse 1.5s infinite 0.6s;
  }

  /* 大事记录航线图样式 - 时间线居中 */
  .timeline-section {
    position: relative;
    z-index: 2;
    margin-top: 100vh ; /* 位于开屏图片下方 */
    background-color: rgba(237, 237, 237, 0.7) ;
    padding: 5rem 0 ;
    width: 80% ;
    max-width: 100% ;
    margin-left: auto ;
    margin-right: auto ;
    border-radius: 20px ; /* 圆角大小 */
    padding: 5rem ;
}
  
  .timeline-container {
    max-width: 1200px ; /* 限制最大宽度 */
    margin: 0 auto ; /* 水平居中 */
    padding: 0 2rem ;
    width: 100% ;
  }
  
  .timeline-title {
      text-align: left;
      margin-bottom: 4rem;
      font-size: 2.5rem;
      color: #333;
      font-family: "SimHei", "黑体", sans-serif; /* 明确指定黑体 */
      
      /* 精致的文字阴影效果 */
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
  }
  
  .timeline {
    position: relative;
    max-width: 1000px ; /* 限制时间线宽度 */
    margin: 0 auto ; /* 水平居中 */
    width: 100% ;
    padding: 2rem 0;
  }
  
  /* 航线（垂直线）- 居中显示 */
  .timeline::before {
    content: '';
    position: absolute;
    left: 50%; /* 水平居中 */
    top: 0;
    height: 100%;
    width: 4px;
    background: #2c3e50;
    border-radius: 2px;
    transform: translateX(-50%); /* 精确居中 */
  }
  
  .timeline-item {
    position: relative;
    margin-bottom: 6rem ; /* 增加间距 */
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    width: 100% ;
  }
  
  /* 内容和插图容器 */
  .timeline-content, .timeline-image {
    width: calc(50% - 3rem); /* 宽度调整，增加间距 */
    position: relative;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    overflow: hidden;
  }
  
  /* 奇数项：文字在左，图片在右，调整图片位置远离时间线 */
  .timeline-item:nth-child(odd) .timeline-content {
    left: 0;
  }
  
  .timeline-item:nth-child(odd) .timeline-image {
    left: calc(50% + 3rem); /* 向右移动，远离时间线 */
  }
  
  /* 偶数项：文字在右，图片在左 */
  .timeline-item:nth-child(even) .timeline-content {
    left: 50%;
  }
  
  .timeline-item:nth-child(even) .timeline-image {
    left: 0;
  }
  
  .timeline-item.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  /* 时间点标记 - 居中对齐时间线 */
  .timeline-dot {
    position: absolute;
    left: 50%; /* 水平居中 */
    top: 0;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #3498db;
    border: 4px solid #2c3e50;
    transform: translateX(-50%); /* 精确居中 */
    z-index: 1;
  }
  
  .timeline-content {
    background: white;
    padding: 1.5rem ;
  }
  
  /* 为内容添加指向时间线的小三角 */
  .timeline-item:nth-child(odd) .timeline-content::after {
    content: '';
    position: absolute;
    right: -10px;
    top: 20px;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 10px solid white;
  }
  
  .timeline-item:nth-child(even) .timeline-content::after {
    content: '';
    position: absolute;
    left: -10px;
    top: 20px;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 10px solid white;
  }
  
  /* 插图样式 */
  .timeline-image {
    width: 200px;
    position: absolute;
    top: 0;
  }
  
  .timeline-image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
  
  .timeline-date {
    font-size: 1.2rem;
    font-weight: bold;
    color: #3498db;
    margin-bottom: 0.5rem ;
  }
  
  .timeline-event {
    font-size: 1.1rem;
    color: #333;
    line-height: 1.6;
  }
  
  /* 强制覆盖所有可能的容器限制 */
  .md-grid, 
  .md-main__inner, 
  .md-content__inner,
  .md-content {
    max-width: 100% ;
    margin: 0 ;
    padding: 0 ;
  }
  
  /* 响应式调整 - 小屏幕时间线左侧显示 */
  @media (max-width: 768px) {
    .timeline::before {
      left: 2rem;
      transform: none;
    }
    
    .timeline-dot {
      left: 2rem;
      transform: translateX(-50%);
    }
    
    /* 小屏幕：图片在上，文字在下 */
    .timeline-item:nth-child(odd) .timeline-content,
    .timeline-item:nth-child(even) .timeline-content,
    .timeline-item:nth-child(odd) .timeline-image,
    .timeline-item:nth-child(even) .timeline-image {
      left: 4rem;
      width: calc(100% - 6rem);
      position: relative;
    }
    
    .timeline-image {
      margin-bottom: 1rem;
      height: 150px;
    }
    
    .timeline-item:nth-child(odd) .timeline-content::after {
      right: auto;
      left: -10px;
      border-left: none;
      border-right: 10px solid white;
    }
    
    .timeline-item:nth-child(even) .timeline-content::after {
      display: none;
    }
    
    .timeline {
      padding-left: 0;
    }
    .timeline-content {
      padding: 1rem ;
    }
    .title {
      font-size: 2rem;
    }
    
    /* 响应式调整滚动提示 */
    .scroll-indicator {
      bottom: 2rem;
    }
  }

.md-header__inner {
  max-width: 61rem !important;
  margin: 0 auto !important;
  padding: 0 0.2rem !important; 
}

.md-tabs {
  max-width: 100% !important;
  margin: 0 auto !important;
  padding: 0 7.77rem !important; 
}
/* 屏幕宽度小于768px时的响应式样式 */
@media (max-width: 768px) {
  .timeline-section {
    width: 95% !important;
    padding: 3rem 1rem !important;
    margin-top: 100vh !important;
  }
  
  .timeline-container {
    padding: 0 0.5rem !important;
  }
  
  .timeline-title {
    font-size: 1.8rem !important;
    margin-bottom: 2rem !important;
    text-align: center !important;
  }
  
  /* 时间线居中调整 */
  .timeline::before {
    left: 1.5rem !important;
  }
  
  .timeline-dot {
    left: 1.5rem !important;
  }
  
  /* 所有项目统一布局：图片在上，内容在下 */
  .timeline-item {
    margin-bottom: 4rem !important;
    width: 100% !important;
    display: flex !important;
    flex-direction: column !important;
  }
  
  .timeline-content, 
  .timeline-image {
    width: calc(100% - 3rem) !important;
    left: 3rem !important;
    position: relative !important;
    margin-bottom: 1rem !important;
  }
  
  /* 移除所有箭头 */
  .timeline-content::after {
    display: none !important;
  }
  
  /* 图片尺寸调整 */
  .timeline-image {
    height: 180px !important;
    order: 1; /* 图片在上 */
  }
  
  .timeline-content {
    order: 2; /* 内容在下 */
    padding: 1.2rem !important;
  }
  
  .timeline-date {
    font-size: 1.1rem !important;
  }
  
  .timeline-event {
    font-size: 1rem !important;
    line-height: 1.5 !important;
  }
}

/* 屏幕宽度小于480px时的超小屏幕样式 */
@media (max-width: 480px) {
  .timeline-section {
    padding: 2rem 0.5rem !important;
  }
  
  .timeline-content, 
  .timeline-image {
    width: calc(100% - 2rem) !important;
    left: 2rem !important;
  }
  
  .timeline-image {
    height: 150px !important;
  }
  
  .timeline-content {
    padding: 1rem !important;
  }
  
  .timeline-date {
    font-size: 1rem !important;
  }
  
  .timeline-event {
    font-size: 0.9rem !important;
  }
  
  .timeline::before {
    left: 1rem !important;
  }
  
  .timeline-dot {
    left: 1rem !important;
    width: 1.2rem !important;
    height: 1.2rem !important;
  }
}
</style>

<div class="welcome"></div>
<div class="title-container">
  <div class="title">幻萦翠峰 碧海如梦</div>
  <iframe class="title" frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=1453431134&auto=0&height=66"></iframe>
  
  <!-- 向下滚动提示：文字在上方，箭头在下方 -->
  <div class="scroll-indicator">
    <div class="scroll-text">向下滚动</div>
    <div class="v-arrow-container">
      <div class="v-arrow"></div>
      <div class="v-arrow"></div>
      <div class="v-arrow"></div>
    </div>
  </div>
</div>


<section class="timeline-section">

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" width="400" height="100">
  <!-- 背景（透明） -->
  <rect width="100%" height="100%" fill="transparent"/>
  
  <!-- 文字 -->
  <text x="50%" y="50%" font-family="SimHei, '黑体', sans-serif" font-size="40" 
        text-anchor="middle" dominant-baseline="middle" fill="#333"
        text-shadow="1px 1px 3px rgba(0,0,0,0.2)">
    你是否还记得
  </text>
  
  <!-- 装饰性下划线 -->
  <line x1="30%" y1="70%" x2="70%" y2="70%" stroke="#666" stroke-width="2" stroke-dasharray="5,3"/>
</svg>
    
  <div class="timeline-container">
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-date">2024年7月</div>
          <div class="timeline-event">与东方社群 “崴の寺子屋” 建立友好关系</div>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-date">2024年9月</div>
          <div class="timeline-event">东方主题文化交流团会——梦月茶歇 成功举行</div>
        </div>
        <div class="timeline-image">
          <img src="../images/index/evt_202409.png">
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-date">2025年5月</div>
          <div class="timeline-event">参与威海thp01，社群作品《梦海方寸拾遗》在高校联合摊位出展</div>
        </div>
        <div class="timeline-image">
          <img src="../images/index/evt_202505.jpg">
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-date">2025年8月</div>
          <div class="timeline-event">与 “崴の寺子屋” 合作，制品在上海tho参展</div>
        </div>
      </div>
    </div>
  </div>
</section>

<script>
// 处理标题和iframe的滚动淡出效果 - 原地消失
function handleFadeOnScroll() {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const title = document.querySelector('.title:not(iframe)');
  const iframe = document.querySelector('iframe.title');
  const scrollIndicator = document.querySelector('.scroll-indicator');
  
  // 计算透明度：当滚动超过窗口高度的20%时开始淡出，滚动到窗口高度的80%时完全消失
  let opacity = 1 - (scrollPosition / (windowHeight * 0.8));
  opacity = Math.max(0, Math.min(1, opacity)); // 确保透明度在0-1之间
  
  if (title) {
    title.style.opacity = opacity;
  }
  
  if (iframe) {
    iframe.style.opacity = opacity;
  }
  
  // 滚动提示也随页面滚动淡出
  if (scrollIndicator) {
    scrollIndicator.style.opacity = opacity;
  }
}

// 时间线动画 - 同步显示事件和插图
function initTimelineAnimation() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  // 重置所有动画状态
  timelineItems.forEach(item => {
    item.classList.remove('visible');
    // 强制重绘
    item.style.animation = 'none';
    item.offsetHeight; // 触发重绘
    item.style.animation = null;
  });
  
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
    );
  }
  
  function handleTimelineScroll() {
    timelineItems.forEach((item, index) => {
      if (isInViewport(item) && !item.classList.contains('visible')) {
        setTimeout(() => {
          item.classList.add('visible');
        }, index * 200);
      }
    });
  }
  
  handleTimelineScroll();
  return handleTimelineScroll;
}

// 初始加载
document.addEventListener('DOMContentLoaded', () => {
  // 监听滚动事件处理淡出效果
  window.addEventListener('scroll', handleFadeOnScroll);
  
  // 初始化时间线动画
  let handleTimelineScroll = initTimelineAnimation();
  
  // 确保每次滚动都能正确触发
  window.addEventListener('scroll', handleTimelineScroll);
  
  // 监听页面可见性变化 - 增强版
  document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
      // 移除旧的监听器
      window.removeEventListener('scroll', handleTimelineScroll);
      // 重新初始化动画
      handleTimelineScroll = initTimelineAnimation();
      // 添加新的监听器
      window.addEventListener('scroll', handleTimelineScroll);
    }
  });
  
  // 页面显示事件 - 处理浏览器后退/前进缓存
  window.addEventListener('pageshow', function(event) {
    // 无论是否从缓存加载，都重新初始化
    window.removeEventListener('scroll', handleTimelineScroll);
    handleTimelineScroll = initTimelineAnimation();
    window.addEventListener('scroll', handleTimelineScroll);
    // 触发一次滚动检查
    setTimeout(() => {
      handleFadeOnScroll();
      handleTimelineScroll();
    }, 100);
  });
  
  // 添加popstate事件监听，处理历史记录变化
  window.addEventListener('popstate', function() {
    window.removeEventListener('scroll', handleTimelineScroll);
    handleTimelineScroll = initTimelineAnimation();
    window.addEventListener('scroll', handleTimelineScroll);
  });
});
// 添加定时器，每500毫秒强制重置一次动画状态
setInterval(() => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    let needsReset = false;
    
    // 检查是否有任何时间线项应该在视口中但未显示
    timelineItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.9 && rect.bottom >= 0;
        
        if (isInView && !item.classList.contains('visible')) {
            needsReset = true;
        }
    });
    
    // 如果需要重置，重新初始化动画
    if (needsReset) {
        // 移除旧的滚动监听器
        if (typeof handleTimelineScroll === 'function') {
            window.removeEventListener('scroll', handleTimelineScroll);
        }
        
        // 重新初始化
        handleTimelineScroll = initTimelineAnimation();
        window.addEventListener('scroll', handleTimelineScroll);
        
        // 立即触发一次检查
        setTimeout(handleTimelineScroll, 50);
        
        console.log('时间线动画已强制重置');
    }
}, 2000); // 每500毫秒检查一次

// 更激进的版本：直接强制重置所有可见项
setInterval(() => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.9;
        
        if (isInView && !item.classList.contains('visible')) {
            // 强制显示这个项目
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 100);
        }
    });
}, 6000 ); // 每300毫秒强制检查一次
</script>
