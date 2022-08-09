import { RNG, Provider, DataType } from "./";

export async function runRNGTest() {
  console.log(`\n.: RNG Unit Tests:.`);

  // default Math.Rand() provider
  const myRNG = new RNG();

  // ANU QRNG Provider
  const myQRNG = new RNG({ provider: Provider.AnuQrng });

  // get one uint8
  console.log(`await myRNG.get(): ${await myRNG.get()}`);

  // get 5 uint8
  console.log(`await myRNG.get({count: 5}): ${await myRNG.get({ count: 5 })}`);

  // get 5 uint8 (old api)
  console.log(`await myRNG.get(5): ${await myRNG.get(5)}`);

  // get 5 uint16
  console.log(
    `await myRNG.get({count: 5, dataType: DataType.uint16}): ${await myRNG.get({
      count: 5,
      dataType: DataType.uint16
    })}`
  );

  // get 5 uint16 quantum random numbers
  // test turned off because fecthing numbers from ANu takes some time and slows down development,

  /*
  console.log(
    `await myQRNG.get({count: 5, dataType: DataType.uint8, mocked: false}): ${await myQRNG.get(
      {
        count: 5,
        dataType: DataType.uint8,
        mocked: false
      }
    )}`
  );
  */

  // get 5 uint16 quantom random numbers from the mocked response
  console.log(
    `await myQRNG.get({count: 5, dataType: DataType.uint16, mocked: true}): ${await myQRNG.get(
      {
        count: 5,
        dataType: DataType.uint16,
        mocked: true
      }
    )}`
  );
}
