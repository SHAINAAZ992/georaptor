GeoRaptor: Nodejs Geohash Compression Tool
==========================================

Geohash is a geocoding system invented by Gustavo Niemeyer and placed into the public domain. It is a hierarchical spatial data structure which subdivides space into buckets of grid shape, which is one of the many applications of what is known as a Z-order curve, and generally space-filling curves.

Geohash creation for a polygon at a given precision level could result in a huge set of geohashes.

GeoRaptor creates the best combination of geohashes across various levels to represent a polygon, by starting from the highest level and iterating till the optimal blend is brewed. Result accuracy remains the same as that of the starting geohash level, but data size reduces considerably for large polygons, thereby improving speed and performance.

Following is a sample of what georaptor does

 ## Image without georaptor compression :

  ![proximity1](https://user-images.githubusercontent.com/16045606/33555955-4d567c40-d928-11e7-91bf-e8edb0e581ac.png)

 ## Image with georaptor compression (no hash approximation) :

  ![screen shot 2017-12-04 at 7 39 45 pm](https://user-images.githubusercontent.com/16045606/33556732-f406252a-d92a-11e7-9f09-1120b82d7317.png)


 ## Image with georaptor compression and hash approximation :

   ![screen shot 2017-12-04 at 7 19 41 pm](https://user-images.githubusercontent.com/16045606/33555977-6a14f5dc-d928-11e7-9af1-4bc671422cb5.png)



*hash count when georaptorFlag set to false :* 2264 geohashes at precision 7 for Bangalore.

*hash count when georaptorFlag set to true and approxHashCount set to false :* 271 geohashes with a mix of precision 6 and 7.

*hash count when georaptorFlag set to true and approxHashCount set to true :* 103 geohashes with a mix of precision 6 and 7.

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