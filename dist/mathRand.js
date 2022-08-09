"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMathRand = void 0;
const _1 = require(".");
function getRandomInt(dataType = _1.DataType.uint8) {
    const min = 0;
    let max = 255;
    if (dataType === _1.DataType.uint16) {
        max = 65535;
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function getMathRand(count = 1, dataType = _1.DataType.uint8) {
    let result = [];
    for (let i = 0; i < count; i++) {
        result.push(getRandomInt(dataType));
    }
    return result;
}
exports.getMathRand = getMathRand;
