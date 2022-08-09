"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnuMock = void 0;
const _1 = require(".");
const response_uint8 = {
    type: "uint8",
    length: 24,
    data: [
        6,
        146,
        66,
        230,
        172,
        241,
        68,
        133,
        134,
        238,
        71,
        236,
        175,
        231,
        230,
        24,
        103,
        114,
        165,
        89,
        236,
        174,
        78,
        149
    ],
    success: true
};
const response_uint16 = {
    type: "uint8",
    length: 24,
    data: [
        9222,
        11626,
        20708,
        52287,
        61934,
        13549,
        61543,
        8399,
        10076,
        55824,
        49928,
        4784,
        62842,
        55479,
        2623,
        50144,
        53090,
        31136,
        26075,
        3911,
        41228,
        49898,
        54653,
        27832
    ],
    success: true
};
class AnuMock {
    get(dataType = _1.DataType.uint8) {
        if (dataType === _1.DataType.uint16) {
            return response_uint16;
        }
        return response_uint8;
    }
}
exports.AnuMock = AnuMock;
