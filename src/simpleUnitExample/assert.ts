import {strict as assert} from "assert";

function sum(a: number, b: number): number {
  return a + b;
}

const result = sum(5, 5)

assert.equal(result, 101);

