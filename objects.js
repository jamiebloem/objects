/* Opdracht 1 */
// Bekijk het volgende object:
const product = {
    productName: "Smeg Waterkoker",
    series: "Smeg jaren 50 retro lijn",
    material: ["roestvrijstaal", "kunststof"],
    color: "creme",
    wireless: false,
    "b-h-d": "17 x 24,6 x 22,3 cm",
};
// 1a. Log de naam van de serie in de console.
console.log(product.series)
// 1b. Verander de kleur van het product in "Roze" en log het object in de console
product.color = "Roze"
console.log(product.color)
// 1c. Log de tweede materiaalsoort ("kunststof") in de console
console.log(product.material[1])
// 1d. Log de afmetingen (b-h-d) in de console
console.log(product["b-h-d"])

/* Opdracht 2 */
// Schrijf een losstaande functie die bovenstaand object verwacht. De functie gebruikt de naam van het product
// en haar materialen om een string terug te geven die het product beschrijft
// ---- Verwachte uitkomst:
// "De Smeg Waterkoker is gemaakt van roestvrijstaal en kunststof"

function getDescription(productObject) {
    return 'De ' + product.productName + ' is gemaakt van ' + product.material[0] + " en " + product.material[1];
}
console.log(getDescription(product))
/* Opdracht 3 */
// Maak een object met daarin jouw voornaam (string), achternaam (string),
// leeftijd (getal) en geboortedatum (date object). De datum hoeft niet geformat te worden.
// Log dit in de console.
const Person = {
    fistName: 'Jamie',
    lastname: 'Bloem',
    age: 28,
    dateOfBirth: new Date(1992, 8, 25)
}
console.log(Person)

/* Opdracht */
// Schrijf een losstaande functie die bovenstaand object verwacht.
// De functie geeft een string terug die de leeftijd toelicht
// ---- Verwachte uitkomsten:
// { age: 27 } geeft "Jij bent 27 jaar oud."
// { age: 56 } geeft "Jij bent 56 jaar oud."
function yourAge(age) {
    return "Jij bent " + Person.age + ' jaar oud.'
 }
const myAge = yourAge(Person);
console.log(myAge)