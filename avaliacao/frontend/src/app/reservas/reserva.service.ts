import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Reserva } from './reserva';
import { Usuario } from '../usuarios/usuario';

const API_URL = 'http://localhost:3000/reservas';

@Injectable({ providedIn: 'root' })
export class ReservaService {

    constructor(
        private http: HttpClient
    ) { }

    listaReservas() {
        return this.http.get<Reserva[]>(API_URL);
    }

    listaReservasPorUsuario(usuario: Usuario) {
        return this.http.get<Reserva[]>(API_URL + `/usuario/${usuario.id}`);
    }

    insereReserva(reserva: Reserva) {
        return this.http.post(API_URL, reserva);
    }

    removeReserva(reserva: Reserva) {
        return this.http.delete(API_URL + '/' + reserva.id);
    }
}