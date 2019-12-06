import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Laboratorio } from './laboratorio';

const API_URL = 'http://localhost:3000/laboratorios';

@Injectable({ providedIn: 'root' })
export class LaboratorioService {

    constructor(
        private http: HttpClient
    ) { }

    listaLaboratorios() {
        return this.http.get<Laboratorio[]>(API_URL);
    }

    insereLaboratorio(laboratorio: Laboratorio) {
        return this.http.post(API_URL, laboratorio);
    }

    removeLaboratorio(laboratorio: Laboratorio) {
        return this.http.delete(API_URL + '/' + laboratorio.id);
    }

}