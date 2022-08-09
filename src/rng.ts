import { fetchAnuQRNG } from "./anuQRNG";
import { getMathRand } from "./mathRand";

export enum Provider {
  MathRand = "MathRand",
  AnuQrng = "AnuQrng"
}

export enum DataType {
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

export class RNG implements RNGInterface {
  constructor({ provider = Provider.MathRand }: { provider?: Provider } = {}) {
    this.provider = provider;
  }

  private provider: Provider;

  public async get(
    a1?: unknown,
    a2?: unknown,
    a3?: unknown
  ): Promise<number[]> {
    let p: getterParams = {
      count: 1,
      dataType: DataType.uint8,
      mocked: false
    };
    if (typeof a1 === "object") {
      p = {
        ...(a1 as getterParams)
      };
    } else {
      p = {
        count: a1 as number,
        dataType: a2 as DataType,
        mocked: a3 as boolean
      };
    }

    switch (this.provider) {
      case Provider.MathRand:
        return getMathRand(p.count, p.dataType);
      case Provider.AnuQrng:
        return await fetchAnuQRNG(p.count, p.dataType, p.mocked);
    }
  }
}
