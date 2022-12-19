// Inserisci l'età
const _YearsOld = prompt('Inserisci la tua età');

// Inserisci i chilometri
const _Kilometers = prompt('Inserisci i km')

// Prezzo
let _Price = (0.21 * _Kilometers);

if (_YearsOld < 18) {

    let _Discount = ((_Price / 100) * 20);
    _Price = _Price - _Discount;
    console.log('Hai meno di 18 anni, il prezzo originale è decurtato del 20%:' + '_Price');

} else if (_YearsOld >= 65) {

    let _Discount = ((_Price / 100) * 20);
    _Price = _Price - _Discount;
    console.log('Hai più di 65 anni, il prezzo originale è decurtato del 40%:' + '_Price');

} else {
    console.log('Il prezzo originale è: ' + _Price);
}



