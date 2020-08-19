// 用户是否登录  显示用户的名字
var userName = Cookies.get('user');
if(typeof userName === 'undefined') {
	document.querySelector("ul.header-bar-right>li.userName>a").innerText = "请登录";
	document.querySelector("ul.header-bar-right>li.userName>a").setAttribute("href", "../RegistLogin/login.html");
}else{
	document.querySelector("ul.header-bar-right>li.userName>a").innerText = userName;
	document.querySelector("ul.header-bar-right>li.userName>a").setAttribute("href", "../profile/profile.html");
}


// 0、 确保用户当前是登录的， 入股登录了，准备一些全局变量
var userName = Cookies.get('user');
if (typeof userName === 'undefined') {
	Cookies.set('backUrl', window.location.href);
	window.location.href = '../RegistLogin/login.html';
}
// 根据用户名找出用户购物车的商品信息并展示
var data = JSON.parse(sessionStorage.getItem('data'));
var productList = data.productList;
var cartList = data.cartList;
// console.log(productList);
// console.log(cartList);
//g公共的函数： 更新当前购物车的总金额和总数量
function updateTotalAndAccount() {
	var trs = document.querySelectorAll("table.cart-list>tbody>tr");
	var total = 0,
		account = 0;
	var accountAll = [];
	trs.forEach(function(tr, i) {
		// tr.i = i;
		if (tr.dataset.checked === "1") {
			total += parseInt(tr.dataset.count);
			account += parseInt(tr.dataset.price) * parseInt(tr.dataset.count);
		}
		accountAll.push(parseInt(tr.dataset.price) * parseInt(tr.dataset.count)) ;
		// console.log(i);
		(function(i) {
			document.querySelectorAll("span.priceTotal>em")[i].innerText = accountAll[i];
		})(i);
	});
	// console.log(total);
	document.querySelector("span.account").innerText = account;
	document.querySelector("button.settle>span.total").innerText = total;
	document.querySelector("ul.header-bar-right>li>a>span.total").innerText = total;
}
// 公共的函数 更新全选复选框
function updateCheckboxAll(){
	var all = document.querySelector("i.checkbox.all");
	// 找出所有未选中的记录
	var uncheckedTrs = document.querySelectorAll("tr[data-checked='0']");
	if(uncheckedTrs.length > 0){
		all.className = all.className.replace(" checked", "");
	}else{
		all.className += " checked";
	}
}

// 1、展示用户购物车中的商品信息
(function() {
	var userCartList = cartList.filter(function(item) {
		return item.name === userName;
	});
	// console.log(userCartList);
	if (userCartList.length > 0)
		document.querySelector('.cart-list-wrapper').className += ' show';
	else
		document.querySelector('.cart-empty').className += ' show';
	// 展示userCartList

	userCartList.forEach(function(item) {
		var product = productList.find(function(item2) {
			return item2.pid === item.pid;
		});
		
		document.querySelector("table.cart-list>tbody").innerHTML +=
			`
			<tr data-id="${item.id}" data-checked="1" data-price="${product.price}" data-count="${item.count}">
				<td><i class="checkbox checked"></i></td>
				<td>
					<img src="../images/${product.avatar}" />
				</td>
				<td>
					<span class="name">${product.name}<br /> ${product.title}</span>
				</td>
				<td>
					<span class="pice">￥${product.price}元</span>
				</td>
				<td>
					<span class="priceTotal">￥<em></em>元</span>
				</td>
				<td>
					<input type="button" value="-" class="btn-decrease" ${ item.count === 1 ? "disabled" : ""} />
					<span class="count">${item.count}</span>
					<input type="button" value="+" class="btn-increase" ${ item.count === 5 ? "disabled" : ""} />
				</td>
				<td>
					<input type="button" value="删除" class="btn-remove"  />
				</td>
			</tr>
		`;
	});
	updateTotalAndAccount();
})();

// 2、删除按钮绑定点击事件实现购物记录删除
(function() {
	var btns = document.querySelectorAll("input.btn-remove");
	btns.forEach(function(btn){
		btn.onclick = function(){
			// if(!confirm("真删？")) return;
			var that = this;
			Message.confirm("真的要删除吗~", function(){
				var tr = that.parentNode.parentNode;
				var id = parseInt(tr.dataset.id);
				tr.parentNode.removeChild(tr);
				// 从数据中删除对应的购物记录 更新到sessionStorage中
				var i = cartList.findIndex(function(item){
					return item.id === id;
				});
				cartList .splice(i ,1);
				sessionStorage.setItem("data", JSON.stringify(data));
				// 如果当前删除的是勾选的记录  需要更新总金额和总数量
				if(tr.dataset.checked === "1")
					updateTotalAndAccount();
				updateCheckboxAll();
				
				var userCartList = cartList.filter(function(item) {
					return item.name === userName;
				});
				if (userCartList.length <= 0){
					document.querySelector('.cart-list-wrapper').classList.remove('show');
					document.querySelector('.cart-empty').classList.add("show");
				}
			});
			
				
		};
	});
})();

