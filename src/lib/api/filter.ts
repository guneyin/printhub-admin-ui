function filter(...params: string[]): string {
	let res = '?filter';
	// let opt = '?';

	for (let i = 0; i < params.length; i++) {
		const isEven = (i % 2 === 0);
		const param = params[i];

		if (!isEven) {
			res += "=" + encodeURIComponent(param);
		} else {
			res += '&' + encodeURIComponent(param);
		}
	}

	return res;
}