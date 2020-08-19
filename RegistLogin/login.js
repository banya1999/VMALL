// document.querySelector('input.btn-login').onclick = function() {
// 	Cookies.set('user', 'user1');
// 	var backUrl = Cookies.get('backUrl');
// 	Cookies.remove('backUrl');
// 	window.location.href = backUrl || '../index/index.html';
// };



// 随机验证码的生成
(function(){
	var codes = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", 
	"O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1",
	 "2", "3", "4", "5", "6", "7", "8", "9", "0"];
	document.querySelector("span.code").onclick = function(){
		var codeStr = "";
		for(var i = 1; i < 5; i++){
			codeStr += codes[Math.floor(Math.random() * codes.length)];
		}
		this.innerText = codeStr;
		
	};
})();

// 登录方式选项卡的切换
(function(){
	var form1 = document.querySelector("form.userName-login");
	var form2 = document.querySelector("form.phone-login");
	document.querySelector("form.userName-login>.login-text>a").onclick = function(){
		form1.classList.remove("active");
		form2.classList.add("active");
	};
	document.querySelector("form.phone-login>.login-text>a").onclick = function(){
		form2.classList.remove("active");
		form1.classList.add("active");
	};
	
})();
// 用户名密码登录
(function(){
	document.querySelector("form.userName-login input.btn-login").onclick = function(){
		var name = document.querySelector("input.name").value.trim();
		var pwd = document.querySelector("input.pwd").value.trim();
		var userList = JSON.parse(sessionStorage.getItem("data")).userList;
		
		if(userList.some(function(item){ return item.name === name && item.pwd === pwd;})){
			Cookies.set('user', name);
			var backUrl = Cookies.get('backUrl');
			Cookies.remove('backUrl');
			window.location.replace(backUrl || '../index/index.html') ;
		}
		else{
			Message.notice("用户名或密码错误");
		}
	}
})();

// // 手机验证码登录
(function(){
	document.querySelector("form.phone-login input.btn-login").onclick = function(){
		console.log("222");
		var phone = document.querySelector("input.phone").value.trim();
		var code2 = document.querySelector("input.code-input").value.trim();
		
		if(code2 === "获取验证码" || code2.toUpperCase() !== document.querySelector("span.code").innerText){
			Message.notice("验证码错误");
			return;
		}
		
		var userList = JSON.parse(sessionStorage.getItem("data")).userList;
		if(userList.some(function(item){ return item.phone === phone;})){
			Cookies.set('user', userList.find(function(item){ return item.phone === phone; }).name);
			var backUrl = Cookies.get('backUrl');
			Cookies.remove('backUrl');
			window.location.replace(backUrl || '../index/index.html') ;
		}
		else{
			Message.notice("手机号输入错误");
		}
	};
})();

























