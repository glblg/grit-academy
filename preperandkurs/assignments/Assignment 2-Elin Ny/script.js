let loop = []; //Här deklarear jag en array.
for (let count = 1; count <= 10; count++) {
    /*Här lägger jag till variabler i en for loop.
Jag gör count till lika med ett för att det första värdet ska bli ett ojämt nummer, dvs 1 istället för 0.*/
    if (count % 2 == 1) {
        //Här påbörjar jag en if sats. Mod räknar ut ifall count är ett jämt eller ickejämt tal.
        loop.push("O"); //Här har jag lagt till att om talet i count blir ojämt så lägger jag till ett element som skriver ut O.
    } else {
        loop.push("X"); //Här har jag lagt till en push på allt annat, dvs jämt tal. Alltså ska ett X skrivas ut.
    }
}
loop[4] = "Q"; //Här hämtar jag det femte elementet i min array och anger ett nytt värde som ska bli Q.

console.log(loop.join("")); //Här skriver jag ut värdet i min array loop, som en string.
/*------------------------------------------------------------2b------------------------------------------------------------------------*/
let array = []; //Här deklarear jag en array.
let randomInt; //Här deklarerar jag en variabel.
for (let count = 0; count <= 19; count++) {
    //Här skapar jag min först for-loop som säger att den ska loopa 20 gånger räknat från 0.
    array.push("O"); // Här lägger jag till att den ska addera O på sista platsen i array.
    randomInt = Math.floor(Math.random() * 5 + 1); //Tilldelar min variabel jag skapade ett värde som ska bli ett slumpat tal från 1-5.

    for (let count2 = 0; count2 <= randomInt; count2++) {
        //I min andra for-loop så säger jag att den ska loopa upp till så många gånger som mitt slumpade tal motsvarar.
        array.push(" "); //Med array.push säger jag åt att den ska lägga till ett mellanslag på sista plasten i min array så många gånger som talet som slumpats fram i min for-loop.
    }
}
console.log(array.join("")); //Här skriver jag ut värdet i min array loop, som en string.
/*------------------------------------------------------------2c-------------------------------------------------------------------------*/
let cityNames = [
    "kiruna",
    "uppsala",
    "malmo",
    "gothenburg",
    "stockholm",
]; //Jag deklarerar en array som jag tilldelar innhåll med fem objekt i form av stadsnamn.
let city; //Här deklarerar jag en variabel.

for (let count = 0; count < cityNames.length; count++) {
    //I denna for-loopen så loopar den lika många gånger som antalet objekt som finns i min array, dvs 5.

    city = cityNames[count]; //Här tilldelar jag min variabel med ett värde från cityNames. Count variabeln används för att hämta rätt värde.

    for (var count2 = 0; count2 < city.length; count2++) {
        // I den andra for-loopen räknar den hur många tecken varje objekt innehåller.
        console.log(city.charAt(count2)); // här skrivs varje tecken ut i konsolen som med hjälp av variabeln count2.
    }
}