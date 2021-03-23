# Foreword

All results reported in operations per second, with ensured statistical
significance. Suite handling done by [Benchmark.js]. Suite hardened and
certified for usage by [helper] and [Kludge Cyber Systems].

[Benchmark.js]: https://benchmarkjs.com
[helper]: https://github.com/helperdiscord
[Kludge Cyber Systems]: https://github.com/kludge-cs

# Results

|      CPU      |   Governor  |         Fastest         |       `got`         |     `request`       |    `node-fetch`     |      `centra`       |      `https`        | `petitio`               |
|:-------------:|:-----------:|:-----------------------:|:-------------------:|:-------------------:|:-------------------:|:-------------------:|:-------------------:|:-----------------------:|
| [i7-7700k][1] | Performance | `petitio`               | 2,119 ±4.93% (70)   | 5,786 ±6.52% (69)   | 6,011 ±3.94% (70)   | 9,245 ±4.46% (74)   | 10,275 ±0.84% (83)  | 16,349 ±2.44% (85)      |
| [i7-6600U][2] | Performance | `@helperdiscord/centra` | 1,977 ±0.63% (2074) | 2,854 ±1.23% (2063) | 3,017 ±1.21% (2068) | 3,956 ±1.95% (2063) | 4,588 ±0.68% (2064) | 4,962 ±0.67% (2063)     |

[1]: https://github.com/tbnritzdoge
[2]: https://github.com/nytelife26
 