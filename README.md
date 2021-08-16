# Array Transform Benchmark

## Scenario

- 50 arrays of objects
- Object structure:

```json
{ "filename": "[number]-filename", "content": "[17Mb file]" }
```

- Test case: remove the `content` property from all items in the array

## Environment:

- node:8.4.0-alpine
- mem_limit: 512m
- mem_reservation: 256M
- cpus: 2

## Result

| Method                  | Ops/Sec           | %      | Runs              |
| ----------------------- | ----------------- | ------ | ----------------- |
| _forEach + delete_      | _60,864 ops/sec_  | ±1.29% | (90 runs sampled) |
| _map + content null_    | _60,978 ops/sec_  | ±1.04% | (91 runs sampled) |
| _reduce + content null_ | _63,749 ops/sec_  | ±0.93% | (92 runs sampled) |
| _map + delete_          | _199,039 ops/sec_ | ±1.12% | (94 runs sampled) |
| _forOf + delete_        | _244,087 ops/sec_ | ±1.19% | (93 runs sampled) |
| _reduce + push_         | _334,785 ops/sec_ | ±1.43% | (90 runs sampled) |
| _forEach + push_        | _339,256 ops/sec_ | ±1.24% | (89 runs sampled) |
| _forOf + push_          | _428,001 ops/sec_ | ±1.58% | (85 runs sampled) |

:tada: Fastest is _forof + push_ :tada:
