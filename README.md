# Deno Farmhash Library Documentation

## Overview

This Deno library is a wrapper around the [Rust Farmhash library](https://github.com/seiflotfy/rust-farmhash), offering functions for hashing and fingerprinting strings and byte arrays. It includes methods to compute 32-bit and 64-bit hashes and fingerprints using the Farmhash algorithm.

## Installation

To use this library in your Deno project, add the following import statement to your code:

```typescript
import farmhash from "https://deno.land/x/farmhash/mod.ts";
```

## Usage

All functions accept the following parameter:

- `input: string | Uint8Array` - The input data to be processed. Can be either a string or a Uint8Array.

The return type for all functions is a `string` representing the hash or fingerprint result.

### Hash

The hash methods are platform dependent. Different CPU architectures, for example 32-bit vs 64-bit, Intel vs ARM, SSE4.2 vs AVX might produce different results for a given input.

#### `hash32`

Returns a 32-bit unsigned integer hash of the input data as a string.

```typescript
let value = "hello world";
let hash = farmhash.hash32(value);
// hash ==> "430397466" (as a string representation)
```

#### `hash64`

Returns a 64-bit unsigned integer hash of the input data as a string.

```typescript
let value = "hello world";
let hash = farmhash.hash64(value);
// hash ==> "6381520714923946011" (as a string representation)
```

### Fingerprint

The fingerprint methods are platform independent, producing the same results for a given input on any machine.

#### `fingerprint32`

Returns a 32-bit unsigned integer fingerprint of the input data as a string.

```typescript
let value = "hello world";
let fingerprint = farmhash.fingerprint32(value);
// fingerprint ==> "430397466" (as a string representation)
```

#### `fingerprint64`

Returns a 64-bit unsigned integer fingerprint of the input data as a string.

```typescript
let value = "hello world";
let fingerprint = farmhash.fingerprint64(value);
// fingerprint ==> "6381520714923946011" (as a string representation)
```

## License

The library is licensed under a MIT license. Feel free to use it however you see fit.
