'use strict'

const translateInput = document.getElementById('translateMinion')

async function traduzir(translateMinion){
    const url = `https://api.funtranslations.com/translate/minion.json?text=${translateMinion}`
    const response = await fetch(url)
    const minionTranslate = await response.json()
    return minionTranslate
}

async function mostrarTraducao(){
    const traduzido = document.getElementById('translateMinion')

    const translateM = await traduzir (translateInput.value)
    console.log (translateM)
    traduzido.value = translateM.contents.translated
}

translateInput.addEventListener('focusout', mostrarTraducao)

translateInput.addEventListener('keypress', (event) => {
    if(event.code === 'Enter'){
        mostrarTraducao()
    }
})

