const cep = document.querySelector("#cep")

const showData = (result)=>{
    document.querySelector("#resposta").innerHTML = " "
    for(const campo in result){
        if(result[campo].length >0){
        document.querySelector("#resposta").innerHTML += `<p>${campo}: ${result[campo]}</p>`}
        }
    }

cep.addEventListener("blur",(e)=>{
    let search = cep.value.replace("-","")
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response =>{ response.json()
        .then( data => showData(data))
    })
    .catch(e => console.log('Deu Erro: '+ e,message))
})
