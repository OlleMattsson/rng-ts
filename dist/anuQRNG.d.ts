import { DataType } from ".";
declare type RandomNumbers = number[];
export interface QRNGResponseData {
    type: string;
    length: number;
    data: RandomNumbers;
    success: boolean;
}
export declare const fetchAnuQRNG: (count?: number, dataType?: DataType, mocked?: boolean) => Promise<number[]>;
export {};
