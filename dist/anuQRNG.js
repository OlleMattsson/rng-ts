"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAnuQRNG = void 0;
const anuQRNG_mock_1 = require("./anuQRNG-mock");
const _1 = require(".");
const fetchAnuQRNG = (count = 1, dataType = _1.DataType.uint8, mocked = false) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        if (mocked) {
            const response = new anuQRNG_mock_1.AnuMock().get(dataType);
            resolve(response.data.slice(0, count));
        }
        const qrngURI = `https://qrng.anu.edu.au/API/jsonI.php?type=${dataType}&length=${count}`;
        try {
            const res = yield fetch(qrngURI);
            const data = yield res.json();
            if (data.success) {
                const numbers = data.data;
                resolve(numbers);
            }
            reject("failed to fetch numbers from qrng");
        }
        catch (error) {
            reject(error);
        }
    }));
});
exports.fetchAnuQRNG = fetchAnuQRNG;
