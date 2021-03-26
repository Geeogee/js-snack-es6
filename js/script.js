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

// Creare un array di oggetti di squadre di calcio. 
// Ogni squadra avrà diverse proprietà: 
// nome, punti fatti, falli subiti.
// Nome sarà l'unica proprietà da compilare, 
// le altre saranno tutte settate a 0.

function genRandomValue(min,max) {

    var rndMin = min;
    var rndMax = max - min + 1;

    var rndNum = Math.floor(Math.random() * rndMax) + rndMin;

    return rndNum;
}

function exercise2() {

    const TEAMS = [
        {
            "name" : "U.S. Matinum",
            "points" : 0,
            "fouls" : 0
        },

        {
            "name" : "Selecao",
            "points" : 0,
            "fouls" : 0
        },

        {
            "name" : "U.S. Foggia",
            "points" : 0,
            "fouls" : 0
        },

        {
            "name" : "Donia Calcio",
            "points" : 0,
            "fouls" : 0
        },

        {
            "name" : "Atletico Vieste",
            "points" : 0,
            "fouls" : 0
        },  
    ];

    // Generare numeri random al posto degli 0 nelle proprietà:
    // punti fatti e falli subiti
    
    for (let i=0; i<TEAMS.length; i++) {

        var TEAM = TEAMS[i];
        TEAM["points"] = genRandomValue(0,100);
        TEAM["fouls"] = genRandomValue(0,10);
    }

    console.log(TEAMS);
}

function init() {

    // exercise1();
    exercise2();
}

document.addEventListener("DOMContentLoaded", init());
