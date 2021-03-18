# bench-centra
 
basic fork of [this](https://github.com/sindresorhus/got/tree/main/benchmark) with more libraries, thanks to [sindresorhus](https://github.com/sindresorhus) for creating it

```
Results (i7-7700k, CPU governor: performance):

got - promise x 2,770 ops/sec ±6.67% (71 runs sampled)
request - callback x 4,888 ops/sec ±7.46% (74 runs sampled)
node-fetch - promise x 5,457 ops/sec ±3.33% (74 runs sampled)
centra - promise x 8,263 ops/sec ±2.10% (84 runs sampled)
https - stream x 7,453 ops/sec ±3.19% (78 runs sampled)
@helperdiscord/centra - promise x 8,202 ops/sec ±1.30% (82 runs sampled)
Fastest is @helperdiscord/centra - promise
```
