function resultado() {
    let saida = document.getElementById('saida')
    let saida1 = document.getElementById('saida1')
    let saida2 = document.getElementById('saida2')
    let saida3 = document.getElementById('saida3')
    let saida4 = document.getElementById('saida4')
    let n = Number(document.getElementById('fnum').value)
    let numero = document.getElementById('n3')
    let c = 1
    numero.innerHTML = `<h2>O número escolhido foi: </h2><br><h1>${n}</h1>`
    saida.innerHTML = `<h2>Tabuada</h2>`
    saida1.innerHTML = `<h2>Divisão</h2>`
    saida2.innerHTML = `<h2>Exponenciação</h2>`
    saida3.innerHTML = `<h2>Soma</h2>`
    saida4.innerHTML = `<h2>Subtração</h2>`
    
    while (c <= 10) {
        saida.innerHTML += `${n} x ${c} = <strong>${n * c}</strong><br>`
        saida1.innerHTML += `${n} / ${c} = <strong>${n / c}</strong><br>`
        saida2.innerHTML += `${n}<sub>${c}</sub> = <strong>${n ** c}</strong><br>`
        saida3.innerHTML += `${n} + ${c} = <strong>${n + c}</strong><br>`
        saida4.innerHTML += `${n} - ${c} = <strong>${n - c}</strong><br>`
        c ++
    }
    
}

