export declare enum Provider {
    MathRand = "MathRand",
    AnuQrng = "AnuQrng"
}
export declare enum DataType {
    uint8 = "uint8",
    uint16 = "uint16"
}
interface getterParams {
    count?: number;
    dataType?: DataType;
    mocked?: boolean;
}
export interface RNGInterface {
    get(count?: number, dataType?: DataType, mocked?: boolean): Promise<number[]>;
    get({ count, dataType, mocked }: getterParams): Promise<number[]>;
}
export declare class RNG implements RNGInterface {
    constructor({ provider }?: {
        provider?: Provider;
    });
    private provider;
    get(a1?: unknown, a2?: unknown, a3?: unknown): Promise<number[]>;
}
export {};
