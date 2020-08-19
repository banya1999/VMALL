// 用户是否登录  显示用户的名字
var userName = Cookies.get('user');
if(typeof userName === 'undefined') {
	document.querySelector("ul.header-bar-right>li.userName>a").innerText = "请登录";
	document.querySelector("ul.header-bar-right>li.userName>a").setAttribute("href", "../RegistLogin/login.html");
}else{
	document.querySelector("ul.header-bar-right>li.userName>a").innerText = userName;
	document.querySelector("ul.header-bar-right>li.userName>a").setAttribute("href", "../profile/profile.html");
}





var data = JSON.parse(sessionStorage.getItem("data"));
var cartList = data.cartList;
var cartIds = Cookies.get('settle');
if(!cartIds) window.location.replace("../index/index.html");
//将id字符串分割,每个购物车记录的id放进cookies时是用逗号分割的
cartIds = cartIds.split(",");
//["1","5"]变成[1, 5],数组map函数时用规定的规则映射
cartIds = cartIds.map(function(item) { return parseInt(item); });
var userName = Cookies.get('user');

//默认地址的地址id，还没有选默认地址
var addressId = 0;
if(Cookies.get('addressId')) {
	addressId = parseInt(Cookies.get("addressId"));
	Cookies.remove("addressId");
}
// 收货地址
(function() {
	var userAddressList = data.addressList.filter(function(item) { return item.name === userName;});
	userAddressList.forEach(function(item) {
		document.querySelector('ul.address-list').innerHTML += `
			<li data-id="${ item.id }" 
			class="${ (addressId !== 0 && item.id === addressId) || (addressId === 0 && item.isDefault)  ? "select": "" }">
				<h3>${ item.receiveName }</h3>
				<p class="phone">${ item.receivePhone }</p>
				<p class="address-text">${ item.receiveRegion } ${ item.receiveAddress }</p>
				<span><i class="iconfont icon-duihoa"></i></span>
			</li>
		`;
		if(addressId === 0 && item.isDefault) addressId = item.id;
	});
	document.querySelector("ul.address-list").innerHTML += `
		<li class="add-address">
			<a href="javascript:void(0)" class="btn-gotoAddress">+新增收货地址</a>
		</li>
	`;
	document.querySelectorAll('ul.address-list>li').forEach(function(li) {
		li.onclick = function() {
			if(this.classList.contains('select')) return;
			this.parentNode.querySelectorAll('li').forEach(function(item) { item.classList.remove('select'); });
			this.classList.add('select');
			addressId = parseInt(this.dataset.id);
		};
	});
	document.querySelector('a.btn-gotoAddress').onclick = function() {
		// 字符串为空的时候转化为布尔类型为假
		Cookies.set("isFromOrderConfirm", " ");
		window.location.href = "../address/address.html";
	};
})();

// 商品清单
var account = 0;
var detail = [];
(function(){
	document.querySelector("ul.product-list").innerHTML += `
		<li class="order-title">
			<span>商品图片</span>
			<span>商品名称</span>
			<span>数量</span>
			<span>单价</span>
			<span>小计</span>
		</li>
	`;
	cartIds.forEach(function(cartId){
		//根据购物记录ID找到购物记录
		var cart = cartList.find(function(item){
			return item.id === cartId;
		});
		//根据购物记录的商品id找到商品
		var product = data.productList.find(function(item){return item.pid === cart.pid;});
		detail.push({pid: cart.pid, count: cart.count, price: product.price});
		account += cart.count * product.price;
		
		document.querySelector("ul.product-list").innerHTML += `
			<li>
				<span><img src="${ product.avatar }" /></span>
				<span>${ product.name }</span>
				<span class="count">X ${ cart.count }</span>
				<span class="price">￥${ product.price }</span>
				<span class="priceAll">￥${ product.price * cart.count} </span>
			</li>
		`;
	});
	
	document.querySelector("span.account").innerText = `￥${ account }`;
})();

// 生成订单
(function(){
	document.querySelector("input.btn-confirm").onclick = function(){
		if(addressId === 0){
			alert("请选择送货地址！");
			return;
		}
		
		// 从购物车中删除对应的购物记录
		cartIds.forEach(function(cartId){
			var i = cartList.findIndex(function(item){
				return item.id === cartId;
			});
			cartList.splice(i, 1);
		});
		//构造一个新的订单push到orderList中
		var id = data.orderList.length > 0 ? data.orderList[data.orderList.length - 1].id + 1 : 1;
		data.orderList.push({
			id: id,
			name: userName,
			addressId: addressId,
			detail: detail,
			account: account,
			data: new Date().getTime(),
			isPay: false
		});
		sessionStorage.setItem("data", JSON.stringify(data));
		Cookies.remove("settle");   //清理cookie中无用的数据
		window.location.replace(`../pay/pay.html?id=${ id }`);
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























