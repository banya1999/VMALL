// 用户是否登录  显示用户的名字
var userName = Cookies.get('user');
if(typeof userName === 'undefined') {
	document.querySelector("ul.header-bar-right>li.userName>a").innerText = "请登录";
}else{
	document.querySelector("ul.header-bar-right>li.userName>a").innerText = userName;
}

// 所有的网页中存在一个全局对象window
// indexOf返回下标
var aid = parseInt(window.location.search.slice(window.location.search.indexOf("=") + 1));
// console.log(cid);
var productList = 
JSON.parse(sessionStorage.getItem("data")).productList.filter(function(item){
	return item.aid === aid; 
});
// 函数如果没有显示的return一值 则默认return的是undefined 而undefined转化成bool值是假



productList.forEach(function(item) {
	var liEl = document.createElement("li");
	liEl.innerHTML = `
		<a href="#">
			<img src="${ item.avatar }" />
			<h4>${ item.name }</h4>
			<span class="price">￥${ item.price }</span>
			<span class="tips">${ item.tips }</span>
			<p class="info"><span>${ item.info }</span></p>
			<span class="conment-count">${ item.conmentcount }人评价</span>
			<span class="conment-rate">${ item.conmentrate }%好评</span>
		</a>
	`;
	document.querySelector("ul.product-list-ul").appendChild(liEl);
});








