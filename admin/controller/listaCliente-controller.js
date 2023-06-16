import { clienteService } from "../service/cliente-service.js"
const criaNovaLinha = (nome, email, id) => {
    const linhaNovoCliente = document.createElement('tr')
    const conteudo = `
    <td class="td" data-td="3">${nome}</td>
<td>${email}</td>
<td>
   <ul class="tabela__botoes-controle">
       <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
       <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
   </ul>
</td> `
    //gerando um template
    linhaNovoCliente.innerHTML = conteudo
linhaNovoCliente.dataset.id = id

    return linhaNovoCliente
}
const tabela = document.querySelector('[data-tabela]')
//percorre a arvore do dom

tabela.addEventListener('click',(evento) => {
    let ehBotaoDeletar = evento.target.className === 'botao-simples botao-simples--excluir'
if(ehBotaoDeletar){
    const linhaCliente = evento.target.closest('[data-id]')
    let id = linhaCliente.dataset.id
    clienteService.removeCliente(id)
    .then(()=>{
        linhaCliente.remove()
    })
}
})

clienteService.listaClientes()
    .then(data => {
        data.forEach(elemento => {
            tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email))

        })
    })
//percorre a lista clientes que é uma promessa e faz toda a logica para exibir o dado na tela.