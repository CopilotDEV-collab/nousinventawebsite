
import Swal from 'sweetalert2';


class Alert {
    config: any;
    private static self: Alert = new Alert();

    constructor() {
        this.config = {
            width: 400,
            showCloseButton: false,
            customClass: {
                htmlContainer: `swal2-container-custom`,
                icon: `swal2-icon-custom`,
                container: `custom-swal-container`
            },
            allowOutsideClick: false,
            allowEscapeKey: false,
            showClass: {
                popup: ` animate__animated animate__fadeInDown animate__faster `,
            },
            hideClass: {
                popup: ` animate__animated animate__fadeOutUp animate__faster `,
            },
            grow: 'row',
        };

    }


    static successContact(message:any){
        let config: any ={
            icon: "success",
            title: "<strong>Success</strong>",
            html: message,
            showConfirmButton: false,
            timer: 3500,
            backdrop: true,
          };
          return Swal.fire(config).then(function (result) {
            return result.value;
        });
    }

    
    static errorContact(message:any){
        let config: any ={
            icon: "error",
            title: "<strong>Success</strong>",
            html: message,
            showConfirmButton: false,
            timer: 3500,
            backdrop: true,
          };
          return Swal.fire(config).then(function (result) {
            return result.value;
        });
    }

    static alert(message: any) {
        alert(message);
    }

    static info(message: any) {
        let config: any = {
            text: message,
            icon: 'info',
            returnFocus: false
        };
        config = Object.assign(config, Alert.self.config);
        return Swal.fire(config).then(function (result: any) {
            return result.value;
        });
    }

   static warning(message: any) {
        let config: any = {
            text: message,
            icon: 'warning',
            returnFocus: false,
        };
        config = Object.assign(Alert.self.config, config);
       // console.log(config)
        return Swal.fire(config).then(function (result: any) {
            return result.value;
        });
    }

    static success(message: any) {
        let config: any = {
            text: message,
            icon: 'success',
            toast: true,
            position: "top-end",
            width: 400,
            showConfirmButton: false,
            showCancelButton: false,
            showDenyButton: false,
            showCloseButton: true,
            timer: 10000, // 3 SEC
            timerProgressBar: true,
            showClass: {
                popup: ` animate__animated animate__fadeInDown animate__faster `,
            },
            hideClass: {
                popup: ` animate__animated animate__fadeOutUp animate__faster `,
            },
            grow: 'row',
        };
        return Swal.fire(config).then(function (result) {
            return result.value;
        });
    }

    static error(message: any) {
        let config: any = {
            text: message,
            icon: 'error',
            toast: true,
            position: "top-end",
            width: 400,
            animation: false,
            showConfirmButton: false,
            showCancelButton: false,
            showDenyButton: false,
            showCloseButton: true,
            timer: 10000, // 10 SEC
         //   timerProgressBar: true,
            showClass: {
                popup: ` animate__animated animate__fadeInDown animate__faster `,
            },
            hideClass: {
                popup: ` animate__animated animate__fadeOutUp animate__faster `,
            },
            grow: 'row',
        };
        return Swal.fire(config).then(function (result) {
            return result.value;
        });
    }

    static question(message: any) {
        let config: any = {
            text: message,
            icon: 'question',
        };
        config = Object.assign(config, Alert.self.config);
        return Swal.fire(config).then(function (result: any) {
            return result.value;
        });
    }

    static confirm(message: any) {
        const Toast = Swal.mixin({
            width: 400,
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            showConfirmButton: true,
            showDenyButton: true,
            showCloseButton: false,
            confirmButtonText: 'Yes',
            customClass: {
                htmlContainer: `swal2-container-custom`,
                icon: ` swal2-icon-custom`,
            },
            showClass: {
                popup: ` animate__animated animate__fadeInDown animate__faster `,
            },
            hideClass: {
                popup: ` animate__animated animate__fadeOutUp animate__faster `,
            },
            grow: 'row',
        })

        return Toast.fire({
            icon: 'warning',
            text: message,
        }).then(function (result) {
            if (result.value) {
                return true;
            }
            // result.dismiss === "cancel" || result.dismiss === "close" || result.dismiss === "overlay" || result.dismiss === "overlay"
            else {
                return false;
            }
        });
    }
}

export function warning(message:any) {
    return Alert.warning(message);
}

export function info(message:any) {
    return Alert.info(message);
}

export function success(message:any) {
    return Alert.success(message);
}

export function error(message:any) {
    return Alert.error(message);
}

export function confirm(message:any) {
    return Alert.confirm(message);
}

export function question(message:any) {
    return Alert.question(message);
}

export function successcontact(message:any){
    return Alert.successContact(message)
}


export function errorcontact(message:any){
    return Alert.errorContact(message)
}
