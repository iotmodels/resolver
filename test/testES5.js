const resolve = require('../es5/index.js').resolve
const dtmi = 'dtmi:com:example:TemperatureController;1'
resolve(dtmi)
    .then(res => console.log(JSON.stringify(res, null, 2)))
    .catch(err => console.log(err))
