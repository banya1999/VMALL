(function(){
	
	var data = JSON.parse(sessionStorage.getItem("data"))
	var cartList = data.cartList;
	var productList = data.productList;
	// 顶部购物车信息的展示
	// console.log(cartList);
	var cartListShow = cartList.filter(function(cart){
		return cart.name === userName;
	});
	
	
	// console.log(cartListShow);
	// console.log(cartListShow.length);
	if(cartListShow.length === 0){
			document.querySelector("ul.head-cart").innerHTML += `
				<li style="font-size: 14px; height: 50px; border: none;">
					<span style="font-size: 16px; color: #cccccc;"><i class="iconfont icon-shopCar" 
					style="font-size: 20px;"></i>
					你的购物车还是空的哦~</span>
				</li>
			`;
			// document.querySelector("ul.head-cart").style.display = "block";
		}
	cartListShow.forEach(function(item, i){
		
		
		var product = productList.filter(function(pro){
			return pro.pid === item.pid;
		});
		console.log(product);
		product.forEach(function(item2){
			document.querySelector("ul.head-cart").innerHTML += `
				<li>
					<img src="${ item2.avatar }" />
					<span class="name">${item2.name}</span>
					<span class="count">X ${item.count}</span>
				</li>
			`;
			// document.querySelector("ul.head-cart").style.display = "block";
		});
		
	});
})();