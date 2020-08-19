// 用户是否登录  显示用户的名字
var userName = Cookies.get('user');
if(typeof userName === 'undefined') {
	document.querySelector("ul.header-bar-right>li.userName>a").innerText = "请登录";
	document.querySelector("ul.header-bar-right>li.userName>a").setAttribute("href", "../RegistLogin/login.html");
}else{
	document.querySelector("ul.header-bar-right>li.userName>a").innerText = userName;
	document.querySelector("ul.header-bar-right>li.userName>a").setAttribute("href", "../profile/profile.html");
}


// 0. 确保用户当前是登录的，如果登录了，准备一-些全局变量
// 确保用户当前是登录的
var userName = Cookies.get('user');
if(typeof userName === 'undefined') {
	Cookies.set('backUrl', window.location.href);
	window.location.href = '../login/login.html';
}
// 根据用户名找出用户购物车的商品信息并展示
var data = JSON.parse(sessionStorage.getItem('data'));
var addressList = data.addressList;

// 1. 动态渲染当前登录用户的地址信息
(function() {
	// 筛选
	var userAddressList = addressList.filter(function(item) { return item.name === userName; })
	document.querySelector('.address-empty').classList.toggle('show', userAddressList.length === 0);
	document.querySelector('.address-list').classList.toggle('show', userAddressList.length !== 0);
	if(userAddressList.length > 0) {
		userAddressList.forEach(function(item) {
			document.querySelector('ul.address-list').innerHTML += `      
				<li>
					<a href='javascript:void(0)' data-id="${ item.id }" class='btn-default${ item.isDefault ? " default" : "" } '></a>  
					<h3>${ item.receiveName }</h3>		
					<p class="phoneNum">${ item.receivePhone }</p>
					<p class="address">${ item.receiveRegion } ${ item.receiveAddress }</p>
					<div class="btn-wrapper">
						<i class="iconfont icon-edit">
							<input type='button' data-id="${ item.id }" value='修改' class='btn-update' />
						</i>
						<i class="iconfont icon-delete">
							<input type='button' data-id="${ item.id }" value='删除' class='btn-remove' />
						</i>
					</div>
				</li>
			`;
		});
		// 追加一个添加框li
		document.querySelector('ul.address-list').innerHTML += `
			<li>
				<input type="button" name="" id="" value="+ 新增收货地址" class="btn-add" />
			</li>
		`;

	}
})();
// 2\绑定各种点击事件
(function() {
	// 开始新增
	// console.log(document.querySelector("ul.address-list").childNodes);
	if(document.querySelector("ul.address-list").style.display === "block"){
		document.querySelector("input.btn-add").onclick = function(){
			var form = document.forms["address"];
			form.editMode.value = "1";
			form.id.value = "";
			regionPicker.reset();
			form.reset();
		
		};
	}
	
	document.querySelector('ul.address-list').onclick = function(e) {
		
		// 如果点的是默认地址的按钮
		// e   源
		if(e.target.classList.contains('btn-default')) {
			if(e.target.classList.contains('default')) return; // 如果已经是默认地址,不响应
			addressList.forEach(function(item) {
				if(item.name === userName) {
					item.isDefault = item.id === parseInt(e.target.dataset.id);
				}
			});
			sessionStorage.setItem('data', JSON.stringify(data));
			this.querySelectorAll('.btn-default').forEach(function(item) { item.classList.remove("default"); })
			e.target.classList.add('default');
			Message.notice('默认地址设置成功..');   //显示用户设置成功
		}
		// 如果点的是删除按钮
		if(e.target.classList.contains('btn-remove')) {
			var that = this;
			Message.confirm("确定要删？", function(){
				var id = parseInt(e.target.dataset.id);
				var i  = addressList.findIndex(function(item){
					return item.id === id;
				})
				addressList.splice(i, 1);
				sessionStorage.setItem("data", JSON.stringify(data));
				that.removeChild(e.target.parentNode.parentNode.parentNode);
				if(that.querySelectorAll("li").length === 0){
					that.classList.remove("show");
					document.querySelector(".address-empty").classList.add("show");
				}
				Message.notice("删除成功");
			});
		}
		// 如果点的是修改按钮
		if(e.target.classList.contains('btn-update')) {
			// 开始修改
			var id = parseInt(e.target.dataset.id);
			var form = document.forms["address"];
			form.editMode.value = "0";
			form.id.value = id;
			var target = addressList.find(function(item) {
				return item.id === id;
			});
			form.receiveName.value = target.receiveName;
			form.receivePhone.value = target.receivePhone;
			// form.receiveRegion.value = target.receiveRegion;
			regionPicker.set(target.receiveRegion);
			form.receiveAddress.value = target.receiveAddress;
			
		}
		
	};
})();

// 3、保存按钮点击事件
(function(){
	document.querySelector("input.btn-save").onclick = function(){
		var form = document.forms["address"];
		var address = {
			name: userName,
			receiveName: form.receiveName.value,
			receivePhone: form.receivePhone.value,
			receiveRegion: regionPicker.get(),
			receiveAddress: form.receiveAddress.value
		};
		// 新增
		if(form.editMode.value === "1"){
			// 判断一下当前地址列表中是否有数据  如果空  默认的id为1 不空 接着往后放
			var id = addressList.length > 0 ? addressList[addressList.length - 1].id + 1 : 1;
			address.id = id;
			address.isDefault = false;
			// 直接追加到数组的后边
			addressList.push(address);
			
			sessionStorage.setItem("data", JSON.stringify(data));
			Message.alert("新增成功");
		}else{ //修改
			var id = parseInt(form.id.value);
			// 修改的话要知道是addressList中的哪一条记录
			var i = addressList.findIndex(function(item){
				return item.id === id;
			});
			address.id = id;
			address.isDefault = addressList[i].isDefault;
			addressList.splice(i, 1, address);
			
			sessionStorage.setItem("data", JSON.stringify(data));
			Message.alert("修改成功");
		}
		// setTimeout(function(){
		// 	window.location.href = window.location.href;
		// }, 2000);
		
		if(Cookies.get("isFromOrderConfirm")){
			Cookies.remove("isFromOrderConfirm");
			Cookies.set("addressId", address.id);
			window.location.replace("../order_confirm/order_confirm.html");
		}else{
			window.location.href = window.location.href;
		}
		
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




