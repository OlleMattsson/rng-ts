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

interface GetterParams {
  count?: number;
  dataType?: DataType;
  mocked?: boolean;
}

export interface RNGInterface {
  get(count?: number, dataType?: DataType, mocked?: boolean): Promise<number[]>;
  get({ count, dataType, mocked }: GetterParams): Promise<number[]>;
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
    
    // default params
    let p: GetterParams = {
      count: 1,
      dataType: DataType.uint8,
      mocked: false
    };

    const validate = (p: GetterParams): void => {
        const {count, dataType, mocked } = p
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
    }

    if (typeof a1 === "object") {

      p = {
        ...p,
        ...(a1 as GetterParams)
      };
    } else {
      p = {
        count: a1 as number ?? 1,
        dataType: a2 as DataType ?? DataType.uint8,
        mocked: a3 as boolean ?? false
      };
    }

    validate(p)

    switch (this.provider) {
      case Provider.MathRand:
        return getMathRand(p.count, p.dataType);
      case Provider.AnuQrng:
        return await fetchAnuQRNG(p.count, p.dataType, p.mocked);
    }
  }
  
}
