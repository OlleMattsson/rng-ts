import { AnuMock } from "./anuQRNG-mock";
import { DataType } from ".";

type RandomNumbers = number[];

export interface QRNGResponseData {
  type: string;
  length: number;
  data: RandomNumbers;
  success: boolean;
}

export const fetchAnuQRNG = async (
  count: number = 1,
  dataType: DataType = DataType.uint8,
  mocked: boolean = false
): Promise<number[]> =>
  new Promise(async (resolve, reject) => {
    if (mocked) {
      const response = new AnuMock().get(dataType);
      resolve(response.data.slice(0, count));
    }

    const qrngURI = `https://qrng.anu.edu.au/API/jsonI.php?type=${dataType}&length=${count}`;

    try {
      const res: Response = await fetch(qrngURI);
      const data: QRNGResponseData = await res.json();

      if (data.success) {
        const numbers = data.data;
        resolve(numbers);
      }

      reject("failed to fetch numbers from qrng");
    } catch (error) {
      reject(error);
    }
  });
