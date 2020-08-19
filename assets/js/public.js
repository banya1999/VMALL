var Message = {
	alert: function(msg){
		if(document.querySelector(".message-alert")) return;
		var div = document.createElement("div");
		div.className = "message-alert";
		div.style.position = "fixed";
		div.style.left = "0";
		div.style.top = "0";
		div.style.width = "100%";
		div.style.height = "100%";
		div.style.backgroundColor = "rgba(0,0,0,0.2)";
		div.style.zIndex = "999";
		div.innerHTML += `
			<div style="
				min-width: 300px;
				max-width: 500px;
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
				background-color: #fff;
				border-radius: 10px;
				box-shadow: 0 10px 10px 0 #7a7a7a;
				overflow: hidden;
			">
				
				<h2 style="
					background-color: #ebebeb;
					margin: 0;
					padding: 10px 20px;
					color: #000000;
					font-weight: 400;
					letter-spacing: 2px;
				">提示</h2>
				<p style="
					color: #999;
					padding: 20px 40px;
					font-size: 16px;
				">${ msg }</p>
				<div style="
					text-align: center;
					padding: 15px;
				">
					<input type="button" value="确定" class="btn-ok" style="
						border: none;
						outline: none;
						cursor: pointer;
						background-color: #fff;
						padding: 5px 20px;
						font-size: 18px;
					" onmouseover="this.style.color='red'"
					  onmouseleave="this.style.color='#333'"
					 />
				</div>
			</div>
		`;
		document.body.appendChild(div);
		div.querySelector("input.btn-ok").onclick = function(){
			document.body.removeChild(div);
		};
	},
	
	confirm: function(msg, callback){
		if(document.querySelector(".message-confirm")) return;
		var div = document.createElement("div");
		div.className = "message-alert";
		div.style.position = "fixed";
		div.style.left = "0";
		div.style.top = "0";
		div.style.width = "100%";
		div.style.height = "100%";
		div.style.backgroundColor = "rgba(0,0,0,0.2)";
		div.style.zIndex = "9999999";
		div.innerHTML += `
			<div style="
				min-width: 300px;
				max-width: 500px;
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
				background-color: #fff;
				border-radius: 10px;
				box-shadow: 0 10px 10px 0 #7a7a7a;
				overflow: hidden;
			">
				
				<h2 style="
					background-color: #ebebeb;
					margin: 0;
					padding: 10px 20px;
					color: #000000;
					font-weight: 400;
					letter-spacing: 2px;
				">提示</h2>
				<p style="
					color: #999;
					padding: 20px 40px;
					font-size: 16px;
					
				">${ msg }</p>
				<div style="
					text-align: center;
				">
					<input type="button" value="确定" class="btn-ok" style="
						border: none;
						outline: none;
						cursor: pointer;
						background-color: #fff;
						padding: 15px 20px;
						font-size: 18px;
					" onmouseover="this.style.color='red'"
					  onmouseleave="this.style.color='#333'"
					 />
					<input type="button" value="取消" class="btn-cancel" style="
						border: none;
						outline: none;
						cursor: pointer;
						background-color: #fff; 
						padding: 5px 20px;
						font-size: 18px;
					" onmouseover="this.style.color='red'"
					  onmouseleave="this.style.color='#333'"
					/>
				</div>
			</div>
		`;
		document.body.appendChild(div);
		div.querySelector("input.btn-ok").onclick = function(){
			document.body.removeChild(div);
			if(typeof callback === "function") callback();
		};
		div.querySelector("input.btn-cancel").onclick = function(){
			document.body.removeChild(div);
		};
		// 设置样式
		// document.querySelector(".message-confirm button").onmouseover = function(){
		// 	color: red;
		// };
	},
	
	
	notice: function(msg){
		var div = document.createElement("div");
		div.className = "message-notice";
		div.innerText = msg;
		div.style.position = "fixed";
		div.style.left = "50%";
		div.style.top = "50%";
		div.style.transform = "translate(-50%, -50%)";
		div.style.padding = "10px 20px";
		div.style.backgroundColor = "#646464";
		div.style.color = "#fff";
		document.body.appendChild(div);
		
		setTimeout(function(){
			document.body.removeChild(document.querySelector(".message-notice"));
		}, 2000);
		
	}
};