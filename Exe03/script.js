areaPesquisa.addEventListener("keyup", () => {
    let areaPesquisa = document.getElementById('areaPesquisa')
    let  lista = document.getElementsByTagName('ol')

    if (areaPesquisa.value.trim() == '') {
        return
    }

    Array.from(lista).forEach(element => {
        let valorLista = element.textContent.toLowerCase().trim()
        let valorDigitado = areaPesquisa.value.toLowerCase().trim()

        if (valorLista.includes(valorDigitado)) {
            element.style.fontSize = "17pt"
            element.style.fontWeight = "bold"
        }else{
            element.style.fontWeight = "normal"
        }
    })   
});


