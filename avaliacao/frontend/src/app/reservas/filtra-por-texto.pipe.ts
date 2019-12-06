import { Pipe, PipeTransform } from '@angular/core';
import { Reserva } from './reserva';

@Pipe({ name: 'filtraPorTexto'})
export class FiltraPorTextoPipe implements PipeTransform {
    transform(reservas: Reserva[], filtro: string) {
        filtro = filtro.trim().toLowerCase();

        if (filtro) {
            return reservas.filter(
                reserva => 
                    reserva.laboratorio.nome.toLowerCase().includes(filtro)
                    || reserva.usuario.nome.toLowerCase().includes(filtro)
                    || reserva.razao.toLowerCase().includes(filtro)
                    || reserva.inicio.includes(filtro)
                    || reserva.fim.includes(filtro)
                    || reserva.data.includes(filtro)
            )
        } else {
            return reservas;
        }
    }
}