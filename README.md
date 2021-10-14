# HTTP Library Benchmarks


## [results][results]

![benchmarks](https://edge.doge.bio/bar/eyJ0aXRsZSI6InJlcS9zIGhpZ2hlciBpcyBiZXR0ZXIiLCJsZWdlbmQiOlt7Im5hbWUiOiJwZXRpdGlvIiwiY29sb3IiOjM2Mzg3NTgzfSx7Im5hbWUiOiJheGlvcyIsImNvbG9yIjo1MjgxMjUxODN9LHsibmFtZSI6ImdvdCIsImNvbG9yIjotMTA3NjEwMzE2OX0seyJuYW1lIjoicmVxdWVzdCIsImNvbG9yIjotNTA1MDIzNzQ1fSx7Im5hbWUiOiJjZW50cmEiLCJjb2xvciI6MTQwMzEyMjQzMX0seyJuYW1lIjoiaHR0cCIsImNvbG9yIjoxNDAzMDk4MTExfV0sInBvaW50cyI6W3sibmFtZSI6ImVtcHR5IHJlc3BvbnNlIiwic2NvcmVzIjpbMTY1MTIsNTA1MywzNTkwLDYwMDYsOTMzMiw5NDExXX0seyJuYW1lIjoiMiBNaUIgcmVzcG9uc2UiLCJzY29yZXMiOls0MjAsMjYyLDIzNCwyNDIsOTAsNDA2XX1dfQ==.png)

|      CPU      |   Governor  |         Fastest         |       [`got`][got]         |     [`request`][request]       |    [`node-fetch`][node_fetch]     |      [`centra`][centra]       |      [`http`][http]          |        [`petitio`][petitio]        |
|:-------------:|:-----------:|:-----------------------:|:-------------------:|:-------------------:|:-------------------:|:-------------------:|:--------------------:|:-----------------------:|
| [i7-7700k][1] | Performance | `petitio`               | 2,119 ±4.93% (70)   | 5,786 ±6.52% (69)   | 6,011 ±3.94% (70)   | 9,245 ±4.46% (74)   | 10,275 ±0.84% (83)   | 16,349 ±2.44% (85)      |
| [i7-6600U][2] | Performance | `petitio`               | 1,913 ±0.54% (2073) | 4,738 ±0.59% (2068) | 4,393 ±0.56% (2072) | 5,800 ±0.92% (2068) | 5,912  ±0.55% (2071) | 13,088 ±0.54% (2074)    |

[1]: https://github.com/tbnritzdoge
[2]: https://github.com/nytelife26
[results]: RESULTS.md

[got]: https://npmjs.com/got
[request]: https://npmjs.com/request
[node_fetch]: https://npmjs.com/node-fetch
[centra]: https://npmjs.com/centra
[http]: https://nodejs.org/api/http.html
[petitio]: https://npmjs.com/petitio

## License

GNU GPLv3 © [doge](https://github.com/tbnritzdoge) & [tyler](https://github.com/nytelife26)
