---
hide:
  - toc        # 隐藏目录
  - navigation 
---
インターネット中の不思議を集めて
<style>
/* 容器样式重置与基础设置 */
.team-gallery .container {
  max-width: 1200px; /* 限制最大宽度，避免过宽 */
  margin: 0 auto;   /* 居中显示 */
  padding: 20px;
}

/* 链接容器 Flex 布局 */
.team-gallery .links {
  display: flex;
  flex-wrap: wrap;  /* 自动换行 */
  gap: 24px;        /* 卡片间距 */
  justify-content: center; /* 水平居中 */
  padding: 10px 0;
}

/* 单个链接卡片样式 */
.team-gallery .site {
  flex: 0 0 calc(33.333% - 16px); /* 计算3列布局，减去间距 */
  box-sizing: border-box;
  min-width: 280px; /* 最小宽度，避免过窄 */
  text-decoration: none; /* 去除下划线 */
  color: inherit; /* 继承文字颜色 */
  background: #ffffff;
  border-radius: 8px;
  padding: 20px;
  transition: all 0.3s ease; /* 过渡动画 */
  display: flex;
  flex-direction: column; /* 垂直排列 */
  align-items: center; /* 水平居中 */
  text-align: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05); /* 轻微阴影 */
}

/* 鼠标悬停效果 */
.team-gallery .site:hover {
  transform: translateY(-5px); /* 轻微上浮 */
  box-shadow: 0 8px 15px rgba(0,0,0,0.1); /* 增强阴影 */
  border-color: #666;
  background-color: #f8f9fa; /* 背景色变化 */
}

/* 图片容器样式 */
.team-gallery .site-logo {
  width: 100px;
  height: 100px;
  margin: 0 auto 15px; /* 居中并添加底部间距 */
  background-position: center; /* 背景图居中 */
  background-repeat: no-repeat;
  border-radius: 6px; /* 图片圆角 */
  transition: transform 0.3s ease; /* 图片缩放动画 */
}

/* 鼠标悬停时图片轻微放大 */
.team-gallery .site:hover .site-logo {
  transform: scale(1.05);
}

/* 标题样式 */
.team-gallery .site h2 {
  font-size: 16px;
  margin: 0;
  padding: 5px 0;
  color: #333;
  line-height: 1.4; /* 优化多行文字间距 */
  transition: color 0.3s ease;
}

/* 悬停时标题变色 */
.team-gallery .site:hover h2 {
  color: #2c3e50;
}

/* 响应式调整：屏幕较小时改为2列 */
@media (max-width: 900px) {
  .team-gallery .site {
    flex: 0 0 calc(50% - 16px); /* 2列布局 */
  }
}

/* 响应式调整：手机端改为1列 */
@media (max-width: 600px) {
  .team-gallery .site {
    flex: 0 0 100%; /* 1列布局 */
  }
}

