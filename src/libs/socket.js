/**
 * webSocket
 * */
let socket = (url, successCB) => {
	let ws
	let disConnect = () => {
		if(ws) {
			closeConnect()
		}
		setTimeout(() => {
			reConnect()
		},5000)
	}
	let reConnect = () => {
	  ws = new WebSocket(url)
	  ws.onopen = () => {
	  	ws.onmessage = successCB
    	ws.onclose = disConnect
	  }
    ws.onerror = disConnect
	}
	let closeConnect = () => {
		ws.onclose = null
		ws.close()
	}
	//默认第一次连接
	reConnect()
	return {closeConnect}
}
export default socket
