import test, {describe, it} from "node:test"
import assert from "node:assert"
import {RNG} from "."

describe('new RNG()', () => {
    const rng = new RNG()

    it ("should have a getter", () => {
        const typeofGet = typeof rng.get()
        const expectedTypeofGet = "object";
        assert.strictEqual(typeofGet, expectedTypeofGet)
    })

    it ("should have a constructor and get method", () => {
        const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(rng))
        const expectedMethods = ["constructor", "get"]
        assert.deepEqual(methods, expectedMethods)
    })

})



describe('RNG.get() should return one random number', () => {
    const rng = new RNG()

    assert.ok(rng.get());
})

describe('RNG.get({number})', () => {

    const rng = new RNG()
    
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
})