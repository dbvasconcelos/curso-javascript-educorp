import { Injectable } from "@angular/core";
import { stringify } from 'querystring';

@Injectable({providedIn: 'root'})
export class DataService {
    private DIAS_DA_SEMANA = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    private MESES = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];

    numeroDia(dataStr: string) {
        return this.instanciaData(dataStr).getDate();        
    }
    
    nomeDia(dataStr: string) {
        return this.DIAS_DA_SEMANA[this.instanciaData(dataStr).getDay()];
    }

    nomeMes(dataStr: string) {
        return this.MESES[this.instanciaData(dataStr).getMonth()];
    }

    terminacaoAno(dataStr: string) {
        return new String(this.instanciaData(dataStr).getFullYear()).substring(2);
    }

    instanciaData(dataStr: string) {
        return new Date(dataStr + ' 00:00');
    }
}