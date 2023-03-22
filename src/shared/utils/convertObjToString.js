const convertObjToString = obj => {
	let str = ''
	for (const [p, val] of Object.entries(obj)) {
		str += ` ${p}=${val}\n`
	}
	return str
}

export default convertObjToString
