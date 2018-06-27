/* ==============================
		验证函数
   ============================== */
//手机号码验证
const phoneNumReg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
//email验证
const eamilReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
//身份证验证
const idReg =  /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i;
//邮编验证
const postReg = /^[1-9][0-9]{5}$/;
//银行卡验证
const yhReg = /^([1-9]{1})(\d{14}|\d{18})$/;

export const pnStatus = obj =>  {
	let res = obj.match(phoneNumReg);
	if(res == null) return false;
	return true;
}

export const emStatus = obj =>  {
	let res = obj.match(eamilReg);
	if(res == null) return false;
	return true;
}

export const idStatus = obj =>  {
	let res = obj.match(idReg);
	if(res == null) return false;
	return true;
}

export const postStatus = obj =>  {
	let res = obj.match(postReg);
	if(res == null) return false;
	return true;
}

export const yhStatus = obj =>  {
	let res = obj.match(yhReg);
	if(res == null) return false;
	return true;
}