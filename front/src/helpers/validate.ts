import { ILoginErrors, ILoginProps, IRegisterErrors, IRegisterProps } from "@/types";

// Function to validate required fields with a minimum length
function validateField(value: string, fieldName: string, minLength: number = 3): string | undefined {
    if (!value) return `${fieldName} es obligatorio/a`;
    if (value.length < minLength) return `${fieldName} debe tener al menos ${minLength} caracteres`;
    return undefined;
}


function validateEmail(email: string): string | undefined {
    if (!email) return "El email es obligatorio";
    if (!/^\S+@\S+\.\S+$/.test(email)) return "Formato de email inválido";
    return undefined;
}


export function validateLogin(values: ILoginProps): ILoginErrors {
    return {
        email: validateEmail(values.email) || "",
        password: validateField(values.password, "La contraseña", 6) || ""
    };
}


export function validateRegister(values: IRegisterProps): IRegisterErrors {
    return {
        email: validateEmail(values.email) || "",
        password: validateField(values.password, "La contraseña", 6) || "",
        name: validateField(values.name, "El nombre") || "",
        address: validateField(values.address, "La dirección") || "",
        phone: validateField(values.phone, "El teléfono") || ""
    };
}
