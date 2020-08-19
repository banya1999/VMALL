// 用户是否登录  显示用户的名字
var userName = Cookies.get('user');
if(typeof userName === 'undefined') {
	document.querySelector("ul.header-bar-right>li.userName>a").innerText = "请登录";
	document.querySelector("ul.header-bar-right>li.userName>a").setAttribute("href", "../RegistLogin/login.html");
}else{
	document.querySelector("ul.header-bar-right>li.userName>a").innerText = userName;
	document.querySelector("ul.header-bar-right>li.userName>a").setAttribute("href", "../profile/profile.html");
}


var count = 1;
var userName = Cookies.get('user');
// 	获取当前详情页要展示的商品id
if(window.location.search.length === 0) var pid = 2; // 如果不是从商品列表跳过来，默认主推pid为2的商品
else var pid = parseInt(window.location.search.slice(window.location.search.indexOf('=') + 1));
// var pid = parseInt(window.location.search.slice(window.location.search.indexOf("=") + 1));
// console.log(cid);
var productList = 
JSON.parse(sessionStorage.getItem("data")).productList.filter(function(item){
	return item.pid === pid; 
});
// console.log(productList);
// 测试
// productList.forEach(function(item) {
// 	console.log(item.img);
// 	var imgs = item.img.split("&");
// 	console.log(imgs);
// 	imgs.forEach(function(item2, i){
// 		var liEl = document.createElement("li");
// 		liEl.innerHTML = `
// 			<img src="${item2}"/>
// 		`;
// 		document.querySelector("ul.test").appendChild(liEl);
// 	});	
// });

// 购买商品的数量控制
(function(){
		var btnDecrease = document.querySelector('button.minus');
		var btnIncrease = document.querySelector('button.plus');
		var inputCount = document.querySelector('input.count');
		var maxCount = 5;
		btnDecrease.onclick = function() {
			// 不管+能不能用，先让+可以用
			btnIncrease.disabled = false;
			inputCount.value = --count;
	//		count--;
	//		inputCount.value = count;
			this.disabled = count === 1;
		
		};
		btnIncrease.onclick = function() {
			btnDecrease.disabled = false;
			inputCount.value = ++count;
	//		count++;
	//		inputCount.value = count;
			this.disabled = count === maxCount;
		};
		inputCount.onfocus = function() {
			this.oldValue = this.value;
		};
		inputCount.onkeyup = function(e) {
			if((e.keyCode < 48 || e.keyCode > 57) && e.keyCode !== 8) { this.value = this.oldValue; }
			else this.oldValue = this.value;
		};
		inputCount.onblur = function() {
			if(this.value.length === 0) this.value = 1;
			if(parseInt(this.value) < 1) this.value = 1;
			if(parseInt(this.value) > maxCount) this.value = 5;
			count = parseInt(this.value);
			btnDecrease.disabled = count === 1;
			btnIncrease.disabled = count === 5;
			
		};
	
	
	
})();

// 用于顶部显示购物车商品数量
function cartNum(){
	if(typeof userName === 'undefined') 
		document.querySelector("ul.header-bar-right>li>a>span.total").innerText = "0";
	// 如果登录了
	var data = JSON.parse(sessionStorage.getItem('data'));
	//获取用户的所有购物记录
	var num = data.cartList.filter(function(item, i){
		return item.name === userName;
	});
	var cartNum = 0;
	// console.log(num);
	num.forEach(function(item, i){
		cartNum += num[i].count
	});
	// console.log(cartNum);
	document.querySelector("ul.header-bar-right>li>a>span.total").innerText = cartNum;
	
}
	cartNum();
	
	
	
