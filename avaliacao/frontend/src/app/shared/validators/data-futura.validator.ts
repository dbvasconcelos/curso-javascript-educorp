import { AbstractControl } from '@angular/forms';

export function dataFuturaValidator(control: AbstractControl) {
    let agora = new Date(Date.now());
    if (control.value && new Date(control.value) < new Date(agora.getFullYear(), agora.getMonth(), agora.getDate())) {
        return {
            dataFutura: true
        };
    }
    return null;
}