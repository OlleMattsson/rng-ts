import test, {describe, it} from "node:test"
import assert from "node:assert"
import {RNG} from "."

describe('Create a random number generator', () => {

    const rng = new RNG()

    it ("should have a getter", () => {
        assert.ok(rng.get());
    })

    
})