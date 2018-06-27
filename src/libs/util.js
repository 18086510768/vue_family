let util = {}
/*设置标题*/
util.title = title => {
    title = title ? title + ' - by wangyue' : 'vue Demo'
    window.document.title = title
}
/*设置本地存储*/
util.localData = {
	setData (key, value) {
		window.localStorage.setItem(key, value)
	},
	getData (key) {
		let data = window.localStorage.getItem(key)
		return !!data ? data : ''
	},
	removeData (key)  {
		window.localStorage.removeItem(key)
	},
	clearAllData () {
		window.localStorage.clear()
	},
	setCookie (key, value, day) {
		let exp = new Date(), days = day ? day : 30
		exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000)
		this.setBaseCookie(key, value, exp, "/")
	},
	setBaseCookie (sName, sValue, oExpires, sPath, sDomain, bSecure) {
		let sCookie = sName + "=" + encodeURIComponent(sValue)
		if (oExpires) {
			sCookie += "; expires=" + oExpires.toGMTString()
		}
		if (sPath) {
			sCookie += "; path=" + sPath
		}
		if (sDomain) {
			sCookie += "; domain=" + sDomain
		}
		if (bSecure) {
			sCookie += "; secure"
		}
		document.cookie = sCookie
	},
	getCookie (sName) {
		let sRE = "(?:; )?" + sName + "=([^;]*);?"
		let oRE = new RegExp(sRE)

		if (oRE.test(document.cookie)) {
			return decodeURIComponent(RegExp["$1"])
		} else {
			return null
		}
	},
	deleteCookie (sName, sPath, sDomain) {
		this.setCookie(sName, '', new Date(0), sPath, sDomain)
	}
}
/*正则表达匹配类型列表*/
const checkTypes = {
	tel: /^1[3|4|5|7|8|9][0-9]\d{8}$/,		/*! 匹配手机号 */
	email: /^(\w)+(\.\w)*@(\w)+((\.\w+)+)$/,	/* ! 匹配email */
	chars: /^[\u4E00-\u9FA5a-zA-Z0-9]{1,}$/,	/* ! 禁止输入特殊字符 */
	card: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, /* ! 匹配身份证号码 */
	int: /^[0-9]*$/,					/* ! 匹配正整数 */
	pwd: /^[a-zA-Z]\w{5,17}$/,			/* ! 以字母开头，长度在6-18之间，只能包含字符、数字和下划线 密码 */
	num: /^[0-9]+(.[0-9]{1,})?$/,	/* ! 匹配整数和小数 */
}
/*校验数据*/
util.check = (options = {
	val: '',//传递的校验值
	type: null,//校验的类型
	ignore: false,//是否忽略校验值为空(是否为必填校验)
	checkType: null//自定义校验类型，
}) => {
	options.val = options.val.trim()
	if(options.val) {
		let reg = options.type ? checkTypes[options.type] : null //定义匹配
		if(options.checkType) {
			reg = typeof options.checkType == 'string' ? new RegExp(options.checkType) : options.checkType
		} 
		return reg ? reg.test(options.val) : true
	} 
	return options.ignore;
}
/*匹配内容*/
util.search = (search = '',content = '') => {
	search = search.trim()
	if(search) {
		search = '[' + search.toLowerCase().split('').join('].*[') + ']'
		let reg = new RegExp(search)
		return reg.test(content)
	} else {
		return true
	}
}
// 计算日期为当年的第几周  
util.weekOfYear = (year,   month,   day) => {
	//   year       年  
	//   month     月  
	//   day         日  
	//   每周从周日开始  
	let date1 = new Date(year, 0, 1);
	let date2 = new Date(year, month-1, day, 1);
	let dayMS = 24*60*60*1000;
	let firstDay = (7-date1.getDay())*dayMS;
	let weekM  = 7*dayMS;
	date1 = date1.getTime();
	date2 = date2.getTime();
	return Math.ceil((date2-date1-firstDay)/weekMS)+1;
}
//   通过周数和星期计算日期
util.dateFromWeek = (year,   week,   day) => {  
	//   year       年
	//   week       周
	//   day         星期   (0-6,   0代表周日)
	let date1 = new Date(year,0,1);
	let dayMS = 24*60*60*1000;
	let firstDay = (7-date1.getDay())*dayMS;
	let weekMS = (week-2)*7*dayMS;
	let result = date1.getTime()+firstDay+weekMS+day*dayMS;
	date1.setTime(result);
	return date1.toLocaleDateString();
}
//base64Img2Blob画布转换成64位流 方法
util.base64Img2Blob = code => {
    var parts = code.split(";base64,");
    var contentType = parts[0].split(":")[1];
    var raw = window.atob(parts[1]);
    var rawLength = raw.length;
    var uInt8Array = new Uint8Array(rawLength);
    for (var i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uInt8Array], { type: contentType });
}
//把echarts下载成图片
util.downloadImg2 = (dom,down) => {
	//dom 需要下载为图片的dom
	//down 下载元素
	var blob = util.base64Img2Blob(dom
	  .getElementsByTagName("canvas")[0]
	  .toDataURL("image/png")); //new Blob([content]);
	  down.setAttribute("href",window.URL.createObjectURL(blob))
}
export default util