/* 夜间模式适配 - 方式1：Material主题旧版本深色类 */
.md-dark .team-gallery .site {
  background: #2a2a2a;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}
.md-dark .team-gallery .site h2 {
  color: #e0e0e0;
}
.md-dark .team-gallery .site:hover {
  background-color: #383838;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4);
}
.md-dark .team-gallery .site:hover h2 {
  color: #ffffff;
}

/* 夜间模式适配 - 方式2：Material主题新版本深色模式（slate配色） */
[data-md-color-scheme="slate"] .team-gallery .site {
  background: #2a2a2a;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}
[data-md-color-scheme="slate"] .team-gallery .site h2 {
  color: #e0e0e0;
}
[data-md-color-scheme="slate"] .team-gallery .site:hover {
  background-color: #383838;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4);
}
[data-md-color-scheme="slate"] .team-gallery .site:hover h2 {
  color: #ffffff;
}

/* 夜间模式适配 - 方式3：系统深色模式 */
@media (prefers-color-scheme: dark) {
  .team-gallery .site {
    background: #2a2a2a;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }
  .team-gallery .site h2 {
    color: #e0e0e0;
  }
  .team-gallery .site:hover {
    background-color: #383838;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4);
  }
  .team-gallery .site:hover h2 {
    color: #ffffff;
  }
}
</style>

<body>
	<div class="team-gallery">
		<div class="container">
			<div class="links">
				<a class="site" href="https://moriyashrine.org/">
					<div class="site-logo" style="background-size:contain;background-image: url(/images/sites/moriya_shrine.webp);"></div>
					<h2>MoriyaShrine</h2>
				</a>
				<a class="site" href="https://maribelhearn.com/">
					<div class="site-logo" style="background-image: url(/images/sites/maribel_hearn.png);background-size: 60%;"></div>
					<h2>Maribel Hearn's Touhou Portal</h2>
				</a>
				<a class="site" href="https://www.isndes.com/">
					<div class="site-logo" style="background-image: url(/images/sites/isndes.ico);background-size: 60%;"></div>
					<h2>甜品站</h2>
				</a>
				<a class="site" href="http://lunarcast.net/">
					<div class="site-logo" style="background-image: url(/images/sites/lunarcast.ico);background-size: 60%;"></div>
					<h2>LunarCast</h2>
				</a>
				<a class="site" href="https://wikiwiki.jp/thk/">
					<div class="site-logo" style="background-image: url(/images/sites/Th05Yin-YangOrb.png);background-size:70%;"></div>
					<h2>東方Project攻略Wiki</h2>
				</a>
				<a class="site" href="https://www.silentselene.net/">
					<div class="site-logo" style="background-image: url(/images/sites/silentselene.ico);background-size:70%;"></div>
					<h2>SilentSelene</h2>
				</a>
				<a class="site" href="https://gensokyoradio.net/">
					<div class="site-logo" style="background-image: url(/images/sites/gsk_radio.ico);background-size:70%;"></div>
					<h2>GensokyoRadio</h2>
				</a>
				<a class="site" href="https://ximin.top/thfm/">
					<div class="site-logo" style="background-image: url(/images/sites/power.jpg);background-size:70%;"></div>
					<h2>习泯小点</h2>
				</a>
				<a class="site" href="https://thvideo.tv/">
					<div class="site-logo" style="background-image: url(/images/sites/patchyvideo.80ae4f27.svg);background-size:70%;"></div>
					<h2>PachyVideo</h2>
				</a>
				<a class="site" href="https://touhou-project.news/">
					<div class="site-logo" style="background-image: url(/images/sites/zun_mark.png);background-size:70%;"></div>
					<h2>东方四方山新闻</h2>
				</a>
				<a class="site" href="https://wiki.514.live/">
					<div class="site-logo" style="background-image: url(/images/sites/fxtz.ico);background-size:70%;"></div>
					<h2>非想天则指南</h2>
				</a>
				<a class="site" href="https://gyate.net/">
					<div class="site-logo" style="background-image: url(/images/sites/gyate.png);background-size:110%;"></div>
					<h2>Gyate Booru</h2>
				</a>
				<a class="site" href="https://izakaya.cc/">
					<div class="site-logo" style="background-image: url(/images/sites/TMI.png);background-size:70%;"></div>
					<h2>东方夜雀食堂小助手</h2>
				</a>
				<a class="site" href="https://touhou.cc/">
					<div class="site-logo" style="margin: 42px auto 25px auto;height: 70px;width: 70px;border-radius: 12px; background-image: url(/images/sites/touhoucc.jpg);"></div>
					<h2>东方幻想乡<br>Touhou Lotus Land!</h2>
				</a>
				<a class="site" href="https://bbs.nyasama.com/">
					<div class="site-logo" style="margin: 42px auto 25px auto;height: 70px;width: 70px; border-radius: 12px; background-image: url(/images/sites/nyasama.ico);background-size:contain;"></div>
					<h2>喵玉殿论坛</h2>
				</a>
				<a class="site" href="https://enazo.cn/">
					<div class="site-logo" style="height: 100px;width: 100px;background-image: url(/images/sites/enazo.png);background-size: 100%;"></div>
					<h2>絵謎</h2>
				</a>
				<a class="site" href="https://www.thpatch.net/">
					<div class="site-logo" style="background-image: url(/images/sites/thpatch.ico);background-size:70%;"></div>
					<h2>Touhou <br>Patch Center</h2>
				</a>
				<a class="site" href="https://toho-vote.info/">
					<div class="site-logo" style="background-image: url(/images/sites/vote.ico);background-size: 70%;"></div>
					<h2>東方Project<br>人気投票</h2>
				</a>
				<a class="site" href="https://touhou.vote/nav">
					<div class="site-logo" style="background-image: url(/images/sites/vote.ico);background-size: 75%;"></div>
					<h2>中文东方人气投票</h2>
				</a>
				<a class="site" href="https://cloud.lilywhite.cc">
					<div class="site-logo" style="background-image: url(/images/sites/lily.ico);background-size: 70%;"></div>
					<h2>莉莉云</h2>
				</a>
				<a class="site" href="https://touhou.market">
					<div class="site-logo" style="background-image: url(/images/sites/market.webp);background-size: 70%;"></div>
					<h2>东方市场(公测版本)</h2>
				</a>
				<a class="site" href="https://gensoukoudan.net/">
					<div class="site-logo" style="background-image: url(/images/sites/gensokilism.png);background-size: 60%;"></div>
					<h2>幻想郷学講談所</h2>
				</a>
				<a class="site" href="https://cn.touhougarakuta.com/">
					<div class="site-logo" style="background-image: url(/images/sites/saoow.png);background-size: 40%;"></div>
					<h2>东方我乐多丛志(中文)</h2>
				</a>
				<a class="site" href="https://touhou-memories.com/">
					<div class="site-logo" style="background-image: url(/images/sites/Th05Yin-YangOrb.png);background-size:70%;"></div>
					<h2>Touhou-memories</h2>
				</a>
				<a class="site" href="https://oameya.com/">
					<div class="site-logo" style="background-image: url(/images/sites/oameya.png);background-size:70%;"></div>
					<h2>大飴屋<br>Webサイト</h2>
				</a>
				</div>

			</div>
		</div>
	</div>
</body>