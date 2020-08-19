var index = 0; // 全局变量 记录当前那一张是激活的
var interval = 5000; //轮播图间隔时间
var timer = null; //保存计时器对象
var count = 6; //总共实际要轮播的图片数量
var lock = false //标识是否在执行动画

// 自动播放的时候、点击轮播图指示器的时候、点击左右上一张下一张按钮的时候
function slide(nextIndex) {
	//如果当前正在执行轮播动画则直接返回
	if(lock) return;
	lock = true;
	// nextIndex -1 0 1 2 3 4
	// index 0 1 2 3
	
	// 图片切换
	var slider = document.querySelector("ul.banner-slider");
	slider.style.transitionDuration = "1s";
	slider.style.marginLeft = -1 * nextIndex + "00%";

	//指示器
	var indicators = document.querySelectorAll("ul.banner-indicator>li");
	// 让当前激活的不激活
	indicators[index].className = "";
	
	// 更新index
	if(nextIndex === count) index = 0;
	else if(nextIndex === -1) index = count - 1;
	else index = nextIndex;
	
	// 让指定的激活
	indicators[index].className = "active";
	
	// 无缝重置效果
	setTimeout(function() {
		slider.style.transitionDuration = "0s";
		if(nextIndex === count) slider.style.marginLeft = "0%";
		if(nextIndex === -1) slider.style.marginLeft = -1 * (count - 1) + "00%";
		lock = false;
	}, 1020)
	
	// if(nextIndex === count){
	// 	setTimeout(function() {
	// 		slider.style.transitionDuration = "0s";
	// 		slider.style.marginLeft = "0%";
	// 	}, 1000);
	// }
	// if(nextIndex === -1){
	// 	setTimeout(function() {
	// 		slider.style.transitionDuration = "0s";
	// 		slider.style.marginLeft = -1 * (count - 1 ) + "00%";
	// 	}, 1000);
	// }
}

// 自动播放
function play() {
	timer = setInterval(function() {
		// var nextIndex = (index + 1) % document.querySelectorAll("ul.banner-slider>li").length;
		// slide(nextIndex);
		slide(index + 1);
	}, interval); //不要再加括号
}

document.querySelector(".banner").onmouseover = function() {
	clearInterval(timer);
}
document.querySelector(".banner").onmouseout = function() {
	play();
}
//指示器点击切换轮播图
var indicators = document.querySelectorAll("ul.banner-indicator>li");
for(var i = 0; i < indicators.length; i++) {
	indicators[i].i = i;
	indicators[i].onclick = function() {
		if(this.className == "active") return;
		slide(this.i);
	};
}
//两个耳朵左右切换轮播图
// 上一张
document.querySelector("span.banner-prev").onclick = function() {
	slide(index - 1);
};
// 下一张
document.querySelector("span.banner-next").onclick = function() {
	slide(index + 1);
};

// 自动播放
play();
