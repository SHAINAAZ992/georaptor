GeoRaptor: Nodejs Geohash Compression Tool
==========================================

Geohash is a geocoding system invented by Gustavo Niemeyer and placed into the public domain. It is a hierarchical spatial data structure which subdivides space into buckets of grid shape, which is one of the many applications of what is known as a Z-order curve, and generally space-filling curves.

Geohash creation for a polygon at a given precision level could result in a huge set of geohashes.

GeoRaptor creates the best combination of geohashes across various levels to represent a polygon, by starting from the highest level and iterating till the optimal blend is brewed. Result accuracy remains the same as that of the starting geohash level, but data size reduces considerably for large polygons, thereby improving speed and performance.

Following is a sample of what georaptor does

 image before approximating hashes : ![proximity1](https://user-images.githubusercontent.com/16045606/33555955-4d567c40-d928-11e7-91bf-e8edb0e581ac.png)
 image after approximating hashes :  ![screen shot 2017-12-04 at 7 19 41 pm](https://user-images.githubusercontent.com/16045606/33555977-6a14f5dc-d928-11e7-9af1-4bc671422cb5.png)



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

let compressedHashes = georaptor.compress(new Set(["tdr1qr9","tdr1qr9","tdr1qz8","tdr1qz8"]),
1,12,false);

```