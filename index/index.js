// 用户是否登录  显示用户的名字
var userName = Cookies.get('user');
if(typeof userName === 'undefined') {
	document.querySelector("ul.header-bar-right>li.userName>a").innerText = "请登录";
	document.querySelector("ul.header-bar-right>li.userName>a").setAttribute("href", "../RegistLogin/login.html");
}else{
	document.querySelector("ul.header-bar-right>li.userName>a").innerText = userName;
	document.querySelector("ul.header-bar-right>li.userName>a").setAttribute("href", "../profile/profile.html");
}


//取数据
var categoryList = JSON.parse(sessionStorage.getItem("data")).categoryList;




// 菜单数据
categoryList.filter(function(item) {
	return item.fid === 0;
}).forEach(function(item, i) {
	var liEl = document.createElement("li");
	liEl.className = "v-middle";
	liEl.innerHTML = `
		<a href="../list-phone-all/list-phone-all.html?aid=${ item.id }">
			${ item.name }
			<i class="iconfont icon-arrow-right-copy"></i>
		</a>
	`;
	
	var subUlEl = document.createElement("ul");
	subUlEl.className = "category-sub";
	
	var subCategoryList = categoryList.filter(function(item2){
		return item2.fid === item.id;
	});
	if(subCategoryList.length === 0){
		subUlEl.innerHTML = "<li class='v-middle'>暂无相关信息</li>";
	}else{
		subCategoryList.forEach(function(item2){
			subUlEl.innerHTML += `
				<li class="v-middle">
					<a href="../list-phone-P/list-phone-p.html?cid=${ item2.id }">
						<img src="${ item2.avatar}" />
						<span class="item">${ item2.name }</span>
					</a>
				</li>
			`;
		});
		subUlEl.innerHTML += `
			<li class="v-middle">
				<a href="../list/list.html">
					<span class="seeMore">查看更多>></span>
				</a>
			</li>
		`;
	}
	liEl.appendChild(subUlEl);
	document.querySelector("ul.category-main").appendChild(liEl);
});


// banner图片的动态

var bannerList = JSON.parse(sessionStorage.getItem("data")).bannerList;
bannerList.forEach(function(item) {
	var liEl = document.createElement("li");
	liEl.innerHTML = `
		<a href="#">
			<img src="${ item.avatar }" />
		</a>
	`;
	document.querySelector("ul.banner-slider").appendChild(liEl);
});

// 动态广告
var advList = JSON.parse(sessionStorage.getItem("data")).advList;
advList.forEach(function(item) {
	var liEl = document.createElement("li");
	liEl.innerHTML = `
		<a href="#">
			<img src="${ item.avatar }" />
		</a>
	`;
	document.querySelector(".active-adv>.banner2>ul.banner2-slider").appendChild(liEl);
});

// 推荐部分的滚动图 按钮事件
var prevEl = document.querySelector(".recommend-list-wrapper>span.prev");
var nextEl = document.querySelector(".recommend-list-wrapper>span.next");
var j = 0;
var ulEl = document.querySelector("ul.recommend-list");
var liEl = ulEl.querySelectorAll("li");

prevEl.onclick = function(){
	if(j === 0) return;
	j-=5;
	ulEl.style.transform = `translateX(-${ j * 20 }%)`;
};

nextEl.onclick = function(){
	if(j + 5 >= liEl.length) return;
	j+=5;
	ulEl.style.transform = `translateX(-${ j * 20 }%)`;
};


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


