const SELECT_RESERVA = `
 SELECT r.id, r.data, r.inicio, r.fim, r.razao, 
    r.usuario_id, u.nome AS usuario_nome, u.email,
    r.laboratorio_id, l.nome AS laboratorio_nome
 FROM reservas AS r 
 JOIN laboratorios AS l ON r.laboratorio_id = l.id 
 JOIN usuarios AS u ON r.usuario_id = u.id
`
class ReservaDao {
    
    constructor(bd) {
        this._bd = bd;
    }

    manipulaListaReservas(reservas) {
        if (reservas) {
            reservas.forEach((reserva, index) => {
                reservas[index].usuario = {
                    id: reserva.usuario_id,
                    nome: reserva.usuario_nome,
                    email: reserva.email
                }
                reservas[index].laboratorio = {
                    id: reserva.laboratorio_id,
                    nome: reserva.laboratorio_nome,
                }
            });
        }
        return reservas;
    }

    lista() {
        return new Promise((resolve, reject) => {
            this._bd.all(
                `${SELECT_RESERVA} ORDER BY r.data, r.inicio, laboratorio_nome`,
                (erro, reservas) => {
                    if (erro) {
                        return reject(erro);
                    }
                    resolve(this.manipulaListaReservas(reservas));
                }
            );
        });
    }

    listaPorUsuario(usuarioId) {
        return new Promise((resolve, reject) => {
            this._bd.all(
                `${SELECT_RESERVA} WHERE r.usuario_id = ? ORDER BY r.data`,
                [ usuarioId ],
                (erro, reservas) => {
                    if (erro) {
                        return reject(erro);
                    }
                    resolve(this.manipulaListaReservas(reservas));
                }
            );
        });
    }

    buscaPorId(id) {
        return new Promise((resolve, reject) => {
            this._bd.get(
                `SELECT * FROM reservas WHERE id = ?`,
                [id],
                (erro, reserva) => {
                    if (erro) {
                        return reject(erro);
                    }
                    resolve(reserva);
                }
            );
        });
    }

    insere(reserva) {
        return new Promise((resolve, reject) => {
            this._bd.run(
                `INSERT INTO reservas (data, inicio, fim, razao, usuario_id, laboratorio_id) VALUES (?, ?, ?, ?, ?, ?)`,
                [
                    reserva.data,
                    reserva.inicio,
                    reserva.fim, 
                    reserva.razao, 
                    reserva.usuario.id, 
                    reserva.laboratorio.id
                ],
                (erro) => {
                    if (erro) {
                        return reject(erro);
                    }
                    resolve();
                }
            );
        });
    }

    atualiza(reserva) {
        return new Promise((resolve, reject) => {
            this._bd.run(
                `UPDATE reservas SET data = ?, inicio = ?, fim = ?, razao = ?, usuario_id = ?, laboratorio_id = ? WHERE id = ?`,
                [
                    reserva.data,
                    reserva.inicio, 
                    reserva.fim, 
                    reserva.razao, 
                    reserva.usuario.id, 
                    reserva.laboratorio.id, 
                    reserva.id
                ],
                (erro) => {
                    if (erro) {
                        return reject(erro);
                    }
                    resolve();
                }
            );
        });
    }

    removePorId(id) {
        return new Promise((resolve, reject) => {
            this._bd.run(
                `DELETE FROM reservas WHERE id = ?`,
                [id],
                (erro) => {
                    if (erro) {
                        return reject(erro);
                    }
                    return resolve();
                }
            );
        });
    }

}

module.exports = ReservaDao