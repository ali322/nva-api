import qs from "qs"

const fetch = typeof window === "object"?window.fetch:global.fetch

if(!fetch){
    throw new Error('A global `fetch` method is required as either `window.fetch` for browsers or `global.fetch` for node runtime environments')
}

const api = {
    get(url,data={},headers={}){
        data = qs.stringify(data)
        url = `${url}?${data}`
        return fetch(url,headers).then(ret=>ret.json())
    },
    post(url,data={},headers={}){
        return fetch(url,{
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                ...headers
            },
            body:JSON.stringify(data)
        }).then((ret)=>{
            if(ret.ok){
                return ret.json()
            }else{
                throw new Error(`post failed,err stack:${ret.error?ret.error():""}`)
            }
        })
    }
}