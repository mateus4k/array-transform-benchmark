# Array Transform Benchmark

Test case: remove the `content` property from all items in the array

## Scenario

- 50 arrays of objects
- Object structure:

```json
{
  "filename": "[number]-filename",
  "content": "[17Mb file]"
}
```

## Environment:

- node:8.4.0-alpine
- mem_limit: 256m
- mem_reservation: 124M
- cpus: 1

## Result

Fastest is _for + push_ 🎉

| Method                  | Ops/Sec | %      | Runs            |
| ----------------------- | ------- | ------ | --------------- |
| _for + push_            | 435,730 | ±1.08% | 94 runs sampled |
| _forOf + push_          | 401,339 | ±1.59% | 84 runs sampled |
| _reduce + push_         | 329,749 | ±1.00% | 82 runs sampled |
| _forEach + push_        | 315,138 | ±2.37% | 84 runs sampled |
| _for + delete_          | 229,936 | ±2.97% | 85 runs sampled |
| _forOf + delete_        | 228,403 | ±1.62% | 92 runs sampled |
| _map + delete_          | 193,122 | ±1.55% | 90 runs sampled |
| _reduce + content null_ | 62,028  | ±1.16% | 89 runs sampled |
| _map + content null_    | 59,950  | ±1.49% | 84 runs sampled |
| _forEach + delete_      | 57,452  | ±2.15% | 83 runs sampled |

## Usage

```bash
docker-compose up --build
```
