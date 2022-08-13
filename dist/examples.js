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
exports.runRNGTest = void 0;
const _1 = require(".");
function runRNGTest() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`\n.: RNG Unit Tests:.`);
        // default Math.Rand() provider
        const myRNG = new _1.RNG();
        // ANU QRNG Provider
        const myQRNG = new _1.RNG({ provider: _1.Provider.AnuQrng });
        // get one uint8
        console.log(`await myRNG.get(): ${yield myRNG.get()}`);
        // get 5 uint8
        console.log(`await myRNG.get({count: 5}): ${yield myRNG.get({ count: 5 })}`);
        // get 5 uint8 (old api)
        console.log(`await myRNG.get(5): ${yield myRNG.get(5)}`);
        // get 5 uint16
        console.log(`await myRNG.get({count: 5, dataType: DataType.uint16}): ${yield myRNG.get({
            count: 5,
            dataType: _1.DataType.uint16
        })}`);
        // get 5 uint16 quantum random numbers
        // test turned off because fecthing numbers from ANu takes some time and slows down development,
        /*
        console.log(
          `await myQRNG.get({count: 5, dataType: DataType.uint8, mocked: false}): ${await myQRNG.get(
            {
              count: 5,
              dataType: DataType.uint8,
              mocked: false
            }
          )}`
        );
        */
        // get 5 uint16 quantom random numbers from the mocked response
        console.log(`await myQRNG.get({count: 5, dataType: DataType.uint16, mocked: true}): ${yield myQRNG.get({
            count: 5,
            dataType: _1.DataType.uint16,
            mocked: true
        })}`);
    });
}
exports.runRNGTest = runRNGTest;
runRNGTest();
//# sourceMappingURL=examples.js.map