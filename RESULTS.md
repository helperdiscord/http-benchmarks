# Foreword

All results reported in operations per second, with ensured statistical
significance. Suite handling done by [Benchmark.js]. Suite hardened and
certified for usage by [helper] and [Kludge Cyber Systems].

[Benchmark.js]: https://benchmarkjs.com
[helper]: https://github.com/helperdiscord
[Kludge Cyber Systems]: https://github.com/kludge-cs

# Results

|      CPU      |   Governor  |         Fastest         |       `got`         |     `request`       |    `node-fetch`     |      `centra`       |      `https`        | `@helperdiscord/centra` |
|:-------------:|:-----------:|:-----------------------:|:-------------------:|:-------------------:|:-------------------:|:-------------------:|:-------------------:|:-----------------------:|
| [i7-7700k][1] | Performance | `@helperdiscord/centra` |  2,770 ±6.67% (71)  |  4,888 ±7.46% (74)  |  5,457 ±3.33% (74)  |  8,263 ±2.10% (84)  |  7,453 ±3.19% (78)  |    8,202 ±1.30% (82)    |
| [i7-6600U][2] | Performance | `@helperdiscord/centra` | 1,977 ±0.63% (2074) | 2,854 ±1.23% (2063) | 3,017 ±1.21% (2068) | 3,956 ±1.95% (2063) | 4,588 ±0.68% (2064) |   4,962 ±0.67% (2063)   |

[1]: https://github.com/tbnritzdoge
[2]: https://github.com/nytelife26
