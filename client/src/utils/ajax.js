export const getJSON = (url, callback) => {
    const req = new XMLHttpRequest()
    req.onload = function () {
        if (req.status === 404) {
            callback(new Error('URL not found'), null)
         } 
         else if (req.status === 500) {
            callback(new Error('Internal Server Error'), req.response)
         } 
         else if (req.status === 400) {
            callback(new Error('Bad Request'), req.response)
         }  
         else {
            callback(null, JSON.parse(req.response))
        }
    }
    req.open('GET', url)
    req.send()
}

export const postJSON = (url, data, callback) => {
    const req = new XMLHttpRequest()
    req.onload = function () {
         if (req.status === 404) {
            callback(new Error('URL not found'), null)
         } 
         else if (req.status === 500) {
            callback(new Error('Internal Server Error'), req.response)
         } 
         else if (req.status === 400) {
            callback(new Error('Bad Request'), req.response)
         } 
         else {
            callback(null, JSON.parse(req.response))
         }
    }
    req.open('POST', url)
    req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
    req.send(JSON.stringify(data))
}

