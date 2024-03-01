import {AbstractControl, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

export function replicatePassword(controlName:string): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

        const value = control.value;
        if (!value || !control.parent) {
            return null;
        }

        const passwordControl = control.parent?.get(controlName);
        
        const passwordValid = value != passwordControl?.value;
        return passwordValid ? {replicatePassword:true}: null;
    }
}