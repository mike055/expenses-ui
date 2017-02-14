function getJSON(url, callback) {
    const req = new XMLHttpRequest()
    req.onload = function () {
        if (req.status === 404) {
            callback(new Error('not found'))
        } else {
            callback(null, JSON.parse(req.response))
        }
    }
    req.open('GET', url)
    req.send()
}
 function postJSON(url, data, callback) {
    const req = new XMLHttpRequest()
    req.onload = function () {
        callback(JSON.parse(req.response))
    }
    req.open('POST', url)
    req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
    req.send(JSON.stringify(data))
}
export default { getJSON, postJSON };
