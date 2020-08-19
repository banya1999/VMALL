var data = JSON.parse(sessionStorage.getItem("data"));
// 获取订单的信息
var orderList = data.orderList;
// console.log(orderList);
// 获取一下地址栏传过来的订单id
var oid = parseInt(window.location.search.slice(window.location.search.indexOf("=") + 1));
// console.log(oid);
// 将orderList中的总金额显示到收银台页面的对应位置
(function(){
	orderList.forEach(function(item){
		document.querySelector(".pay-account>.account>span.account-num").innerText = `￥${ item.account }`;
		document.querySelector(".pay-code>.img-con span.money>em").innerText = `￥${ item.account }`;
	});
})();

// console.log(window.location.search);

// 订单支付倒计时   先做个样子
// 时间到未支付  显示支付失败  返回订单确认？  
(function(){
	var time = 15 * 60;
	var timer = setInterval(function(){
		if(time === 0){
			clearInterval(timer);
			Message.confirm("支付失败！", function(){
				// setTimeout(function(){
					window.location.replace("../profile/profile.html");
				// }, 2000)
			});
			
		} 
		min = Math.floor(time / 60);
		sec = Math.floor(time % 60);
		time--;
		document.querySelector("p.time>span>em.min").innerText = min;
		document.querySelector("p.time>span>em.sec").innerText = sec;
	}, 1000);
	
	
	
})();
//选项卡切换。。。。
(function(){
	var ulTab = document.querySelector("ul.pay-tab");
	var liTab = ulTab.querySelectorAll("li");
	liTab.forEach(function(li, i){
		li.onclick = function(){
			if(this.classList.contains("active")) return;
			this.parentNode.querySelector("li.active").classList.remove("active");
			this.classList.add("active");
			
			document.querySelector("ul.con>li.active").classList.remove("active");
			document.querySelectorAll("ul.con>li")[i].classList.add("active");
			resetChoose(document.querySelectorAll("ul.con>li")[i]);
			
			
		};
	});
	// 复位其他选项卡选中的支付方式   默认选中第一个
	function resetChoose(liBig){
		var lis = liBig.querySelectorAll("ul>li");
		lis.forEach(function(li, i){
			if(i === 0)
				li.classList.add("choose");
			else
				li.classList.remove("choose");
		});
		if(lis.length > 4){
			document.querySelector(".pay-con").style.height = "220px";
		}else{
			document.querySelector(".pay-con").style.height = "130px";
		}
	}
	
	
})();

//点击支付方式出现的红色边框和对号
(function(){
	function lan(lis){
		lis.forEach(function(li){
			li.onclick = function(){
				if(this.classList.contains("choose")) return;
				this.parentNode.querySelector("li.choose").classList.remove("choose");
				this.classList.add("choose");
			};
		});
	}
	
	var li1 = document.querySelectorAll("ul.con>li>ul.pay-changyong>li");
	var li2 = document.querySelectorAll("ul.con>li>ul.pay-pingtai>li");
	var li3 = document.querySelectorAll("ul.con>li>ul.pay-fenqi>li");
	var li4 = document.querySelectorAll("ul.con>li>ul.pay-wangyin>li");
	lan(li1);
	lan(li2);
	lan(li3);
	lan(li4);
})();

// 确认支付的点击事件
(function(){
	document.querySelector("input.pay-confirm").onclick = function(){
		document.querySelector(".pay-code").style.display = "block";
	}
	
	document.querySelector("input.pay-complete").onclick = function(){
		document.querySelector(".pay-code").style.display = "none";
		Message.notice("支付成功,即将跳转到个人中心！")
		// orderList.forEach(function(item){
		// 	item.isPay = true;
		// });
		// 从地址栏中获取当前订单的id  进行下一步的判断 赋值
		//  var thisOrderList = orderList.filter(function(od){
		// 	return od.id === oid;
		// });
		// // console.log(thisOrderList);
		// thisOrderList.forEach(function(item){
		// 	item.isPay === true;
		// });
		orderList[oid-1].isPay = true;
		
		sessionStorage.setItem("data", JSON.stringify(data));
		setTimeout(function(){
			window.location.replace("../profile/profile.html");
		}, 3000);
		
	}
})();

// 点击X关闭支付窗口
(function(){
	document.querySelector(".close>i").onclick = function(){
		document.querySelector(".pay-code").style.display = "none";
	};
	
})();








