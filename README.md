NVA API [![npm version](https://badge.fury.io/js/nva-api.svg)](https://badge.fury.io/js/nva-api)
===
[![NPM](https://nodei.co/npm/nva-api.png)](https://nodei.co/npm/nva-api/)

yet another fetch adapter

Install
===

```javascript
npm install nva-api --save
```

Useage
===

```javascript
import api from 'nva-api'
api.get("http://example.com",{q:'search'}).then(ret=>{
    console.log('ret',ret)
})
```

## Todo

- fix some unknow bugs
- add more api documents


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
