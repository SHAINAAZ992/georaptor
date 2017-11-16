GeoRaptor: Nodejs Geohash Compression Tool
==========================================

Geohash is a geocoding system invented by Gustavo Niemeyer and placed into the public domain. It is a hierarchical spatial data structure which subdivides space into buckets of grid shape, which is one of the many applications of what is known as a Z-order curve, and generally space-filling curves.

Geohash creation for a polygon at a given precision level could result in a huge set of geohashes.

GeoRaptor creates the best combination of geohashes across various levels to represent a polygon, by starting from the highest level and iterating till the optimal blend is brewed. Result accuracy remains the same as that of the starting geohash level, but data size reduces considerably for large polygons, thereby improving speed and performance.

Following is a sample of what georaptor does

 image: https://raw.github.com/ashwin711/georaptor/master/images/sgp_input.png
 image:  https://raw.github.com/ashwin711/georaptor/master/images/sgp_output.png


*Input:* 1096 geohashes at precision 6 for Singapore.

*Output:* 414 geohashes with a mix of precision 5 and 6.

## Credits

    https://github.com/ashwin711/georaptor

## Installation

```bash
npm install georaptor
```


### API


```js
var georaptor = require('georaptor');

let compressedHashes = georaptor.compress(new Set(["tdr1qr9","tdr1qr9","tdr1qz8","tdr1qz8","tdr1qr9","tdr1qr9","tdr1qz8"]),
1,12,false);

```