function gotoCart(){
	// 判断用户有没有登录，没有登录就跳转登录页面
	if(typeof userName === 'undefined') {
		Cookies.set('backUrl', window.location.href); // 将当前页面路径放入cookie.以使登录成功能跳转返回
		window.location.href = '../RegistLogin/login.html'; // 跳转到登录页面
	}
	// 如果登录了
	var data = JSON.parse(sessionStorage.getItem('data'));
	var index = data.cartList.findIndex(function(item) {
		return item.name === userName && item.pid === pid;
	});
	cartNum();
	
	
	if(index === -1) {             // 这个商品当前登录的用户对应的购物车中没有
		var obj = {
			id: data.cartList[data.cartList.length - 1].id +1,
			name: userName,
			pid: pid,
			count: count
		};
		data.cartList.push(obj);
	} else {                      // 这个商品当前登录的用户对应的购物车中有
		if(data.cartList[index].count + count > 5) {
			Message.alert('当前商品在购物车中已达到购买上限啦');
			return;
		}
		data.cartList[index].count += count;
	}
	sessionStorage.setItem('data', JSON.stringify(data));
	Message.alert("成功加入购物车~");
}
// 加入购物车
document.querySelector('button.addToCart').onclick = function() {
	gotoCart();
	setTimeout(function(){
		window.location.href = window.location.href;
	}, 1500);
};
// 点击立即下单按钮  直接跳转到购物车页面
document.querySelector("button.xiadan").onclick = function(){
	gotoCart();
	window.location.href = "../cart/cart.html";
};


// console.log(productList);
// 动态的插入数据
(function(){
	productList.forEach(function(item){
		
		var bigImgList = document.querySelector("ul.big-image-list");
		var imgList = document.querySelector("ul.image-list");
		var imgs = item.img.split("&");
		// var liEl = bigImgList.querySelector("li");
		
		imgs.forEach(function(item2, i){
			if(i === 0){
				bigImgList.innerHTML += `
					<li class="show"><div class="image-wrapper"><img src="${item2}" /></div></li>
				`;
				imgList.innerHTML +=`
					<li><div class="image-wrapper"><img src="${item2}" /></div></li>
				`;
			}else{
				bigImgList.innerHTML += `
					<li><div class="image-wrapper"><img src="${item2}" /></div></li>
				`;
				imgList.innerHTML +=`
					<li><div class="image-wrapper"><img src="${item2}" /></div></li>
				`;
			}
		});
		// console.log(item.cid);
		var navMain = document.querySelector(".detail-nav>p>a.nav-main");
		if(item.cid ===  11) {
			navMain.innerText = "手机";
		}else if(item.cid === 12){
			navMain.innerText = "电脑";
		}else{
			navMain.innerText = "其他";
		}
		
		document.title = item.name + "_华为商城";
		
		var nav = document.querySelector(".detail-nav>p>a.nav");
		nav.innerHTML += `${item.nav}`;
		
		var version = document.querySelector(".detail-nav>p>a.version");
		version.innerHTML += `${item.title}`;
		var title = document.querySelector(".detail-info>h2");
		title.innerHTML += `${item.title}`;
		
		var price = document.querySelector(".detail-price-row1>span");
		price.innerHTML += `<em>￥</em>${item.price}.00`;
		
		// 详细参数信息
		var aC4 = document.querySelector(".content-comment>a#C4");
		var aC3 = document.querySelector(".content-baozhuang>a#C3");
		var aC2 = document.querySelector(".content-canshu>a#C2");
		var aC1 = document.querySelector(".content-info>a#C1");
		
		var imgDetail = item.imgDetail.split("&");
		// console.log(imgDetail);
		imgDetail.forEach(function(item2, i){
			// console.log(i);
			if(i <= imgDetail.length - 4){
				aC1.innerHTML += `
			 		<img src="${ item2 }" />
				`;
			}else if(i === imgDetail.length -3){
				aC2.innerHTML += `
					<img src="${ item2 }" />
				`;
			}else if(i === imgDetail.length -2 ){
				aC3.innerHTML += `
					<img src="${ item2 }" />
				`;
			}else{
				aC4.innerHTML += `
					<img src="${ item2 }" />
				`;
			}
		});
	});
})();





