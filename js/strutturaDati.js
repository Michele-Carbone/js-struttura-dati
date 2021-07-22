/*
CARTE MAGIC
Descrizione:
Proviamo a ripetere quanto visto in classe, creando la struttura che riteniamo più adeguata per rappresentare una carta di Magic.
Una volta definita la struttura, stampiamo sulla pagina HTML tutte le informazioni 
relative alla carta stessa, senza particolare attenzione a dettagli grafici (va bene una lista coi tag UL e LI)
*/

/*
1- Creo un un Ogetto per la carta di magic

*/

var cardMagic = {
    id = 1, //id dell Oggetto per il database
    name: 'Grizzly Bears',  // nome della carta
    launchCost: ['6', 'R', 'r'],    // Costo di lancio
    convertedManaCost: 12,  //CMC costo di mema convertito
    cardType: 'Stregonerie',     //tipologia della carta (terre, creature, incantesimi, artefatti, istantanei e stregonerie)
    subType: 'Bear',    //specifiche aggiuntive della carta
    expansion: {
        reprintingId: 12, //ristampa con codice per le estensioni della carta
        name: 'Incantesimo Indotto',
        rarity: 'gold',
        symbol: 'Forziere',
        collectionNumber: 8
    },
    flavorText: {
        informatioCard: 'Assorbe gli incantesimi',
        author: 'Orso polare',
    },
    abilities: [

    ]
}