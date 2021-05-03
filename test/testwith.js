// @ts-check
import { resolve } from '../index.js'

(async () => {
  const out = document.getElementById('output')
  const dtmi = 'dtmi:com:example:TemperatureController;1'
  //resolve(dtmi, false, 'https://raw.githubusercontent.com/iotmodels/iot-plugandplay-models/main/')
  resolve(dtmi)
    .then(res => out.innerText += JSON.stringify(res, null, 2))
    .catch(err => out.innerText += err)
})()