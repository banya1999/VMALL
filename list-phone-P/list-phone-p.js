// 用户是否登录  显示用户的名字
var userName = Cookies.get('user');
if(typeof userName === 'undefined') {
	document.querySelector("ul.header-bar-right>li.userName>a").innerText = "请登录";
	document.querySelector("ul.header-bar-right>li.userName>a").setAttribute("href", "../RegistLogin/login.html");
}else{
	document.querySelector("ul.header-bar-right>li.userName>a").innerText = userName;
	document.querySelector("ul.header-bar-right>li.userName>a").setAttribute("href", "../profile/profile.html");
}

// 所有的网页中存在一个全局对象window
// indexOf返回下标
var cid = parseInt(window.location.search.slice(window.location.search.indexOf("=") + 1));
// console.log(cid);
var productList = 
JSON.parse(sessionStorage.getItem("data")).productList.filter(function(item){
	return item.cid === cid; 
});
// 函数如果没有显示的return一值 则默认return的是undefined 而undefined转化成bool值是假

var orderDir = "asc"; //asc表示升序 desc表示降序
var orderKey = "price"; //price表示按价格排序 sale销量 rate评论

console.log(productList);
console.log(cid);
var navIns = "";
	var aids = [];
	var aEl =document.querySelector(".query-title>a.nav-main");
	var aEl2 = document.querySelector(".query-title>a.nav");
	var aEl3 = document.querySelector(".query-list-row>a.fenlei");
productList.forEach(function(item) {
	
	if(item.cid >= 11 && item.cid <= 19){
		navIns = "手机";
		aids.push(1);
	}else if(item.cid >= 20 && item.cid <= 24){
		navIns = "电脑";
		aids.push(2);
	}else{
		navIns ="其他";
		aids.push(3);
	}
	aEl.innerText = navIns;
	// console.log(aids);
	aEl2.innerText = item.nav;
	console.log(item.nav);
	document.title = item.nav + "_华为商城";
	aEl3.innerText = navIns;
	// 插入商品内容
	var liEl = document.createElement("li");
	liEl.innerHTML = `
		<a href="../product-detail/product-detail.html?pid=${ item.pid }">
			<img src="${ item.avatar }" />
			<h4>${ item.name }</h4>
			<span class="price">￥<em>${ item.price }</em></span>
			<span class="tips">${ item.tips }</span>
			<p class="info"><span>${ item.info }</span></p>
			<span class="conment-count">${ item.conmentcount }台售出</span>
			<span class="conment-rate">${ item.conmentrate }%好评</span>
		</a>
	`;
	document.querySelector("ul.product-list-ul").appendChild(liEl);
	
	// 排序
	var spans = document.querySelectorAll(".query-list-row>span.sort");
	
	spans.forEach(function(span){
		var deg = 0;
		var iEl = span.querySelector("i");
		iEl.style.transform = "rotate(180deg)";
		span.onclick = function(){
			
			if(this.classList.contains("active")){
				orderDir = orderDir === "asc" ? "desc" : "asc";
				spans.forEach(function(item){
					item.classList.toggle("asc", orderDir === "asc");
					iEl.style.opacity = "1";
				});
			}else{
				orderKey = this.dataset.key;
				spans.forEach(function(item){
					item.classList.remove("active");
					var i = item.querySelector("i");
					i.style.opacity = "0";
				});
				this.classList.add("active");
				iEl.style.opacity = "1";
			}
			deg = (deg+180)%360;
			iEl.style.transform = "rotate("+ deg +"deg)";
				
			sortList();
		};
	});
	// function rotateFun(){
	// 	var deg = 0;
	// 	var deg = (deg+180)%360;
	// 	iEl.style.transform = "rotate("+ deg +"deg)";
	// }
});
aEl.href += aids[0];	
	
function sortList(){
	productList.sort(function(a, b){
		return orderDir === "asc" ? a[orderKey] - b[orderKey] : b[orderKey] - a[orderKey];
	});
	document.querySelector("ul.product-list-ul").innerHTML = ""; //清空列表
	productList.forEach(function(item){
		var liEl = document.createElement("li");
		liEl.innerHTML = `
			<a href="../product-detail/product-detail.html?pid=${ item.pid }">
				<img src="${ item.avatar }" />
				<h4>${ item.name }</h4>
				<span class="price">￥<em>${ item.price }</em></span>
				<span class="tips">${ item.tips }</span>
				<p class="info"><span>${ item.info }</span></p>
				<span class="conment-count">${ item.conmentcount }台售出</span>
				<span class="conment-rate">${ item.conmentrate }%好评</span>
			</a>
		`;
		document.querySelector("ul.product-list-ul").appendChild(liEl);
	});
}


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


// 商品价格的筛选
(function(){
	var inp1 = document.querySelector(".price-check input.lower-price");
	var inp2 = document.querySelector(".price-check input.low-price");
	var inp3 = document.querySelector(".price-check input.high-price");
	
	inp1.onclick = function(){
		// 我为啥不写个Redio？？？？？！！！！
		inp2.checked = false;
		inp3.checked = false;
		var liEl = document.querySelectorAll("ul.product-list-ul>li");
		if(inp1.checked === true){
			liEl.forEach(function(li){
				if(parseInt(li.querySelector("span.price>em").innerText) <= 4000){
					li.style.display = "block";
				}else{
					li.style.display = "none";
				}
			});
		}else{
			liEl.forEach(function(li){
				li.style.display = "block";
			});
		}
	};
	
	inp2.onclick = function(){
		inp1.checked = false;
		inp3.checked = false;
		var liEl = document.querySelectorAll("ul.product-list-ul>li");
		if(inp2.checked === true){
			liEl.forEach(function(li){
				if(parseInt(li.querySelector("span.price>em").innerText) >= 4000 && parseInt(li.querySelector("span.price>em").innerText) <= 5999){
					li.style.display = "block";
				}else{
					li.style.display = "none";
				}
			});
		}else{
			liEl.forEach(function(li){
				li.style.display = "block";
			});
		}
	};
		
	inp3.onclick = function(){
		inp2.checked = false;
		inp1.checked = false;
		var liEl = document.querySelectorAll("ul.product-list-ul>li");
		if(inp3.checked === true){
			liEl.forEach(function(li){
				if(parseInt(li.querySelector("span.price>em").innerText) >= 6000){
					li.style.display = "block";
				}else{
					li.style.display = "none";
				}
			});
		}else{
			liEl.forEach(function(li){
				li.style.display = "block";
			});
		}
	};
	
})();
	


