import { QRNGResponseData } from "./anuQRNG";
import { DataType } from ".";
interface MockedDataResponse {
    get(dataType?: DataType): QRNGResponseData;
}
export declare class AnuMock implements MockedDataResponse {
    get(dataType?: DataType): QRNGResponseData;
}
export {};
