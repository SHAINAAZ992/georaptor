"use strict";

function getCombinations(string) {
    let base32 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'm',
        'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    return base32.reduce((acc, present, index) => {
        acc.push("" + string + present);
        return acc;
    }, []);
}

function isSuperset(superset, subset,approxHashesCount) {
    let count=0;
    for (var elem of subset) {
        if (superset.has(elem)) {
            count++;
        }
        else {
            if(!approxHashesCount){
                return false;
            }
        }

    }
    if(approxHashesCount == true && count>27){
        return true;
    }
    else {
        return false;
    }

}

function unionset(set1, set2) {
    var union = new Set(set1);
    for (var elem of set2) {
        union.add(elem);
    }
    return union;
}

exports.compress = function (geohashes, minlevel, maxlevel,approxHashesCount) {
    console.log("begin "+approxHashesCount);
    let geoHashesGlobal = geohashes;
    let deletegh = new Set();
    let finalGeohashes = new Set();
    let flag = true;
    let finalGeohashesSize = 0;

    if (geohashes && geohashes.size == 0) {
        console.log("No geohashes found!\n'");
        return false;
    }
    while (flag == true) {
        finalGeohashes.clear();
        deletegh.clear();
        geohashes.forEach((present) => {

            let geohashLength = present.length;

            if (geohashLength >= minlevel) {
                let part = present.slice(0, -1);
                if (!deletegh.has(part) && !deletegh.has(present)) {
                    let combinations = new Set(getCombinations(part));

                    if (isSuperset(geoHashesGlobal, combinations,approxHashesCount)) {
                        finalGeohashes.add(part);
                        deletegh.add(part);
                    }
                    else {
                        deletegh.add(present);


                        if (geohashLength >= maxlevel) {
                            finalGeohashes.add(present.slice(0, -maxlevel));
                        }
                        else {
                            finalGeohashes.add(present);
                        }
                    }

                    if (finalGeohashesSize == finalGeohashes.size) {
                        flag = false;
                    }
                }
            }
        });

        finalGeohashesSize = finalGeohashes.size;
        geohashes.clear();
        geohashes = unionset(geohashes, finalGeohashes);
    }
    
    if(geohashes!=false){
        let finalOutput = [];
        geohashes.forEach(present => {
            finalOutput.push(present);
        });
        return finalOutput;
    }
};