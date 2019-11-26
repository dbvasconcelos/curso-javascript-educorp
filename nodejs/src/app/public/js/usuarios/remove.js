let tabelaUsuarios = document.querySelector('#usuarios');
tabelaUsuarios.addEventListener('click', (evento) => {
    let elementoClicado = evento.target;

    if (elementoClicado.dataset.type == 'remocao') {
        let usuarioId = elementoClicado.dataset.ref;
        fetch(`http://localhost:3000/usuarios/${usuarioId}`, { method: 'DELETE' })
            .then(resposta => {
                let tr = elementoClicado.closest(`#usuario_${usuarioId}`);
                tr.remove();
            })
            .catch(erro => console.log(erro));
    }
});