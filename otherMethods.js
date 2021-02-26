/* Opdracht 1 */
// Schrijf een functie die de diameter van een cirkel verwacht als parameter en
// de omtrek van die cirkel bererekent en teruggeeft
// tip: PI * diameter
// ---- Verwachte uitkomsten:
// 4 geeft 12.566370614359172
// 12 geeft 37.69911184307752
function getValue(diameter) {
    return Math.PI * diameter;
}
const sum = getValue(4)
const secondSum = getValue(12)
console.log(sum)
console.log(secondSum)

/* Opdracht 2 */
// Schrijf bovenstaande functie nogmaals, maar zorg er nu voor dat de uitkomst wordt afgerond
// ---- Verwachte uitkomsten:
// 4 geeft 13
// 12 geeft 38
function getRoundValue(diameter) {
    const mathPI = Math.PI * diameter;
    return Math.round(mathPI)
}
console.log(getRoundValue(4))
console.log(getRoundValue(12))
/* Opdracht 3 */
// Schrijf een functie die het laatste karakter in een string teruggeeft
// ---- Verwachte uitkomsten:
// "vermicelli" geeft "i"
// "kroepoek" geeft "k"
function returnLastCaracter(string) {
    return string.charAt(string.length - 1);

}
console.log(returnLastCaracter('vermicelli'))
console.log(returnLastCaracter('kroepoek'))

function lastCharacter(word) {
    const index = word.length - 1;
    return word.charAt(index);
}

/* Opdracht 4 */
// Schrijf een functie die een array maakt van alle woorden in een zin, maar wanneer er
// spaties aan het begin of einde van de zin staan, deze niet in de array zet.
// ---- Verwachte uitkomsten:
// " De pot verwijt de ketel dat hij zwart ziet" geeft ['De', 'pot', 'verwijt', 'de', 'ketel', 'dat', 'hij', 'zwart', 'ziet'];
// "Niet geschoten is altijd mis " geeft [ 'Niet', 'geschoten', 'is', 'altijd', 'mis' ];
function makeArray(sentence) {
    return sentence.trim().split(" ")
}
console.log(makeArray(' Hallo, ik ben daar '));

/* Opdracht 5 */
// Maak een variabele today aan en sla daar een nieuw date-object in op
// Print in de console (in nummers) in welke maand we nu zitten
// Print in de console (in nummers) welk uur van de dag het is
const today = new Date()
console.log(today.getMonth())
console.log(today.getHours())
/* BONUS OPDRACHT (als je tijd over hebt) */
// Schrijf een functie die twee strings als parameters verwacht en de langste naam teruggeeft.
// als de namen beide even lang zijn geeft hij de string "Beide namen zijn even lang" terug
// ---- Verwachte uitkomsten:
// "Nick", "Nova" geeft "Beide namen zijn even lang"
// "Mitchel", "Nick" geeft "Mitchel"
function longestName(string1, string2) {
    if (string1.length > string2.length) {
        return string1
    }
    if (string1.length > string2.length)  {
        return string2
    }
        if (string1.length === string2.length) {
        return "Beide namen zijn even lang"
    }
}
console.log(longestName('Nick', 'Nova'))
console.log(longestName('Mitchel', 'Nick'))

