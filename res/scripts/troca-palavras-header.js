let keyWords = document.querySelector('#key-words');
let keyWordsList = ['inovações', 'tecnologia', 'resultados', 'realizações'];
let i = 0;

function mudar(){
    i++
    if(i == keyWordsList.length){
        i = 0;
    }   
    keyWords.innerHTML = keyWordsList[i];
}

window.onload = setInterval(mudar, 1810);