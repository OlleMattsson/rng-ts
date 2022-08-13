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
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            // default params
            let p = {
                count: 1,
                dataType: DataType.uint8,
                mocked: false
            };
            console.log("default", p);
            const validate = (p) => {
                console.log("validate", p);
                const { count, dataType, mocked } = p;
                const countMin = 1;
                const countMax = 1024;
                if (count < countMin || count > countMax) {
                    throw new Error(`invalid count`);
                }
                if (dataType !== DataType.uint16 && dataType !== DataType.uint8) {
                    throw new Error(`invalid dataType`);
                }
                if (typeof mocked !== "boolean") {
                    throw new Error(`property mocked must be of type boolean`);
                }
            };
            if (typeof a1 === "object") {
                p = Object.assign({}, a1);
            }
            else {
                p = {
                    count: (_a = a1) !== null && _a !== void 0 ? _a : 1,
                    dataType: (_b = a2) !== null && _b !== void 0 ? _b : DataType.uint8,
                    mocked: (_c = a3) !== null && _c !== void 0 ? _c : false
                };
            }
            validate(p);
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
//# sourceMappingURL=rng.js.map