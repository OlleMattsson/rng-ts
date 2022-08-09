# Random Number Generator with TypeScript

A convenient little random number generating helper. Both pseudo and quantum random numbers can be generated for fun and profit. And yeah, there is TypeScript support!

**gl hf =)** 

## Installation

`npm install rng-ts --save`


## Examples

### Basic Usage

```
import {RNG} from "rng-ts"
const rng = new RNG();
const randomNumber = await rng.get()
```

### Quantum Random Numbers Example

```
import {RNG, Provider, DataType} from "rng-ts"

const rng = new RNG({
    provider: Provider.AnuQrng
});

const trulyRandomNumber = await rng.get({
    count: 42,
    dataType: DataType.uint16
})
```

# API

## RNG()

Create a new Random Number Generator by initializing the RNG Object

```
const rng = new RNG()
```

When initializing RNG without any options, the default provider is MathRand, which is an implementation of Math.random().


### Options

#### Provider

Specify the method of random number production with the `provider`option

- Provider.MathRand (default)
- Provider.AnuQrng ([Quantum Random Numbers by ANu QRNG API](https://qrng.anu.edu.au/))

```
const rng = new RNG({
    provider: Provider.AnuQrng
});

const randomNumber = await rng.get()
```

## RNG.get()

RNG.get() returns an array of random numbers. There are two flavours of the get() interface. Use whichever you prefer.
```
get(count?: number, dataType?: DataType, mocked?: boolean): Promise<number[]>;
get({ count, dataType, mocked }: getterParams): Promise<number[]>;
```


These do the same thing
```
// shorthand: order of arguments matter
get(5, DataType.uint16, false)

// verbose: order of params is irrelevant
get({dataType: DataType.uint16, mocked: false, count: 5})

```


### Options

#### Count

Specify the amount of random numbers

```
const options = {
    count: 5
}
const randomNumber = await rng.get(options)

```

#### DataType

Specify the type of random number

- DataType.uint8 (default, 0 - 255)
- DataType.uint16 (0 - 65535)

```
const options = {
    dataType: DataType.uint16
}
const randomNumber = await rng.get(options)
```


#### Mocked

Mock the response of get(). This is useful for testing purposes. Only works when the Provider is AnuRNG.

```
const rng = new RNG({
    provider: Provider.AnuQrng
});
const options = {
    mocked: true
}
const randomNumber = await rng.get(options)
```




# Author
Olle E. Mattsson  
www.github.com/OlleMattsson  
www.ollemattsson.com  


# License

Copyright 2022 Olle E. Mattsson

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.