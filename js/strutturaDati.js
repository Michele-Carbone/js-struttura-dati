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

const cardMagic = {
    id: 1, //id dell Oggetto per il database
    name: 'Grizzly Bears',  // nome della carta
    launchCost: ['6', 'R', 'r'],    // Costo di lancio
    convertedManaCost: 12,  //CMC costo di mema convertito
    cardType: 'Stregonerie',     //tipologia della carta (terre, creature, incantesimi, artefatti, istantanei e stregonerie)
    subType: 'Bear',    //specifiche aggiuntive della carta

    expansion: {    //estensioni della carta
        reprintingId: 12, //ristampa con codice per le estensioni della carta
        name: 'Incantesimo Indotto',
        rarity: 'gold',
        symbol: 'Forziere',
        collectionNumber: 8,
        totalCard: 18
    },

    flavorText: { //informazione sulla carta
        informationCard: 'Assorbe gli incantesimi',
        author: 'Orso polare',
    },

    abilities: [ //abilita' della carta
        {
            launchCost: ['W', 'G', 'T'],
            descripition: 'Lancio della palla di fuoco',
        },
        {
            launchCost: ['T', 'A'],
            descripition: 'Bariera di fuoco',
        }
    ],

    collectionNumber: '123/89',  //numero della collezione appartenente
    constitution: 13,
    strength: 12,
    borderColor: '#000',    //colore del bordo

    illustration: {
        author: {   //nome dell'illustratore della carta
            id: 1,
            name: 'George Michael',
        },
        source: '..img/figur.jpg',
    },

    background: {
        color: 'black',
        source: '..img/figur.jpg',
    }
}


console.log(cardMagic);

//STAMPA IN PAGINA
const cardSection = document.getElementById('cards');

//Abilita' della carta se e' presente oppure no
let abilitiesContent = '<em>Nessuna abilità della carta</em>';
if (cardMagic.abilities.length > 0) {
    abilitiesContent = '<ul>';
    //ciclo for per prendere tutti gli elementi dell'oggetto
    for (let i = 0; i < cardMagic.abilities.length; i++) {
        const currentAbility = cardMagic.abilities[i];
        abilitiesContent += `<li>Costo di Lancio: ${currentAbility.launchCost.join(', ')}</li>`;
        abilitiesContent += `<li>Descrizione: ${currentAbility.descripition}</li>`;
    }
    abilitiesContent += '</ul>';
}


let cardTemplate = `
<ul class = "card">
    <li>Id: ${cardMagic.id}</li>
    <li>Name: ${cardMagic.name}</li>
    <li>Costo di lancio: ${cardMagic.launchCost.join(', ')}</li>
    <li>Costo di Mana convertito: ${cardMagic.convertedManaCost}</li>
    <li>Tipo Carta: ${cardMagic.cardType} ${'- ' + cardMagic.subType}</li>
    <li>Espansione:
    <ul>
        <li>Rispampa: ${cardMagic.expansion.reprintingId}</li>
        <li>Nome: ${cardMagic.expansion.name}</li>
        <li>Rarita': ${cardMagic.expansion.rarity}</li>
        <li>Simbolo: ${cardMagic.expansion.symbol}</li>
        <li>Numero Collezione: ${cardMagic.expansion.collectionNumber} / ${cardMagic.expansion.totalCard}</li>
    </ul>
    </li>
    <li>Colore del Testo: ${cardMagic.flavorText.informationCard} - ${cardMagic.flavorText.author}</li>
    <li><strong>Abilita':</strong>${abilitiesContent}</li>
    <li>Costituzione: ${cardMagic.constitution}</li>
    <li>Forza: ${cardMagic.strength}</li>
    <li>Colore Bordo: ${cardMagic.borderColor}</li>
    <li>Illustrazione: 
    <ul>
        <li>Autore: ${cardMagic.illustration.author.name} (id: ${cardMagic.illustration.author.id})</li>
        <li>Link illustrazione: ${cardMagic.illustration.source}</li>
    </ul>
    </li>
    <li>Colore di sfondo: 
    <ul>
        <li>Colore: ${cardMagic.background.color}</li>
        <li>Link illustrazione: ${cardMagic.background.source}</li>
    </ul>
</ul>
`;


cardSection.innerHTML = cardTemplate;

