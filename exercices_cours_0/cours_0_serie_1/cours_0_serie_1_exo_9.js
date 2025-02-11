fetch('https://kaamelott.chaudie.re/api/random')
    .then(function (result) {
        return result.json();
    })
    .then(function (result) {
        console.log(result.citation.citation)
        console.log(result.citation.infos.personnage)
    })