// 用户是否登录  显示用户的名字
var userName = Cookies.get('user');
if(typeof userName === 'undefined') {
	document.querySelector("ul.header-bar-right>li.userName>a").innerText = "请登录";
	document.querySelector(".user-name>span.name").innerText = "未登录";
	document.querySelector("ul.header-bar-right>li.userName>a").setAttribute("href", "../RegistLogin/login.html");
}else{
	document.querySelector("ul.header-bar-right>li.userName>a").innerText = userName;
	document.querySelector(".user-name>span.name").innerHTML = `${ userName }<em>退出登录</em>` ;
	document.querySelector("ul.header-bar-right>li.userName>a").setAttribute("href", "../profile/profile.html");
}
var data = JSON.parse(sessionStorage.getItem("data"));
var newList = data.orderList;
// 从这拿到的是orderlist的引用
var orderList = newList.filter(function(item){
	return item.name === userName;
});

// 渲染订单列表
(function(){
	if(orderList.length > 0){
		document.querySelector(".user-order-con").style.display = "none";
		document.querySelector(".user-order-con2").style.display = "block";
		
		orderList.forEach(function(item, i){
			// 订单号 商品图片  名称  数量 收货人 地址 手机号 总价
			// 定义一个product  用来存放在订单中找到的商品信息  以便获取商品的图片 名称
			var product = [];
			item.detail.forEach(function(de){
				// console.log(de.pid);
				product.push(
				data.productList.filter(function(pro){
					return pro.pid === de.pid;
				})
				);
			});
			console.log(product);
			// 定义一个address 用来存放在订单中的收货人信息 姓名 手机号 地址
			var address = data.addressList.find(function(add){
				return add.id === item.addressId;
			});
			// console.log(address);
			// 拿到东西就好办了  插入数据  走起
			product.forEach(function(pro, j){
				// console.log(item.detail[j].price);
				pro.forEach(function(pro2, p){
					document.querySelector("ul.order-list-show").innerHTML += `
					<li data-id="${j}">
						<span class="order-id">${item.id}</span>
						<div class="order-list">
							<span class="avatar"><img src="${pro2.avatar}" style=" width: 100px; height: 100px;" /></span>
							<span class="name">${ pro2.name }</span>
						
							<span class="count">X ${item.detail[j].count}</span>
							<span class="price">￥${item.detail[j].price}</span>
						
							<div class="receive">
								<span>${address.receiveName}</span>
								<span>${address.receiveRegion} ${address.receiveAddress}<br /></span>
								<span>联系电话：${address.receivePhone}</span>
							</div>
						
							<span class="account">￥${item.detail[j].count * item.detail[j].price}</span>
							<span class="isPay">${ item.isPay }</span>
						</div>
					</li>
					`;
				});
			});
			// 我自己写的我自己都看不懂hhhhhhhhhhhhhhh		
		});
	}else{
		document.querySelector(".user-order-con2").style.display = "none";
		document.querySelector(".user-order-con").style.display = "block";
	}
})();
// 插入是否支付的图片 
(function(){
// 	// console.log(orderList.isPay);
	document.querySelectorAll("ul.order-list-show>li").forEach(function(li, i){

		if(li.querySelector("span.isPay").innerText === "true"){
			li.querySelector("span.isPay").innerHTML = `
				<div class="img">
					<img src="../img/pay/success_icon.png" style="width: 30px"/>
				</div>
			                                                                         
				<div class="order-info">
					<span>已支付</span>
					<button class="order-del">删除订单</button>
					<button class="order-pay" disabled style="cursor: no-drop;" >支付订单</button>
				</div>
			`;
		}else{
			li.querySelector("span.isPay").innerHTML = `
				<div class="img">
					<img src="../img/icon_checkbox_check.png" style="width: 30px"/>
				</div>
				<div class="order-info">
					<span style="color: #c8141d">未支付</span>
					<button class="order-pay">支付订单</button>
					<button class="order-del">删除订单</button>
				</div>
			`;
		}
	});

})();



// 用于顶部显示购物车商品数量
(function(){
	function cartNum(){
		if(typeof userName === 'undefined') 
			document.querySelector("ul.header-bar-right>li>a>span.total").innerText = "0";
		// 如果登录了
		// var data = JSON.parse(sessionStorage.getItem('data'));
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
		
})();

	
//退出登录
(function(){
	if(document.querySelector("span.name>em")){
		document.querySelector("span.name>em").onclick = function(){
			// console.log("logout");
			Message.confirm("是否退出登录？", function(){
				Cookies.remove("user");
				orderList = data.orderList;
				orderList = orderList.splice(0, orderList.length);
				sessionStorage.setItem("data", JSON.stringify(data));
				window.location.href = window.location.href;
			})
			
		};
	}
	
	
})();
	
// 当鼠标滑过支付完成的那个绿色图标后的显示及功能  测试
(function(){
	document.querySelectorAll("ul.order-list-show>li").forEach(function(li, i){
		li.onmouseover = function(){
			li.querySelector("div.order-list>span.isPay>div.order-info").style.right = "0";
		}
		li.onmouseleave = function(){
			li.querySelector("div.order-list>span.isPay>div.order-info").style.right = "-60px";
		}
	});
	
})();

// 可以删除订单列表中的订单   未完成！
(function(){
	// console.log(orderList);
	orderList = data.orderList;
	document.querySelectorAll("ul.order-list-show>li").forEach(function(li, i){
		
		var del = li.querySelector(".order-info>button.order-del");
		del.onclick = function(){
			var that = this;
			Message.confirm("是否删除订单？", function(){
				var li = that.parentNode.parentNode.parentNode.parentNode;
				li.classList.add("remove");
				var id = parseInt(li.querySelector("span.order-id").innerText);
				var lid = parseInt(li.dataset.id);
				// console.log(lid);
				var orderDel = JSON.parse(JSON.stringify(orderList.filter(function(item){
					return item.id === id;
				})));
				
				
				orderDel.forEach(function(item, k){
					// if(item.detail.length === 1){
					orderList.splice(id-1, 1);
					sessionStorage.setItem("data", JSON.stringify(data));
					// }else{
					// 	// 当一个订单中存在多个商品的时候
					// 	// li藏了个id 正好对应detail中的下标
					// 	// buggggggggggggggggggggggg!
					// 	item.detail.splice(lid, 1, "");
					// 	console.log(item.detail);
					// 	sessionStorage.setItem("data", JSON.stringify(data));
					// }
					// sessionStorage.setItem("data", JSON.stringify(data));
				});
				
				// 删除整个订单   不要删除一个订单中的某一个商品
				var ul = li.parentNode;
				ul.querySelectorAll("li").forEach(function(lli){
					if(parseInt(lli.querySelector("span.order-id").innerText) === id){
						lli.remove();
					}
				});
				// DOM结点的删除
				
				if(document.querySelectorAll("ul.order-list-show>li").length === 0){
					document.querySelector(".user-order-con").style.display = "block";
				}
			});
		};
	
	
		// 未支付的订单继续支付？
		var pay = li.querySelector(".order-info>button.order-pay");
		pay.onclick = function(){
			// 已支付的订单中的支付按钮被disabled掉了  就不用在进行判断ispay了
			// console.log("666");
			var li = this.parentNode.parentNode.parentNode.parentNode;
			var id = parseInt(li.querySelector("span.order-id").innerText);
			window.location.replace(`../pay/pay.html?id=${ id }`);
		};
		
	});
	
	
})();





