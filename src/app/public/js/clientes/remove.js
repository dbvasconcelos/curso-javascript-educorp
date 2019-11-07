let tabelaClientes = document.querySelector('#clientes');
tabelaClientes.addEventListener('click', (evento) => {
    let elementoClicado = evento.target;

    if (elementoClicado.dataset.type == 'remocao') {
        let clienteId = elementoClicado.dataset.ref;
        fetch(`http://localhost:3000/clientes/${clienteId}`, { method: 'DELETE' })
            .then(resposta => {
                let tr = elementoClicado.closest(`#cliente_${clienteId}`);
                tr.remove();
            })
            .catch(erro => console.log(erro));
    }
});