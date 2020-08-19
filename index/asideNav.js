var topAreas = [],
	parts = document.querySelectorAll(".part"),
	partNavs = document.querySelectorAll("ul.part-nav>li"),
	scrollTimer = null;


//辅助函数
function scroll(top) {
	// 获取当前滚到了哪里
	var nowTop = document.documentElement.scrollTop || document.body.scrollTop;
	var diffTop = top - nowTop + 50;
	// 如果是最后一次滚动
	if (Math.abs(diffTop) <= 30) {
		window.scrollTo(0, top);
		clearInterval(scrollTimer);
		scrollTimer = null;
	} else {
		window.scrollTo(0, diffTop > 0 ? nowTop + 30 : nowTop - 30);
	}
}
// imagesLoaded(document.body, function(){
	parts.forEach(function(item, i) {
		var nowTop = document.documentElement.scrollTop || document.body.scrollTop;
		topAreas.push(nowTop + item.getBoundingClientRect().top);
	});
// });


// console.log(topAreas);

// 点击左侧导航条
// IE浏览器不支持forEach
partNavs.forEach(function(item, i) {
	item.index = i;
	item.onclick = function() {
		// 如果已经激活 直接返回
		if (this.className === "active") return;
		// 如果上一个滚动任务还没结束 则直接结束上一个任务 准备开启下一个滚动任务
		if (scrollTimer !== null) {
			clearInterval(scrollTimer);
			scrollTimer === null;
		}

		partNavs.forEach(function(item2) {
			item2.className = "";
		});
		this.className = "active";

		var top = topAreas[this.index];
		scrollTimer = setInterval(function() {
			scroll(top);
		}, 10);
	};
});

//右边鼠标滚动联动左边
window.onmousewheel = function() {
	// 如果滚动鼠标滚轮时 存在左边点击激活的滚动任务时 将滚动任务取消
	if (scrollTimer) {
		clearInterval(scrollTimer);
		scrollTimer = null;
	}
}
window.onscroll = function() {
	// 点击左边触发的滚动 不处理i
	if (scrollTimer) return;
	//滚动鼠标滚动触发的滚动
	var nowTop = document.documentElement.scrollTop || document.body.scrollTop;
	for (var i = topAreas.length - 1; i >= 0; i--) {
		if (nowTop + 50 >= topAreas[i]) break;
	}
	partNavs.forEach(function(item) {
		item.className = "";
	});
	if (i >= 0) partNavs[i].className = "active";


	// topGp
	var hotSale = document.querySelector(".hotSale");
	var limitDist = hotSale.getBoundingClientRect().height;
	if (nowTop > limitDist) {
		topGo.style.display = "block";
	} else {
		topGo.style.display = "none";
	}
	topGo.style.transform = "scale(1)";
	topLi.style.color = "#C5C5C5";
};

// 回到顶部

var topGo = document.querySelector("ul.goTop");
topGo.style.display = "none";
var topLi = topGo.querySelector("li");



topGo.onclick = function() {
	var nowTop = document.documentElement.scrollTop || document.body.scrollTop;
	if (nowTop === 0) return;
	if (scrollTimer !== null) {
		clearInterval(scrollTimer);
		scrollTimer === null;
	}
	
	topGo.style.transform = "scale(2)";
	topLi.style.color = "#ff5500";
	setTimeout(function() {
		scrollTimer = setInterval(function() {
			scroll(top);
		}, 1);
		setTimeout(function(){
			topGo.style.display = "none";
		},500)
		
	}, 1000);
	
	
	partNavs.forEach(function(item) {
		item.className = "";
	});

	

};
