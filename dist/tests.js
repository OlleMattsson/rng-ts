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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const _1 = require(".");
(0, node_test_1.describe)('The random number generator', () => {
    const rng = new _1.RNG();
    (0, node_test_1.it)("should have a getter", () => {
        node_assert_1.default.ok(rng.get());
    });
});
(0, node_test_1.describe)('RNG.get({number})', () => {
    const rng = new _1.RNG();
    (0, node_test_1.it)("should throw if count < 1", () => {
        node_assert_1.default.throws(() => __awaiter(void 0, void 0, void 0, function* () { return yield rng.get({ count: 1 }); }), {
            name: 'Error',
            message: 'invalid count',
        });
    });
    /*
    it ("should fail if count > 1024", () => {
        const rng = new RNG()
        assert.throws(rng.get({count: 1025}));
    })
    */
});
//# sourceMappingURL=tests.js.map