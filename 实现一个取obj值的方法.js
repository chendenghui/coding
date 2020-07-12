function getValue(obj, keys) {
	if (typeof keys !== 'string') throw new Error(`参数传入类型错误`);
	keys = keys.split('\.');
	for(let i = 0; i < keys.length; i++) {
		if (obj[keys[i]] !== undefined) {
			obj = obj[keys[i]];
		} else {
			throw new Error('传入取值路径有误');
		}
	}
	return obj;
}
