// Creare un array di oggetti: ogni oggetto descriverà 
// una bici da corsa con le seguenti proprietà: nome e peso. 
// Stampare a schermo la bici con peso minore.

function exercise1() {

    const BICYCLES = [
        {
            "name" : "SuperBike",
            "weight" : 500
        },

        {
            "name" : "IperBike",
            "weight" : 1000
        },

        {
            "name" : "MegaBike",
            "weight" : 200
        },

        {
            "name" : "IperBike",
            "weight" : 100
        }
    ];

    let lighterBicycle = {

        "name" : "",
        "weight" : Number.MAX_SAFE_INTEGER
    };

    for (let i=0; i<BICYCLES.length; i++) {

        const BICYCLE = BICYCLES[i];
        let { weight } = BICYCLE;

        if (weight < lighterBicycle["weight"]) {
          
            lighterBicycle = BICYCLE;
        }
    }

    console.log(lighterBicycle)

}

function init() {

    exercise1();
}

document.addEventListener("DOMContentLoaded", init());