// 放大镜部分
(function(){
	var prevEl = document.querySelector(".image-list-wrapper>span.prev");
	var nextEl = document.querySelector(".image-list-wrapper>span.next");
	var i = 0;
	var ulEl = document.querySelector("ul.image-list");
	var liEl = ulEl.querySelectorAll("li");
	
	prevEl.onclick = function() {
		if (i === 0) return;
		i--;
		ulEl.style.transform = `translateX(-${ i * 20 }%)`;
	};
	
	nextEl.onclick = function() {
		if (i + 5 >= liEl.length) return;
		i++;
		ulEl.style.transform = `translateX(-${ i * 20 }%)`;
	};
	
	
	liEl.forEach(function(item, i) {
		item.i = i;
		item.onmouseover = function() {
			document.querySelector("ul.big-image-list>li.show").className = "";
			document.querySelectorAll("ul.big-image-list>li")[this.i].className = "show";
		};
	});
	
	// 放大镜
	document.querySelector(".big-image-list-wrapper").onmouseover = function() {
		var imgPath = this.querySelector("li.show img").src;
		var zoomEl = this.querySelector(".zoom");
		var zoomBigEl = this.parentNode.querySelector(".zoom-big");
		zoomEl.style.backgroundImage = `url(${ imgPath })`;
		zoomBigEl.style.backgroundImage = `url(${ imgPath })`;
		var width = this.getBoundingClientRect().width;
		var height = this.getBoundingClientRect().height;
		zoomEl.style.backgroundSize = `${ width - 2 }px ${ height -2 }px`;
	
		var ratio = width / zoomEl.getBoundingClientRect().width;
		zoomBigEl.style.backgroundSize = `${ ratio * width - 2 }px ${  ratio *  height -2 }px`;
	};
	
	
	document.querySelector(".big-image-list-wrapper").onmousemove = function(e) {
		var zoomEl = this.querySelector(".zoom"),
			zoomBigEl = this.parentNode.querySelector(".zoom-big"),
			x,
			y,
			mouseX = e.clientX - this.getBoundingClientRect().left,
			mouseY = e.clientY - this.getBoundingClientRect().top,
			minX = zoomEl.getBoundingClientRect().width / 2,
			minY = zoomEl.getBoundingClientRect().height / 2,
			maxX = this.getBoundingClientRect().width - minX,
			maxY = this.getBoundingClientRect().height - minY;
	
		if (mouseX <= minX) x = 0;
		else if (mouseX >= maxX) x = maxX - minX;
		else x = mouseX - minX;
	
		if (mouseY <= minY) y = 0;
		else if (mouseY >= maxY) y = maxY - minY;
		else y = mouseY - minY;
	
		zoomEl.style.left = `${ x }px`;
		zoomEl.style.top = `${ y }px`;
		zoomEl.style.backgroundPosition = `${ -x }px ${ -y }px`;
		var ratio = this.getBoundingClientRect().width / zoomEl.getBoundingClientRect().width;
		zoomBigEl.style.backgroundPosition = `-${ x * ratio }px -${ y * ratio }px`;
	};
})();


