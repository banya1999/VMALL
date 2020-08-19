var data = {
	categoryList: [
		// 主要菜单
		{ id: 1, name: "手机", fid: 0 },
		{ id: 2, name: "笔记本", fid: 0 },
		{ id: 3, name: "平板", fid: 0 },
		{ id: 4, name: "智能穿戴&VR", fid: 0 },
		{ id: 5, name: "智能家居", fid: 0 },
		{ id: 6, name: "智慧屏", fid: 0 },
		{ id: 7, name: "耳机音箱", fid: 0 },
		{ id: 8, name: "配件", fid: 0 },
		{ id: 9, name: "生态产品", fid: 0 },
		{ id: 10, name: "增值服务", fid: 0 },
		// 手机二级菜单
		{ id: 11, name: "HUAWEI P系列", avatar: "../img/index/menuphone/phone01.png", fid: 1 },
		{ id: 12, name: "HUAWEI Mate系列", avatar: "../img/index/menuphone/phone02.png", fid: 1 },
		{ id: 13, name: "HUAWEI nova系列", avatar: "../img/index/menuphone/phone03.png", fid: 1 },
		{ id: 14, name: "华为畅享系列", avatar: "../img/index/menuphone/phone04.png", fid: 1 },
		{ id: 15, name: "HUAWEI 麦芒系列", avatar: "../img/index/menuphone/phone05.png", fid: 1 },
		{ id: 16, name: "荣耀 V系列", avatar: "../img/index/menuphone/phone06.png", fid: 1 },
		{ id: 17, name: "荣耀 HONOR系列", avatar: "../img/index/menuphone/phone07.png", fid: 1 },
		{ id: 18, name: "荣耀 X系列", avatar: "../img/index/menuphone/phone08.png", fid: 1 },
		{ id: 19, name: "荣耀 Play系列", avatar: "../img/index/menuphone/phone09.png", fid: 1 },
		//笔记本
		{ id: 20, name: "华为MateBook X系列", avatar: "../img/index/book/book1.png", fid: 2 },
		{ id: 21, name: "华为MateBook系列", avatar: "../img/index/book/book2.png", fid: 2 },
		{ id: 22, name: "华为MateBook D系列", avatar: "../img/index/book/book3.png", fid: 2 },
		{ id: 23, name: "荣耀MagicBook系列", avatar: "../img/index/book/book4.png", fid: 2 },
		{ id: 24, name: "荣耀MagicBook Pro系列", avatar: "../img/index/book/book5.png", fid: 2 },
		//平板
		{ id: 25, name: "华为MatePad 系列", avatar: "../img/index/pad/pad1.png", fid: 3 },
		{ id: 26, name: "荣耀 V系列", avatar: "../img/index/pad/pad2.jpg", fid: 3 },
		{ id: 27, name: "华为畅享系列", avatar: "../img/index/pad/pad3.png", fid: 3 },
		{ id: 28, name: "荣耀数字系列", avatar: "../img/index/pad/pad4.png", fid: 3 },
		{ id: 29, name: "荣耀畅玩系列", avatar: "../img/index/pad/pad5.png", fid: 3 },
		// vr
		{ id: 30, name: "智能手表", avatar: "../img/index/VR/VR.png", fid: 4 },
		{ id: 31, name: "儿童手表", avatar: "../img/index/VR/VR2.png", fid: 4 },
		{ id: 32, name: "智能手环", avatar: "../img/index/VR/VR3.png", fid: 4 },
		{ id: 33, name: "VR", avatar: "../img/index/VR/VR4.png", fid: 4 },
		{ id: 34, name: "智能健康配件", avatar: "../img/index/VR/VR5.png", fid: 4 },
		//智能家具
		{ id: 35, name: "智能路由", avatar: "../img/index/AIhouse/router1.png", fid: 5 },
		{ id: 36, name: "移动路由", avatar: "../img/index/AIhouse/router2.png", fid: 5 },
		{ id: 37, name: "智能音箱", avatar: "../img/index/AIhouse/router3.png", fid: 5 },
		{ id: 38, name: "智能存储", avatar: "../img/index/AIhouse/router4.png", fid: 5 },
		{ id: 39, name: "Hlink生态", avatar: "../img/index/AIhouse/router5.png", fid: 5 },
		//ping
		{ id: 40, name: "华为智慧屏", avatar: "../img/index/ping/ping1.png", fid: 6 },
		{ id: 41, name: "荣耀智慧屏态", avatar: "../img/index/ping/ping2.png", fid: 6 },
		//音响
		{ id: 42, name: "真无线耳机", avatar: "../img/index/ear/ear1.jpg", fid: 7 },
		{ id: 43, name: "有线耳机", avatar: "../img/index/ear/ear2.jpg", fid: 7 },
		{ id: 44, name: "蓝牙耳机", avatar: "../img/index/ear/ear3.jpg", fid: 7 },
		{ id: 45, name: "蓝牙音箱", avatar: "../img/index/ear/ear4.png", fid: 7 },
		{ id: 46, name: "智能眼睛", avatar: "../img/index/ear/ear5.png", fid: 7 },
		{ id: 47, name: "智能音箱", avatar: "../img/index/ear/ear6.png", fid: 7 },
		//配件
		{ id: 48, name: "充电线/线材", avatar: "../img/index/peijian/p1.png", fid: 8 },
		{ id: 49, name: "移动电源", avatar: "../img/index/peijian/p2.jpg", fid: 8 },
		{ id: 50, name: "自拍杆/支架", avatar: "../img/index/peijian/p3.png", fid: 8 },
		{ id: 51, name: "摄像机/镜头", avatar: "../img/index/peijian/p4.png", fid: 8 },
		{ id: 52, name: "智能硬件", avatar: "../img/index/peijian/p5.png", fid: 8 },
		{ id: 53, name: "生活周边", avatar: "../img/index/peijian/p6.png", fid: 8 },
		{ id: 54, name: "保护壳", avatar: "../img/index/peijian/p7.png", fid: 8 },
		{ id: 55, name: "保护套", avatar: "../img/index/peijian/p8.png", fid: 8 },
		{ id: 56, name: "贴膜", avatar: "../img/index/peijian/p9.png", fid: 8 },
		{ id: 57, name: "个人电脑配件", avatar: "../img/index/peijian/p10.png", fid: 8 },
		{ id: 58, name: "平板配件", avatar: "../img/index/peijian/p11.png", fid: 8 },
		{ id: 59, name: "智慧屏配件", avatar: "../img/index/peijian/p12.png", fid: 8 },
		{ id: 60, name: "穿戴配件", avatar: "../img/index/peijian/p13.png", fid: 8 },
		//生态产品
		{ id: 61, name: "智能灯光", avatar: "../img/index/env/s1.png", fid: 9 },
		{ id: 62, name: "生活电器", avatar: "../img/index/env/s2.png", fid: 9 },
		{ id: 63, name: "数码周边", avatar: "../img/index/env/s3.png", fid: 9 },
		{ id: 64, name: "环境卫士", avatar: "../img/index/env/s4.png", fid: 9 },
		{ id: 65, name: "安防门锁", avatar: "../img/index/env/s5.png", fid: 9 },
		{ id: 66, name: "健康保健", avatar: "../img/index/env/s6.png", fid: 9 },
		{ id: 67, name: "运动健身", avatar: "../img/index/env/s7.png", fid: 9 },
		{ id: 68, name: "户外出行", avatar: "../img/index/env/s8.png", fid: 9 },
		{ id: 69, name: "厨电卫浴", avatar: "../img/index/env/s9.png", fid: 9 },
		{ id: 70, name: "影音娱乐", avatar: "../img/index/env/s10.png", fid: 9 },
		{ id: 71, name: "个护美妆", avatar: "../img/index/env/s11.png", fid: 9 },
		
		{ id: 72, name: "华为视频卡", avatar: "../img/index/other/o1.png", fid: 10 },
		{ id: 73, name: "花币卡", avatar: "../img/index/other/o2.png", fid: 10 },
		{ id: 74, name: "华为音乐卡", avatar: "../img/index/other/o3.png", fid: 10 },
		{ id: 75, name: "华为云空间", avatar: "../img/index/other/o5.png", fid: 10 },
		{ id: 76, name: "电池更换服务", avatar: "../img/index/other/o4.png", fid: 10 },
		{ id: 77, name: "服务器", avatar: "../img/index/other/o6.png", fid: 10 },
		{ id: 78, name: "AI 计算平台", avatar: "../img/index/other/o7.png", fid: 10 },
		
		// 凑数添加的
		{ id: 79, name: "华为视频卡", avatar: "../img/index/other/o1.png", fid: 10 },
		{ id: 80, name: "花币卡", avatar: "../img/index/other/o2.png", fid: 10 },
		{ id: 81, name: "华为音乐卡", avatar: "../img/index/other/o3.png", fid: 10 },
		{ id: 82, name: "华为云空间", avatar: "../img/index/other/o5.png", fid: 10 },
		{ id: 83, name: "电池更换服务", avatar: "../img/index/other/o4.png", fid: 10 },
		{ id: 84, name: "服务器", avatar: "../img/index/other/o6.png", fid: 10 },
		{ id: 85, name: "AI 计算平台", avatar: "../img/index/other/o7.png", fid: 10 },
		{ id: 86, name: "华为视频卡", avatar: "../img/index/other/o1.png", fid: 10 },
		{ id: 87, name: "花币卡", avatar: "../img/index/other/o2.png", fid: 10 },
		{ id: 88, name: "华为音乐卡", avatar: "../img/index/other/o3.png", fid: 10 },
		{ id: 89, name: "华为云空间", avatar: "../img/index/other/o5.png", fid: 10 },
		{ id: 90, name: "电池更换服务", avatar: "../img/index/other/o4.png", fid: 10 }
	],
	
	bannerList: [
		{ id: 6, avatar: "../img/index/banner/banner06.jpg" },
		{ id: 1, avatar: "../img/index/banner/banner01.jpg" },
		{ id: 2, avatar: "../img/index/banner/banner02.jpg" },
		{ id: 3, avatar: "../img/index/banner/banner03.jpg" },
		{ id: 4, avatar: "../img/index/banner/banner04.jpg" },
		{ id: 5, avatar: "../img/index/banner/banner05.jpg" },
		{ id: 6, avatar: "../img/index/banner/banner06.jpg" },
		{ id: 1, avatar: "../img/index/banner/banner01.jpg" }
	],	
		
	advList: [
		{ id: 6, avatar: "../img/index/aadv/a6.jpg" },
		{ id: 1, avatar: "../img/index/aadv/a1.png" },
		{ id: 2, avatar: "../img/index/aadv/a2.jpg" },
		{ id: 3, avatar: "../img/index/aadv/a3.jpg" },
		{ id: 4, avatar: "../img/index/aadv/a4.png" },
		{ id: 5, avatar: "../img/index/aadv/a5.jpg" },
		{ id: 6, avatar: "../img/index/aadv/a6.jpg" },
		{ id: 1, avatar: "../img/index/aadv/a1.png" }
	],
	
	
	
	// 商品列表页=====
	productList: [
		//华为P系列
		{ pid: 1, cid: 11, name: "HUAWEI P40 Pro+", nav: "HUAWEI P系列", title: "HUAWEI P40 Pro+ 5G 全网通 8GB+256GB（陶瓷白）", 
		avatar: "../img/list-phone/huawei_P/p1.png", price: 7988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98,
		img: "../img/p40p+/p2.jpg&../img/p40p+/p1.png&../img/p40p+/p3.png&../img/p40p+/p4.png&../img/p40p+/p5.png&../img/p40p+/p6.png&../img/p40p+/p7.png&../img/p40p+/p8.png&../img/p40p+/p9.png",
		imgDetail: "../img/p40p+/img1.jpg&../img/p40p+/img2.jpg&../img/p40p+/img3.jpg&../img/p40p+/img4.jpg&../img/p40p+/img5.jpg&../img/p40p+/img6.jpg&../img/p40p+/img7.jpg&../img/p40p+/img8.png&../img/p40p+/img9.png&../img/p40p+/img10.png"
		 },
		 
		{ pid: 2, cid: 11, name: "HUAWEI P40 Pro", nav: "HUAWEI P系列", title: "HUAWEI P40 Pro 5G 全网通 8GB+256GB（零度白）",  
		 avatar: "../img/list-phone/huawei_P/p2.png", price: 5988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 1916, conmentrate: 95,
		 img: "../img/p40p/p1.jpg&../img/p40p/p2.png&../img/p40p/p3.png&../img/p40p/p4.png&../img/p40p/p5.png&../img/p40p/p6.png&../img/p40p/p7.png&../img/p40p/p8.png",
		 imgDetail: "../img/p40p/img1.jpg&../img/p40p/img2.jpg&../img/p40p/img3.jpg&../img/p40p/img4.jpg&../img/p40p/img5.jpg&../img/p40p/img6.jpg&../img/p40p/img7.jpg&../img/p40p/img8.png&../img/p40p/img9.png&../img/p40p/img10.png"
		  },
		{ pid: 3, cid: 11, name: "HUAWEI P40", nav: "HUAWEI P系列", title: "HUAWEI P40 5G 全网通 8GB+128GB（深海蓝）",   
		avatar: "../img/list-phone/huawei_P/p3.png", price: 4488, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 3916, conmentrate: 93,
		 img: "../img/p40/p1.jpg&../img/p40/p2.png&../img/p40/p3.png&../img/p40/p4.png&../img/p40/p5.png&../img/p40/p6.png&../img/p40/p7.png&../img/p40/p8.png",
		 imgDetail: "../img/p40/img1.jpg&../img/p40/img2.jpg&../img/p40/img3.jpg&../img/p40/img4.jpg&../img/p40/img5.jpg&../img/p40/img6.jpg&../img/p40/img7.jpg&../img/p40/img8.png&../img/p40/img9.png&../img/p40/img10.png"
		 },
		
		// 电脑
		{ pid: 4, cid: 20, name: "HUAWEI MateBook X Pro 2020款", nav: "HUAWEI MateBook X", title: "HUAWEI MateBook X Pro 2020款 独显 i5 16G 512G（皓月银）13.9英寸华为旗舰办公电脑 3K触控全面屏轻薄本 超级快充多屏协同学生笔记本", 
		 avatar: "../img/laptopmx/m1.png", price: 8988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2816, conmentrate: 95,
		 img: "../img/mx20pro/p1.png&../img/mx20pro/p2.png&../img/mx20pro/p3.png&../img/mx20pro/p4.png&../img/mx20pro/p5.png&../img/mx20pro/p6.png",
		 imgDetail: "../img/mx20pro/img1.jpg&../img/mx20pro/img2.jpg&../img/mx20pro/img3.jpg&../img/mx20pro/img4.jpg&../img/mx20pro/img5.jpg&../img/mx20pro/img6.jpg&../img/mx20pro/img7.jpg&../img/mx20pro/img8.png&../img/mx20pro/img9.png&../img/mx20pro/img10.png"
		 },
		 { pid: 5, cid: 20, name: "HUAWEI MateBook X Pro 2019款", nav: "HUAWEI MateBook X", title: "（华为）HUAWEI MateBook X Pro 2019款 13.9英寸（i5 8GB 512GB 独显 樱粉金）3K触控全面屏 轻薄笔记本 手机电脑一碰即传",
		  avatar: "../img/laptopmx/m2.png", price: 5988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2216, conmentrate: 97,
		  img: "../img/mx20pro/p1.png&../img/mx20pro/p2.png&../img/mx20pro/p3.png&../img/mx20pro/p4.png&../img/mx20pro/p5.png&../img/mx20pro/p6.png",
		  imgDetail: "../img/mx20pro/img1.jpg&../img/mx20pro/img2.jpg&../img/mx20pro/img3.jpg&../img/mx20pro/img4.jpg&../img/mx20pro/img5.jpg&../img/mx20pro/img6.jpg&../img/mx20pro/img7.jpg&../img/mx20pro/img8.png&../img/mx20pro/img9.png&../img/mx20pro/img10.png"
		  },
		  
		  // 华为mate系列 cid 12
		  { pid: 6, cid: 12, name: "HUAWEI Mate 30 5G", nav: "HUAWEI Mate 系列", title: "HUAWEI Mate 30 5G 全网通 8GB+128GB 麒麟990 4000万超感光徕卡三摄（亮黑色）",
		   avatar: "../img/list-phone/mate_phone/m1.png", price: 4499, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 46552, conmentrate: 98,
		   img: "../img/mate/m1/m1.jpg&../img/mate/m1/m2.png&../img/mate/m1/m3.png&../img/mate/m1/m4.png&../img/mate/m1/m5.png&../img/mate/m1/m6.png&../img/mate/m1/m7.png&../img/mate/m1/m8.png",
		   imgDetail: "../img/mate/m1/img1.jpg&../img/mate/m1/img2.jpg&../img/mate/m1/img3.jpg&../img/mate/m1/img4.jpg&../img/mate/m1/img5.jpg&../img/mate/m1/img6.jpg&../img/mate/m1/img7.jpg&../img/mate/m1/img8.png&../img/mate/m1/img9.png&../img/mate/m1/img10.png"
		   },
		  { pid: 7, cid: 12, name: "HUAWEI Mate 30 pro 5G", nav: "HUAWEI Mate 系列", title: "HUAWEI Mate 30 Pro 5G 全网通 8GB+128GB 麒麟990 4000万超感光徕卡三摄（亮黑色）",
		    avatar: "../img/list-phone/mate_phone/m2.png", price: 5899, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 63458, conmentrate: 99,
		    img: "../img/mate/m2/m1.jpg&../img/mate/m2/m2.png&../img/mate/m2/m3.png&../img/mate/m2/m4.png&../img/mate/m2/m5.png&../img/mate/m2/m6.png&../img/mate/m2/m7.png&../img/mate/m2/m8.png",
		    imgDetail: "../img/mate/m2/img1.jpg&../img/mate/m2/img2.jpg&../img/mate/m2/img3.jpg&../img/mate/m2/img4.jpg&../img/mate/m2/img5.jpg&../img/mate/m2/img6.jpg&../img/mate/m2/img7.jpg&../img/mate/m2/img8.png&../img/mate/m2/img9.png&../img/mate/m2/img10.png"
		  },
		  { pid: 8, cid: 12, name: "HUAWEI Mate 30 pro", nav: "HUAWEI Mate 系列", title: "HUAWEI Mate 30 Pro 麒麟990 双4000万徕卡电影四摄 4G全网通 8GB+256GB（亮黑色）",
		    avatar: "../img/list-phone/mate_phone/m3.png", price: 5899, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 63458, conmentrate: 99,
		    img: "../img/mate/m3/m1.png&../img/mate/m3/m2.png&../img/mate/m3/m3.png&../img/mate/m3/m4.png&../img/mate/m3/m5.png&../img/mate/m3/m6.png&../img/mate/m3/m7.png&../img/mate/m3/m8.png",
		    imgDetail: "../img/mate/m3/img1.jpg&../img/mate/m3/img2.jpg&../img/mate/m3/img3.jpg&../img/mate/m3/img4.jpg&../img/mate/m3/img5.png&../img/mate/m3/img6.png&../img/mate/m3/img7.png"
		  },
		  { pid: 9, cid: 12, name: "HUAWEI Mate 30 RS 保时捷", nav: "HUAWEI Mate 系列", title: "HUAWEI Mate 30 RS 保时捷设计 5G全网通 12GB+512GB（玄黑）",
		    avatar: "../img/list-phone/mate_phone/m4.png", price: 12999, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 5147, conmentrate: 99,
		    img: "../img/mate/m4/m1.png&../img/mate/m4/m2.png&../img/mate/m4/m3.png&../img/mate/m4/m4.png&../img/mate/m4/m5.png&../img/mate/m4/m6.png&../img/mate/m4/m7.png",
		    imgDetail: "../img/mate/m4/img1.jpg&../img/mate/m4/img2.jpg&../img/mate/m4/img3.jpg&../img/mate/m4/img4.jpg&../img/mate/m4/img5.jpg&../img/mate/m4/img6.jpg&../img/mate/m4/img7.jpg&../img/mate/m4/img8.png&../img/mate/m4/img9.png&../img/mate/m4/img10.png"
		  },
		  { pid: 10, cid: 12, name: "HUAWEI Mate 30", nav: "HUAWEI Mate 系列", title: "HUAWEI Mate 30 麒麟990 4000万超感光徕卡三摄 4G全网通 6GB+128GB（罗兰紫）",
		    avatar: "../img/list-phone/mate_phone/m6.png", price: 3699, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 22731, conmentrate: 99,
		    img: "../img/mate/m5/m1.png&../img/mate/m5/m2.png&../img/mate/m5/m3.png&../img/mate/m5/m4.png&../img/mate/m5/m5.png&../img/mate/m5/m6.png&../img/mate/m5/m7.png",
		    imgDetail: "../img/mate/m5/img1.jpg&../img/mate/m5/img2.jpg&../img/mate/m5/img3.jpg&../img/mate/m5/img4.jpg&../img/mate/m5/img5.jpg&../img/mate/m5/img6.jpg&../img/mate/m5/img7.jpg&../img/mate/m5/img8.png&../img/mate/m5/img9.png&../img/mate/m5/img10.png"
		  },
		  { pid: 11, cid: 12, name: "HUAWEI Mate Xs", nav: "HUAWEI Mate 系列", title: "HUAWEI Mate Xs 5G全网通 8GB+512GB（星际蓝）",
		    avatar: "../img/list-phone/mate_phone/m5.png", price: 16999, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 5340, conmentrate: 100,
		    img: "../img/mate/m6/m1.png&../img/mate/m6/m2.png&../img/mate/m6/m3.png&../img/mate/m6/m4.png&../img/mate/m6/m5.png&../img/mate/m6/m6.png&../img/mate/m6/m7.png",
		    imgDetail: "../img/mate/m6/img1.jpg&../img/mate/m6/img2.jpg&../img/mate/m6/img3.jpg&../img/mate/m6/img4.jpg&../img/mate/m6/img5.jpg&../img/mate/m6/img6.jpg&../img/mate/m6/img7.jpg&../img/mate/m6/img8.png&../img/mate/m6/img9.png&../img/mate/m6/img10.png"
		  },
		  
		  // 华为matePad系列平板cid 25
		  { pid: 12, cid: 25, name: "HUAWEI MatePad 10.8英寸", nav: "HUAWEI MatePad 系列", title: "【新品】HUAWEI MatePad 10.8英寸 麒麟990旗舰芯片 Wifi6+ 2K高清屏 娱乐影音学习办公平板 6GB+64GB WiFi（香槟金）",
		    avatar: "../img/list-phone/mate_pad/m1.png", price: 2349, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 419, conmentrate: 100,
		    img: "../img/matepad/m1/m1.jpg&../img/matepad/m1/m2.png&../img/matepad/m1/m3.png&../img/matepad/m1/m4.png&../img/matepad/m1/m5.png&../img/matepad/m1/m6.png&../img/matepad/m1/m7.png&../img/matepad/m1/m8.png&../img/matepad/m1/m9.png",
		    imgDetail: "../img/matepad/m1/img1.jpg&../img/matepad/m1/img2.jpg&../img/matepad/m1/img3.jpg&../img/matepad/m1/img4.jpg&../img/matepad/m1/img5.jpg&../img/matepad/m1/img6.jpg&../img/matepad/m1/img7.jpg&../img/matepad/m1/img8.png&../img/matepad/m1/img9.png&../img/matepad/m1/img10.png"
		  },
		  { pid: 13, cid: 25, name: "HUAWEI MatePad", nav: "HUAWEI MatePad 系列", title: "HUAWEI MatePad 10.4英寸华为智能平板电脑 4GB+64GB WiFi（夜阑灰）2K全面屏学生平板 7nm麒麟810芯片 哈曼卡顿调音 莱茵护眼认证",
		    avatar: "../img/list-phone/mate_pad/m2.png", price: 1849, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 6843, conmentrate: 99,
		    img: "../img/matepad/m2/m1.jpg&../img/matepad/m2/m2.png&../img/matepad/m2/m3.png&../img/matepad/m2/m4.png&../img/matepad/m2/m5.png&../img/matepad/m2/m6.png&../img/matepad/m2/m7.png",
		    imgDetail: "../img/matepad/m2/img1.jpg&../img/matepad/m2/img2.jpg&../img/matepad/m2/img3.jpg&../img/matepad/m2/img4.jpg&../img/matepad/m2/img5.jpg&../img/matepad/m2/img6.jpg&../img/matepad/m2/img7.jpg&../img/matepad/m2/img8.png&../img/matepad/m2/img9.png&../img/matepad/m2/img10.png"
		  },
		  { pid: 15, cid: 25, name: "HUAWEI MatePad Pro", nav: "HUAWEI MatePad 系列", title: "HUAWEI MatePad Pro 10.8英寸华为智能平板电脑 6GB+128GB 全网通（贝母白）绚丽全面屏学生平板 麒麟990芯片 手机平板多屏协同 轻办公平板电脑",
		    avatar: "../img/list-phone/mate_pad/m3.png", price: 3199, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 30517, conmentrate: 98,
		    img: "../img/matepad/m3/m1.png&../img/matepad/m3/m2.png&../img/matepad/m3/m3.png&../img/matepad/m3/m4.png&../img/matepad/m3/m5.png&../img/matepad/m3/m6.png&../img/matepad/m3/m7.png",
		    imgDetail: "../img/matepad/m3/img1.jpg&../img/matepad/m3/img2.jpg&../img/matepad/m3/img3.jpg&../img/matepad/m3/img4.jpg&../img/matepad/m3/img5.jpg&../img/matepad/m3/img6.jpg&../img/matepad/m3/img7.jpg&../img/matepad/m3/img8.png&../img/matepad/m3/img9.png&../img/matepad/m3/img10.png"
		  },
		  { pid: 16, cid: 25, name: "华为平板M6 10.8英寸", nav: "HUAWEI MatePad 系列", title: "华为平板 M6 10.8英寸智能平板电脑 4GB+128GB WiFi（银钻灰）2K高清屏学生平板 麒麟980芯片 平行视界应用分屏 四声道四扬声器 多重护眼儿童学习平板",
		    avatar: "../img/list-phone/mate_pad/m4.png", price: 2199, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 30310, conmentrate: 99,
		    img: "../img/matepad/m4/m1.jpg&../img/matepad/m4/m2.png&../img/matepad/m4/m3.png&../img/matepad/m4/m4.png&../img/matepad/m4/m5.png&../img/matepad/m4/m6.png&../img/matepad/m4/m7.png&../img/matepad/m4/m8.png",
		    imgDetail: "../img/matepad/m4/img1.jpg&../img/matepad/m4/img2.jpg&../img/matepad/m4/img3.jpg&../img/matepad/m4/img4.jpg&../img/matepad/m4/img5.jpg&../img/matepad/m4/img6.jpg&../img/matepad/m4/img7.jpg&../img/matepad/m4/img8.png&../img/matepad/m4/img9.png&../img/matepad/m4/img10.png"
		  },
		  { pid: 17, cid: 25, name: "华为平板M6 8.4英寸", nav: "HUAWEI MatePad 系列", title: "华为平板 M6 高能版 8.4英寸智能平板电脑 6GB+128GB WiFi（幻影蓝）2K高清屏学生平板 麒麟980芯片 哈曼卡顿调音 GPU Turbo加速游戏平板",
		    avatar: "../img/list-phone/mate_pad/m4.png", price: 1749, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 12019, conmentrate: 99,
		    img: "../img/matepad/m5/m1.png&../img/matepad/m5/m2.png&../img/matepad/m5/m3.png&../img/matepad/m5/m4.png&../img/matepad/m5/m5.png&../img/matepad/m5/m6.png&../img/matepad/m5/m7.png",
		    imgDetail: "../img/matepad/m5/img1.jpg&../img/matepad/m5/img2.jpg&../img/matepad/m5/img3.jpg&../img/matepad/m5/img4.jpg&../img/matepad/m5/img5.jpg&../img/matepad/m5/img6.jpg&../img/matepad/m5/img7.jpg&../img/matepad/m5/img8.png&../img/matepad/m5/img9.png&../img/matepad/m5/img10.png"
		  },
		  
		  
		  
		//全部手机
		
		{ aid: 1,  name: "麦芒9 5G", avatar: "../img/phoneAll/p1.png", price: 7988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98  },
		{ aid: 1,  name: "麦芒9 5G", avatar: "../img/phoneAll/p2.png", price: 7988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98  },
		{ aid: 1,  name: "麦芒9 5G", avatar: "../img/phoneAll/p3.png", price: 7988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98  },
		{ aid: 1,  name: "麦芒9 5G", avatar: "../img/phoneAll/p4.png", price: 7988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98  },
		{ aid: 1,  name: "麦芒9 5G", avatar: "../img/phoneAll/p5.png", price: 7988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98  },
		
		{ aid: 1,  name: "麦芒9 5G", avatar: "../img/phoneAll/p6.png", price: 7988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98  },
		{ aid: 1,  name: "麦芒9 5G", avatar: "../img/phoneAll/p7.png", price: 7988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98  },
		{ aid: 1,  name: "麦芒9 5G", avatar: "../img/phoneAll/p8.png", price: 7988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98  },
		{ aid: 1,  name: "麦芒9 5G", avatar: "../img/phoneAll/p9.png", price: 7988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98  },
		{ aid: 1,  name: "麦芒9 5G", avatar: "../img/phoneAll/p10.png", price: 7988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98  },
		
		{ aid: 1,  name: "麦芒9 5G", avatar: "../img/phoneAll/p11.png", price: 7988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98  },
		{ aid: 1,  name: "麦芒9 5G", avatar: "../img/phoneAll/p12.png", price: 7988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98  },
		{ aid: 1,  name: "麦芒9 5G", avatar: "../img/phoneAll/p13.png", price: 7988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98  },
		{ aid: 1,  name: "麦芒9 5G", avatar: "../img/phoneAll/p14.png", price: 7988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98  },
		{ aid: 1,  name: "麦芒9 5G", avatar: "../img/phoneAll/p15.png", price: 7988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98  },
		
		{ aid: 1,  name: "麦芒9 5G", avatar: "../img/phoneAll/p16.png", price: 7988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98  },
		{ aid: 1,  name: "麦芒9 5G", avatar: "../img/phoneAll/p17.png", price: 7988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98  },
		{ aid: 1,  name: "麦芒9 5G", avatar: "../img/phoneAll/p18.png", price: 7988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98  },
		{ aid: 1,  name: "麦芒9 5G", avatar: "../img/phoneAll/p19.png", price: 7988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98  },
		{ aid: 1,  name: "麦芒9 5G", avatar: "../img/phoneAll/p20.png", price: 7988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98  }
		
	
	],
	
	userList: [
		{ name: 'user1', pwd:'123', phone:'17860756085' },
		{ name: 'user2', pwd:'123', phone:'13884777931' }
	],
	
	cartList: [
		{ id: 1, name: 'user1', pid:1, count: 1, date: '2020-08-05 14:00:00'},
		{ id: 2, name: 'user1', pid:2, count: 1, date: '2020-08-05 14:12:10'},
		{ id: 3, name: 'user2', pid:3, count: 3, date: '2020-08-05 14:35:00'},
		{ id: 4, name: 'user2', pid:4, count: 3, date: '2020-08-05 14:35:00'}
		// { id: 4, name: 'user1', pid:1, count: 5, date: '2020-08-05 14:12:10'}
		
	],
	addressList: [
		{ id:1, name: "user1", receiveName: "张三", receivePhone: "13666666666", receiveRegion: "山东省 青岛市 城阳区 城阳街道", receiveAddress: "打发打发", isDefault: true },
		{ id:2, name: "user1", receiveName: "李四", receivePhone: "13766555556", receiveRegion: "山东省 青岛市 李沧区 虎山路街道", receiveAddress: "发大幅度", isDefault: false },
		{ id:3, name: "user1", receiveName: "张三", receivePhone: "13666666666", receiveRegion: "山东省 青岛市 城阳区 城阳街道", receiveAddress: "打发打发", isDefault: false },
		{ id:4, name: "user1", receiveName: "张三", receivePhone: "13666666666", receiveRegion: "山东省 青岛市 城阳区 城阳街道", receiveAddress: "打发打dafdafadfadfadfadfadfadfadfadfadfadfafadf发", isDefault: false }
	],
	orderList:[
		
	]
	
};

if(!sessionStorage.getItem("data"))
	sessionStorage.setItem("data", JSON.stringify(data));