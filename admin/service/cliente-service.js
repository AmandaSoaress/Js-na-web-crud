//ele pede os dados e devolve uma resposta
const listaClientes = () => { //sucesso e erro da chamada   
    return fetch(`http://localhost:3000/profile`)
        .then(resposta => {
            return resposta.json()
        })
}
const criaCliente = (nome, email) => {
    return fetch(`http://localhost:3000/profile`, {
            method: `POST`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                email: email
            })

        })
        .then(resposta => {
            return resposta.body
        })
}

export const clienteService = {
    listaClientes,
    criaCliente
}






















//const promise = new Promise((resolve, reject) => {
//const http = new XMLHttpRequest()

//http.open('GET', 'http://localhost:3000/profile')

//http.onload = () => {
// if (http.status >= 400) {
//   reject(JSON.parse(http.response))
//  } else {
//  resolve(JSON.parse(http.response))
//}
// }
//http.send()
// })
//console.log(promise)
//return promise
//}


//desafio escrever o codigo utilizando promise.all ([]) usar o then para resposta.



//  const http2 = new XMLHttpRequest()

//http2.open('GET', 'http://localhost:3000/profile/semanaPassada')
//http2.onload = () => {
//.. //funcao auxiliar (callback)
//const http3 = new XMLHttpRequest()
//http3.open('GET', 'http://localhost:3000/profile/semanaRetrasada')

// http3.onload = () => {
//   ..
//}

//}
// http2.send()

//reduzio o codico com o fetch