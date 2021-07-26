/*
CARTE MAGIC
Descrizione:
Proviamo a ripetere quanto visto in classe, creando la struttura che riteniamo più adeguata per rappresentare una carta di Magic.
Una volta definita la struttura, stampiamo sulla pagina HTML tutte le informazioni 
relative alla carta stessa, senza particolare attenzione a dettagli grafici (va bene una lista coi tag UL e LI)
*/

/*SECONDA PARTE
Completiamo il nostro archivio delle carte aggiungendo i seguenti step:
1- Creiamo un mazzo di carte
2- Stampiamo tutte  le carte su schermo
3- Aggiungiamo un piccolo form in HTML
4- Ragioniamo pian pianino sulla logica dei filtri

IMPORTANTE
Siccome siete stati troppo bravi a creare un oggetto card molto complesso, è molto complicato riuscire a filtrare tutte le proprietà.
PERTANTO IL MINIMO RICHIESTO E':
 - Filtrare prima le proprietà con valori semplici (stringhe o numeri)
 - Filtrare le proprietà il cui valore è un array di stringhe
BONUS:
Far sì che se filtro una proprietà con valore stringa, riesca a mostrare la carta anche se non scrivo il suo testo interamente (es: cerco il nome digitando "creat" e riesco a trovare nei risultati le carte che hanno nel nome "creatura")
Filtrare anche altre proprietà i cui valori sono più complessi, se ne avete (oggetti, array di oggetti)


*/

const deck = [
    {
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
    },
    {
        id: 2,
        name: 'Grizzly Bears',
        launchCost: ['10', 'R',],
        convertedManaCost: 11,
        cardType: 'Incantatore',
        subType: 'Man',

        expansion: {
            reprintingId: 12,
            name: 'Incantesimo',
            rarity: 'Blue',
            symbol: 'Forziere',
            collectionNumber: 10,
            totalCard: 40
        },

        flavorText: {
            informationCard: 'Contrattacco',
            author: 'Mago',
        },

        collectionNumber: '1/50',
        constitution: 20,
        strength: 50,
        borderColor: '#015',

        illustration: {
            author: {
                id: 1,
                name: 'Filip Pino',
            },
            source: '..img/figur.jpg',
        },

        background: {
            color: 'Blue',
            source: '..img/figur.jpg',
        }
    },
    {
        id: 3,
        name: 'Happy Day',
        launchCost: ['1', 'r',],
        convertedManaCost: 2,
        cardType: 'Creatura',
        subType: 'Lion',

        expansion: {
            reprintingId: 12,
            name: 'Gigante',
            rarity: 'White',
            symbol: 'Quadrato',
            collectionNumber: 5,
            totalCard: 30
        },

        flavorText: {
            informationCard: 'Assorbe gli attacchi',
            author: 'Bambola Assasina',
        },

        abilities: [
            {
                launchCost: ['C', 'B'],
                descripition: 'Pugno Mortale',
            }
        ],

        collectionNumber: '162/200',
        constitution: 60,
        strength: 80,
        borderColor: '#560',

        illustration: {
            author: {
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
];

//console.log(deck);

//FUNZIONE
const createCardTemplate = (cardMagic) => {
    //Abilita' della carta se e' presente oppure no
    let abilitiesContent = '<em>Nessuna abilità della carta</em>';
    if (cardMagic.abilities) {
        abilitiesContent = '<ul>';
        //ciclo for per prendere tutti gli elementi dell'oggetto
        for (let i = 0; i < cardMagic.abilities.length; i++) {
            const currentAbility = cardMagic.abilities[i];
            abilitiesContent += `<li>Costo di Lancio: ${currentAbility.launchCost.join(', ')}</li>`;
            abilitiesContent += `<li>Descrizione: ${currentAbility.descripition}</li>`;
        }
        abilitiesContent += '</ul>';
    }


    const cardTemplate = `
    <ul class = "card">
        <li><strong>Id:</strong> ${cardMagic.id}</li>
        <li><strong>Name:</strong> ${cardMagic.name}</li>
        <li><strong>Costo di lancio:</strong> ${cardMagic.launchCost.join(', ')}</li>
        <li><strong>Costo di Mana convertito:</strong> ${cardMagic.convertedManaCost}</li>
        <li><strong>Tipo Carta:</strong> ${cardMagic.cardType} ${'- ' + cardMagic.subType}</li>
        <li><strong>Espansione:</strong>
            <ul>
                <li>Rispampa: ${cardMagic.expansion.reprintingId}</li>
                <li>Nome: ${cardMagic.expansion.name}</li>
                <li>Rarita': ${cardMagic.expansion.rarity}</li>
                <li>Simbolo: ${cardMagic.expansion.symbol}</li>
                <li>Numero Collezione: ${cardMagic.expansion.collectionNumber} / ${cardMagic.expansion.totalCard}</li>
            </ul>
        </li>
        <li><strong>Colore del Testo:</strong> ${cardMagic.flavorText.informationCard} - ${cardMagic.flavorText.author}</li>
        <li><strong>Abilita':</strong>${abilitiesContent}</li>
        <li><strong>Costituzione:</strong> ${cardMagic.constitution}</li>
        <li><strong>Forza:</strong> ${cardMagic.strength}</li>
        <li><strong>Colore Bordo:</strong> ${cardMagic.borderColor}</li>
        <li><strong>Illustrazione:</strong> 
            <ul>
                <li>Autore: ${cardMagic.illustration.author.name} (id: ${cardMagic.illustration.author.id})</li>
                <li>Link illustrazione: ${cardMagic.illustration.source}</li>
            </ul>
        </li>
        <li><strong>Colore di sfondo:</strong> 
            <ul>
                <li>Colore: ${cardMagic.background.color}</li>
                <li>Link illustrazione: ${cardMagic.background.source}</li>
            </ul>
        </li>
    </ul>
    `;

    return cardTemplate;
}



//STAMPA IN PAGINA
const cardSection = document.getElementById('cards');


let deckTemplate = '';
for (let i = 0; i < deck.length; i++) {
    //carta corrente
    const currentCard = deck[i];
    deckTemplate += createCardTemplate(currentCard);
}



//const cardTemplate = createCardTemplate(cardMagic)


cardSection.innerHTML = deckTemplate;






