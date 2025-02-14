const url = 'https://kaamelott.chaudie.re/api/random';

// fetch(url)
//     .then(function (result) {
//         return result.json();
//     })
//     .then(function (result) {
//         console.log(result.citation.citation)
//         console.log(result.citation.infos.personnage)
//     })

async function ajax(){
    try{
        const response = await fetch(url)
        const data = await response.json()
        console.log(data.citation.citation)
    }catch(error){
        console.log(error)
    }
}
ajax();