// 控制选择的手机版本
(function(){
	// var btn1 = document.querySelector(".version>button.btn1");
	// var btn2 = document.querySelector(".version>button.btn2");
	
	// btn1.onclick = function() {
	// 	if (btn1.className === "choose") return;
	// 	else {
	// 		btn2.className = "";
	// 		btn1.className = "choose";
	// 	}
	// 	var version = btn1.value;
	// 	var info = document.querySelector(".detail-info>h2");
	// 	info.innerHTML = `
	// 		HUAWEI P40 Pro+ 5G 全网通 8GB+${ version }GB（陶瓷白）
	// 	`;
	// 	var nav = document.querySelector(".detail-nav>p>a.version");
	// 	nav.innerHTML = `
	// 		HUAWEI P40 Pro+ 5G 全网通 8GB+256GB (陶瓷白)
	// 	`;
	// 	var price = document.querySelector(".detail-price-row1>span");
	// 	price.innerHTML = `
	// 		<em>￥</em>7988.00
	// 	`;
	// 	var yixuan = document.querySelector(".yixuan>span");
	// 	yixuan.innerHTML = `
	// 		<em>5G全网通 8GB+256GB / 官方标配</em>
	// 	`;
	// }
	
	// btn2.onclick = function() {
	// 	if (btn2.className === "choose") return;
	// 	else {
	// 		btn1.className = "";
	// 		btn2.className = "choose";
	// 	}
	// 	var version = btn2.value;
	// 	var info = document.querySelector(".detail-info>h2");
	// 	info.innerHTML = `
	// 		HUAWEI P40 Pro+ 5G 全网通 8GB+${ version }GB（陶瓷白）
	// 	`;
	// 	var nav = document.querySelector(".detail-nav>p>a.version");
	// 	nav.innerHTML = `
	// 		HUAWEI P40 Pro+ 5G 全网通 8GB+512GB (陶瓷白)
	// 	`;
	// 	var price = document.querySelector(".detail-price-row1>span");
	// 	price.innerHTML = `
	// 		<em>￥</em>8888.00
	// 	`;
	// 	var yixuan = document.querySelector(".yixuan>span");
	// 	yixuan.innerHTML = `
	// 		<em>5G全网通 8GB+512GB / 官方标配</em>
	// 	`;
	// }
})();

// 送货日期
(function(){
	var date = new Date();
	var send = document.querySelector(".send>span>b");
	var month = date.getMonth();
	var day = date.getDate();
	var weekNum = date.getDay();
	// console.log(weekNum);
	var week = "";
	if (weekNum === 5) week = "日";
	else if (weekNum === 6) week = "一";
	else if (weekNum === 0) week = "二";
	else if (weekNum === 1) week = "三";
	else if (weekNum === 2) week = "四";
	else if (weekNum === 3) week = "五";
	else if (weekNum === 4) week = "六";
	
	send.innerHTML = `
		${ month + 1 }月${ day + 2 }日(周${ week })送达
	`;
})();




// 选项卡点击 调到网页的某一个部分
(function(){
	var aEl = document.querySelectorAll(".detail-content-nav2>p>a");
	// var nowTop = document.documentElement.scrollTop || document.body.scrollTop;
	aEl.forEach(function(item) {
		item.onclick = function() {
			if (this.className === "active") return;
			aEl.forEach(function(item2) {
				item2.className = "";
			});
			this.className = "active";
	
		};
		var nowTop = document.documentElement.scrollTop || document.body.scrollTop;
		window.scrollTo(0, nowTop - 50);
	});
	
	// ====
	var partNavs = document.querySelectorAll(".detail-content-nav2>p>a");
	var topAreas = [];
	var parts = document.querySelectorAll(".detail-content>.part");
	setTimeout(function(){
		parts.forEach(function(item, i) {
			var nowTop = document.documentElement.scrollTop || document.body.scrollTop;
			topAreas.push(nowTop + item.getBoundingClientRect().top);
		});
		// console.log(topAreas);
	}, 1000);
	window.onscroll = function() {
		var nowTop = document.documentElement.scrollTop || document.body.scrollTop;
		var productDetail = document.querySelector(".product-detail");
		var nav = document.querySelector(".detail-content-nav2");
		var fixLimt = productDetail.getBoundingClientRect().height;
	
		// 上方选项卡的显示
		if (nowTop >= fixLimt + 80) {
			nav.style.display = "block";
			nav.style.position = "fixed";
			nav.style.top = "0";
			nav.style.left = "50%";
			nav.style.transform = "translateX(-50%)";
		} else {
			nav.style.display = "none";
		}
		// 选项卡的切换toggle
		for (var i = topAreas.length - 1; i >= 0; i--) {
			if (nowTop + 50 >= topAreas[i]) break;
		}
		partNavs.forEach(function(item) {
			item.className = "";
		});
		if (i >= 0) partNavs[i].className = "active";
	};
})();

