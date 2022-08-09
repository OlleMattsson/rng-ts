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
exports.RNG = exports.DataType = exports.Provider = void 0;
const anuQRNG_1 = require("./anuQRNG");
const mathRand_1 = require("./mathRand");
var Provider;
(function (Provider) {
    Provider["MathRand"] = "MathRand";
    Provider["AnuQrng"] = "AnuQrng";
})(Provider = exports.Provider || (exports.Provider = {}));
var DataType;
(function (DataType) {
    DataType["uint8"] = "uint8";
    DataType["uint16"] = "uint16";
})(DataType = exports.DataType || (exports.DataType = {}));
class RNG {
    constructor({ provider = Provider.MathRand } = {}) {
        this.provider = provider;
    }
    get(a1, a2, a3) {
        return __awaiter(this, void 0, void 0, function* () {
            let p = {
                count: 1,
                dataType: DataType.uint8,
                mocked: false
            };
            if (typeof a1 === "object") {
                p = Object.assign({}, a1);
            }
            else {
                p = {
                    count: a1,
                    dataType: a2,
                    mocked: a3
                };
            }
            switch (this.provider) {
                case Provider.MathRand:
                    return (0, mathRand_1.getMathRand)(p.count, p.dataType);
                case Provider.AnuQrng:
                    return yield (0, anuQRNG_1.fetchAnuQRNG)(p.count, p.dataType, p.mocked);
            }
        });
    }
}
exports.RNG = RNG;
