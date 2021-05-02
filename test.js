import {resolve} from './index.js'

(async () => {
    const out = document.getElementById('output')
    const dtmi = 'dtmi:com:example:TemperatureController;1'
    const res = await resolve(dtmi, false)
    out.innerText +=JSON.stringify(res, null, 2)
})()