import { DataType } from ".";

type uint8 = number;
type uint16 = number;

function getRandomInt(dataType: DataType = DataType.uint8): uint8 | uint16 {
  const min = 0;
  let max: uint8 = 255;

  if (dataType === DataType.uint16) {
    max = 65535 as uint16;
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getMathRand(
  count: number = 1,
  dataType = DataType.uint8
): number[] {
  let result: number[] = [];
  for (let i = 0; i < count; i++) {
    result.push(getRandomInt(dataType));
  }

  return result;
}