// 3、数量加减功能实现
(function(){
	var decreaseBtns = document.querySelectorAll("input.btn-decrease");
	var increaseBtns = document.querySelectorAll("input.btn-increase");
	// 减
	decreaseBtns.forEach(function(item){
		item.onclick = function(){
			// 准备工作
			var tr = this.parentNode.parentNode;
			var count = parseInt(tr.dataset.count);
			var id = parseInt(tr.dataset.id)
			count--;
			// dom元素的更新
			this.parentNode.querySelector("input.btn-increase").disabled = false;
			if(count === 1) this.disabled = true;
			this.parentNode.querySelector("span.count").innerText = count;
			tr.dataset.count = count;
			if(tr.dataset.checked === "1") 
				updateTotalAndAccount();
			// 数据的更新
			var cart = cartList.find(function(item2){
				return item2.id === id;
			});
			cart.count = count;
			sessionStorage.setItem("data", JSON.stringify(data));
		}
	});
	// 加
	increaseBtns.forEach(function(item){
		item.onclick = function(){
			// 准备工作
			var tr = this.parentNode.parentNode;
			var count = parseInt(tr.dataset.count);
			var id = parseInt(tr.dataset.id)
			count++;
			// dom元素的更新
			this.parentNode.querySelector("input.btn-decrease").disabled = false;
			if(count === 5) this.disabled = true;
			this.parentNode.querySelector("span.count").innerText = count;
			tr.dataset.count = count;
			if(tr.dataset.checked === "1") 
				updateTotalAndAccount();
			// 数据的更新
			var cart = cartList.find(function(item2){
				return item2.id === id;
			});
			cart.count = count;
			sessionStorage.setItem("data", JSON.stringify(data));
		}
	});
	
	
})();

// 4、商品复选框的联动
(function(){
	document.querySelectorAll("tbody i.checkbox").forEach(function(item){
		item.onclick = function(){
			this.parentNode.parentNode.dataset.checked = this.classList.contains("checked") ? "0" :　"1";
			this.classList.toggle("checked");
			
			// if(this.className.indexOf("checked") === -1){
			// 	this.className += " checked";
			// 	this.parentNode.parentNode.dataset.checked = "1";
			// }else{
			// 	this.className = this.className.replace(" checked", "");
			// 	this.parentNode.parentNode.dataset.checked = "0";
			// }
			updateTotalAndAccount();
			updateCheckboxAll();
		}
		
	});
	
	document.querySelector("i.checkbox.all").onclick = function(){
		var checked = this.classList.contains("checked");
		this.classList.toggle("checked");
		document.querySelectorAll("tbody>tr").forEach(function(item){
			item.dataset.checked = checked ? "0" : "1";
			item.querySelector("i.checkbox").classList.toggle("checked", !checked);
		});
		
		
		
		//var checked = this.className.indexOf("checked") !== -1;
		// if(checked){ //从选中变成未选中
		// 	this.className = this.className.replace("checked", "");
		// 	document.querySelectorAll("tbody>tr").forEach(function(item){
		// 		item.dataset.checked = "0";
		// 		var i = item.querySelector("i.checkbox");
		// 		i.className = i.className.replace("checked", "");
		// 	});
		// }else{ //从未选中变成选中
		// 	this.className += " checked";
		// 	document.querySelectorAll("tbody>tr").forEach(function(item){
		// 		item.dataset.checked = "1";
		// 		var i =item.querySelector("i.checkbox");
		// 		if(i.className.indexOf("checked") === -1)
		// 			i.className += " checked";
		// 	});
		// }
		updateTotalAndAccount();
	};
	
})();

// 结算按钮
(function(){
	document.querySelector("button.settle").onclick = function(){
		var checkedTrs = document.querySelectorAll("tbody>tr[data-checked= '1'] ");
		if(checkedTrs.length === 0){
			Message.notice("没有商品");
			return;
		}
		Message.confirm("确认结算？", function(){
			var settleIds = "";
			checkedTrs.forEach(function(tr){
				settleIds += tr.dataset.id + ",";
			});
			settleIds = settleIds.slice(0, -1);
			Cookies.set("settle", settleIds);
			window.location.href = "../order_confirm/order_confirm.html";
		});
	};
	
})();










