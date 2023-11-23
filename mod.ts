import { instantiate } from "./lib/rs_lib.generated.js";

const farmhash = await instantiate();

function transformInput(input: string | Uint8Array): Uint8Array {
  return typeof input === "string" ? new TextEncoder().encode(input) : input;
}

/**
 * Creates a new Farmhash-based 32-bit hash for an array of bytes.
 * The hash value may vary with library version and platform.
 *
 * @param {string | Uint8Array} input - The input data to hash.
 * @returns {string} The 32-bit hash as a string.
 *
 * @example
 * let value = "hello world";
 * let hash = farmhash.hash32(value);
 * // hash ==> "430397466" (as a string representation)
 */
function hash32(input: string | Uint8Array): string {
  input = transformInput(input);
  return farmhash.hash32(input).toString();
}

/**
 * Creates a new Farmhash-based 64-bit hash for an array of bytes.
 * The hash value may vary with library version and platform.
 *
 * @param {string | Uint8Array} input - The input data to hash.
 * @returns {string} The 64-bit hash as a string.
 *
 * @example
 * let value = "hello world";
 * let hash = farmhash.hash64(value);
 * // hash ==> "6381520714923946011" (as a string representation)
 */
function hash64(input: string | Uint8Array): string {
  input = transformInput(input);
  return farmhash.hash64(input).toString();
}

/**
 * Creates a new Farmhash-based 32-bit fingerprint for an array of bytes.
 * The fingerprint value should be portable and stable across library versions and platforms.
 *
 * @param {string | Uint8Array} input - The input data to fingerprint.
 * @returns {string} The 32-bit fingerprint as a string.
 *
 * @example
 * let value = "hello world";
 * let hash = farmhash.fingerprint32(value);
 * // hash ==> "430397466" (as a string representation)
 */
function fingerprint32(input: string | Uint8Array): string {
  input = transformInput(input);
  return farmhash.fingerprint32(input).toString();
}

/**
 * Creates a new Farmhash-based 64-bit fingerprint for an array of bytes.
 * The fingerprint value should be portable and stable across library versions and platforms.
 *
 * @param {string | Uint8Array} input - The input data to fingerprint.
 * @returns {string} The 64-bit fingerprint as a string.
 *
 * @example
 * let value = "hello world";
 * let hash = farmhash.fingerprint64(value);
 * // hash ==> "6381520714923946011" (as a string representation)
 */
function fingerprint64(input: string | Uint8Array): string {
  input = transformInput(input);
  return farmhash.fingerprint64(input).toString();
}

export default {
  hash32,
  hash64,
  fingerprint32,
  fingerprint64,
};
