var index2 = 0; // 全局变量 记录当前那一张是激活的
var interval2 = 5000; //轮播图间隔时间
var timer2 = null; //保存计时器对象
var count2 = 6; //总共实际要轮播的图片数量
var lock2 = false //标识是否在执行动画

// 自动播放的时候、点击轮播图指示器的时候、点击左右上一张下一张按钮的时候
function slide2(nextIndex) {
	//如果当前正在执行轮播动画则直接返回
	if(lock2) return;
	lock2 = true;
	// nextIndex -1 0 1 2 3 4
	// index 0 1 2 3
	
	// 图片切换
	var slider = document.querySelector(".active-adv>.banner2>ul.banner2-slider");
	slider.style.transitionDuration = "1s";
	slider.style.marginLeft = -1 * nextIndex + "00%";

	//指示器
	var indicators = document.querySelectorAll(".active-adv>.banner2>ul.banner2-indicator>li");
	// 让当前激活的不激活
	indicators[index2].className = "";
	
	// 更新index
	if(nextIndex === count2) index2 = 0;
	else if(nextIndex === -1) index2 = count2 - 1;
	else index2 = nextIndex;
	
	// 让指定的激活
	indicators[index2].className = "active";
	
	// 无缝重置效果
	setTimeout(function() {
		slider.style.transitionDuration = "0s";
		if(nextIndex === count2) slider.style.marginLeft = "0%";
		if(nextIndex === -1) slider.style.marginLeft = -1 * (count2 - 1) + "00%";
		lock2 = false;
	}, 1020)
	
}

// 自动播放
function play2() {
	timer2 = setInterval(function() {
		// var nextIndex = (index + 1) % document.querySelectorAll("ul.banner-slider>li").length;
		// slide(nextIndex);
		slide2(index2 + 1);
	}, interval2); //不要再加括号
}

document.querySelector(".active-adv>.banner2").onmouseover = function() {
	clearInterval(timer2);
}
document.querySelector(".active-adv>.banner2").onmouseout = function() {
	play2();
}
//指示器点击切换轮播图
var indicators = document.querySelectorAll(".active-adv>.banner2>ul.banner2-indicator>li");
for(var i = 0; i < indicators.length; i++) {
	indicators[i].i = i;
	indicators[i].onclick = function() {
		if(this.className == "active") return;
		slide2(this.i);
	};
}
play2();