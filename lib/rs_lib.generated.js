// @generated file from wasmbuild -- do not edit
// deno-lint-ignore-file
// deno-fmt-ignore-file
// source-hash: 17f6b3f29e2f2f2cea32eeda1a22c130e37317b2
let wasm;
let cachedInt32Memory0;

let cachedUint8Memory0 = null;

function getUint8Memory0() {
  if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
    cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
  }
  return cachedUint8Memory0;
}

let WASM_VECTOR_LEN = 0;

function passArray8ToWasm0(arg, malloc) {
  const ptr = malloc(arg.length * 1, 1) >>> 0;
  getUint8Memory0().set(arg, ptr / 1);
  WASM_VECTOR_LEN = arg.length;
  return ptr;
}
/**
 * @param {Uint8Array} value
 * @returns {number}
 */
export function hash32(value) {
  const ptr0 = passArray8ToWasm0(value, wasm.__wbindgen_malloc);
  const len0 = WASM_VECTOR_LEN;
  const ret = wasm.fingerprint32(ptr0, len0);
  return ret >>> 0;
}

/**
 * @param {Uint8Array} value
 * @returns {bigint}
 */
export function hash64(value) {
  const ptr0 = passArray8ToWasm0(value, wasm.__wbindgen_malloc);
  const len0 = WASM_VECTOR_LEN;
  const ret = wasm.hash64(ptr0, len0);
  return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} value
 * @returns {number}
 */
export function fingerprint32(value) {
  const ptr0 = passArray8ToWasm0(value, wasm.__wbindgen_malloc);
  const len0 = WASM_VECTOR_LEN;
  const ret = wasm.fingerprint32(ptr0, len0);
  return ret >>> 0;
}

/**
 * @param {Uint8Array} value
 * @returns {bigint}
 */
export function fingerprint64(value) {
  const ptr0 = passArray8ToWasm0(value, wasm.__wbindgen_malloc);
  const len0 = WASM_VECTOR_LEN;
  const ret = wasm.fingerprint64(ptr0, len0);
  return BigInt.asUintN(64, ret);
}

const imports = {
  __wbindgen_placeholder__: {},
};

import { Loader } from "https://deno.land/x/wasmbuild@0.15.1/loader.ts";
import { cacheToLocalDir } from "https://deno.land/x/wasmbuild@0.15.1/cache.ts";

const loader = new Loader({
  imports,
  cache: cacheToLocalDir,
});
/**
 * Decompression callback
 *
 * @callback DecompressCallback
 * @param {Uint8Array} compressed
 * @return {Uint8Array} decompressed
 */

/**
 * Options for instantiating a Wasm instance.
 * @typedef {Object} InstantiateOptions
 * @property {URL=} url - Optional url to the Wasm file to instantiate.
 * @property {DecompressCallback=} decompress - Callback to decompress the
 * raw Wasm file bytes before instantiating.
 */

/** Instantiates an instance of the Wasm module returning its functions.
 * @remarks It is safe to call this multiple times and once successfully
 * loaded it will always return a reference to the same object.
 * @param {InstantiateOptions=} opts
 */
export async function instantiate(opts) {
  return (await instantiateWithInstance(opts)).exports;
}

/** Instantiates an instance of the Wasm module along with its exports.
 * @remarks It is safe to call this multiple times and once successfully
 * loaded it will always return a reference to the same object.
 * @param {InstantiateOptions=} opts
 * @returns {Promise<{
 *   instance: WebAssembly.Instance;
 *   exports: { hash32: typeof hash32; hash64: typeof hash64; fingerprint32: typeof fingerprint32; fingerprint64: typeof fingerprint64 }
 * }>}
 */
export async function instantiateWithInstance(opts) {
  const { instance } = await loader.load(
    opts?.url ?? new URL("rs_lib_bg.wasm", import.meta.url),
    opts?.decompress,
  );
  wasm = wasm ?? instance.exports;
  cachedInt32Memory0 = cachedInt32Memory0 ?? new Int32Array(wasm.memory.buffer);
  cachedUint8Memory0 = cachedUint8Memory0 ?? new Uint8Array(wasm.memory.buffer);
  return {
    instance,
    exports: getWasmInstanceExports(),
  };
}

function getWasmInstanceExports() {
  return { hash32, hash64, fingerprint32, fingerprint64 };
}

/** Gets if the Wasm module has been instantiated. */
export function isInstantiated() {
  return loader.instance != null;
}
