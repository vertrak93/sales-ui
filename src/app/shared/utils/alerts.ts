import { Injectable } from "@angular/core";
import Swal from 'sweetalert2';

type icon = 'success' | 'error' | 'warning' | 'info' | 'question';

@Injectable()
export class Alerts{

    Toast(text:string, icon:icon){
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            showCloseButton: true,
            timer: 3500,
            timerProgressBar: true,
            iconColor: 'white',
            customClass: {
                popup: 'colored-toast',
            },
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });

        Toast.fire({
            icon: icon,
            text: text
        });
    }

    SimpleAlert(text:string, icon:icon){
        Swal.fire({
            text: text,
            icon: icon,
            confirmButtonText: "Aceptar",
            confirmButtonColor: "#1976d2",
            heightAuto: false,
            allowOutsideClick: false
        });
    }

    ConfirmAlert(text:string, icon:icon, confirmFunction: ()=>void) {
        Swal.fire({
            text: text,
            icon: icon,
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            cancelButtonColor: "D32F2F",
            confirmButtonText: "Aceptar",
            confirmButtonColor: "#1976d2",
            heightAuto: false,
            allowOutsideClick: false
            
        }).then( (result) => {
            if(result.isConfirmed){
                confirmFunction();
            }
        });
    }

}