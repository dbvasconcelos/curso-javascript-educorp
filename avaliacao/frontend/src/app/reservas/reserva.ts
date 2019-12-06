import { Usuario } from '../usuarios/usuario'
import { Laboratorio } from '../laboratorios/laboratorio';

export interface Reserva {
    id: number,
    data: string,
    inicio: string,
    fim: string,
    razao: string, 
    usuario: Usuario,
    laboratorio: Laboratorio
}