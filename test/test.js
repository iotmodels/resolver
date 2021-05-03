var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { resolve } from '../index.js';
(() => __awaiter(void 0, void 0, void 0, function* () {
    const out = document.getElementById('output');
    const dtmi = 'dtmi:com:example:TemperatureController;1';
    //resolve(dtmi, false, 'https://raw.githubusercontent.com/iotmodels/iot-plugandplay-models/main/')
    if (out) {
        resolve(dtmi)
            .then(res => out.innerText += JSON.stringify(res, null, 2))
            .catch(err => out.innerText += err);
    }
}))();
