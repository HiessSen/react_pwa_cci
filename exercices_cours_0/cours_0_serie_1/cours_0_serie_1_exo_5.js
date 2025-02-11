function add(...nombre) {
    let resultat = nombre.reduce((somme, courant) => somme + courant, 0);
    return resultat;
}
function add2(...nombres) {
    let resultat = 0
    for (const nombre of nombres) {
        resultat += nombre;
    }
    return resultat;
}
console.log ('Reducer : ' + add(5, 5, 5));
console.log ('For of : ' + add2(5, 5, 5));