import test, {describe, it} from "node:test"
import assert from "node:assert"
import {RNG, DataType, Provider} from "."
const rng = new RNG()

describe('new RNG()', () => {

    it ("should expose the .get() method", () => {
        const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(rng))       
        assert.ok(methods.indexOf("get") > 0)
    })

    it ("should expose .get() with typeof object", () => {
        const typeofGet = typeof rng.get()
        const expectedTypeofGet = "object";
        assert.strictEqual(typeofGet, expectedTypeofGet)
    })

})

describe('RNG.get()', () => {

    it("should return an array", async () => {
        const randomNumbers = await rng.get()
        assert.strictEqual(typeof randomNumbers, "object")
    })
    
    it("should return an array with length of one", async () => {
        const randomNumbers = await rng.get()
        assert.strictEqual(randomNumbers.length, 1)
    })

    it("should return an array with one number", async () => {
        const randomNumbers = await rng.get()
        assert.strictEqual(typeof randomNumbers[0], "number")
    })
})

describe('RNG.get({count})', () => {
    
    it ("should throw if count < 1", () => {
        assert.rejects( async () => await rng.get({count: 0}), {
            name: 'Error',
            message: "invalid count"
        });
    })

    it ("should throw if count > 1024", () => {
        assert.rejects( async () => await rng.get({count: 0}), {
            name: 'Error',
            message: "invalid count"
        });
    })

    it("should return as many random numbers as specified by the count property", async () => {
        const randomNumbers = await rng.get({count: 5})
        assert.strictEqual(randomNumbers.length, 5)  
    })
})

describe('RNG.get({dataType})', () => {

    it("should accept allowed dataTypes", async () => {
        assert.strictEqual(typeof await rng.get({dataType: DataType.uint8}), "object")
        assert.strictEqual(typeof await rng.get({dataType: DataType.uint16}), "object")
    })

    it("should throw if dataType is invalid", async () => {
        assert.rejects( async () => await rng.get({dataType: 1234}), {
            name: 'Error',
            message: "invalid dataType"
        });        
    })

    it("should return the type of random number requested", async () => {
        const isUint8 = (n) => {
            if (typeof n === "number" && n >= 0 && n <= 255 ) {
                return true
            }
            return false
        }

        const isUint16 = (n) => {
            if (typeof n === "number" && n >= 0 && n <= 65535 ) {
                return true
            }
            return false
        }        

        const randomNumbersUint8 = await rng.get({dataType: DataType.uint8})
        const randomNumbersUint16 = await rng.get({dataType: DataType.uint16})

        assert.strictEqual(isUint8(randomNumbersUint8[0]), true);
        assert.strictEqual(isUint16(randomNumbersUint16[0]), true);
    });
})

describe('RNG.get({mocked})', async () => {

    // Only works with AnuQrng
    const qrng = new RNG({provider: Provider.AnuQrng})

    it("should accept mocked: boolean", async () => {
        assert.strictEqual(typeof await qrng.get({mocked: true}), "object")
        assert.strictEqual(typeof await qrng.get({mocked: false}), "object")
    })

    it("should throw if mocked type is invalid", async () => {
        assert.rejects( async () => await qrng.get({mocked: 1234}), {
            name: 'Error',
            message: 'property mocked must be of type boolean'
        });        
    })

    it("should return mocked random numbers if true", async () => {
        const randomNumbrs = await qrng.get({mocked:true})
        assert.strictEqual(randomNumbrs[0], 6)
    })
})
