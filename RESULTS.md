# Foreword

All results reported in operations per second, with ensured statistical
significance. Suite handling done by [Benchmark.js].

[Benchmark.js]: https://benchmarkjs.com
[helper]: https://github.com/helperdiscord
[Kludge Cyber Systems]: https://github.com/kludge-cs

# Results

|      CPU      |   Governor  |         Fastest         |       `got`         |     `request`       |    `node-fetch`     |      `centra`       |      `https`         |        `petitio`        |
|:-------------:|:-----------:|:-----------------------:|:-------------------:|:-------------------:|:-------------------:|:-------------------:|:--------------------:|:-----------------------:|
| [i7-7700k][1] | Performance | `petitio (undici)`      | 2,119 ±4.93% (70)   | 5,786 ±6.52% (69)   | 6,011 ±3.94% (70)   | 9,245 ±4.46% (74)   | 10,275 ±0.84% (83)   | 16,349 ±2.44% (85)      |
| [i7-6600U][2] | Performance | `petitio (undici)`      | 1,913 ±0.54% (2073) | 4,738 ±0.59% (2068) | 4,393 ±0.56% (2072) | 5,800 ±0.92% (2068) | 5,912  ±0.55% (2071) | 13,088 ±0.54% (2074)    |

[1]: https://github.com/tbnritzdoge
[2]: https://github.com/nytelife26
 
