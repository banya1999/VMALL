// 获取数据
var data = JSON.parse(sessionStorage.getItem('data'));
var userList = data.userList;

(function(){
	var form = document.forms["form-regist"];
	document.querySelector("input.btn-regist").onclick = function(){
		var name = document.querySelector("input.name").value;
		var phone = document.querySelector("input.phone").value;
		var pwd1 = document.querySelector("input.pwd1").value;
		var pwd2 = document.querySelector("input.pwd2").value;
		
		if(name === ""){
			Message.notice("用户名不能为空");
			return;
		}
		if(phone === ""){
			Message.notice("手机号不能为空");
			return;
		}	
		if(!(/^1[3456789]\d{9}$/.test(phone))){ 
			Message.notice("手机号码有误，请重填");  
		    return; 
		 } 
		if(pwd1 === "" || pwd2 === ""){
			Message.notice("密码不能为空");
			return;
		}
		if(pwd1 !== pwd2){
			Message.confirm("密码不一致,请重新输入",function(){
				// form.reset();
				document.querySelector("input.pwd1").value = "";
				document.querySelector("input.pwd2").value = "";
			});
		}
		
		// 新建一个用户对象
		var user = { 
				name: name.trim(),
				pwd: pwd1.trim(),
				phone: phone.trim()
		};
		
		var a = userList.find(function(item){
			return user.name === item.name;
		});
		if(a !== undefined){
			Message.notice("用户名存在");
			return;
		}
		console.log(a);
		
		var b = userList.some(function(item){
			return user.phone === item.phone;
		});
		if(b){
			Message.notice("手机号已注册");
			return;
		}
		console.log(b);
		
		userList.push(user);
		sessionStorage.setItem("data", JSON.stringify(data));
		Message.confirm("注册成功", function(){
			window.location.href = "../RegistLogin/login.html";
		});

			
	};
		
	
	
	
})();

// 测试 显示明文密码
(function(){
	var icon = document.querySelectorAll("i.i-pwd");
	icon.forEach(function(i){
		i.onmouseover = function(){
			this.parentNode.querySelector("input[type=password]").type = "text";
			this.classList.remove("icon-eyeClose");
			this.classList.add("icon-eyeOpen");
		};
		i.onmouseleave = function(){
			this.parentNode.querySelector("input[type=text]").type = "password";
			this.classList.add("icon-eyeClose");
			this.classList.remove("icon-eyeOpen");
		};
		
	});
	
	
})();


















