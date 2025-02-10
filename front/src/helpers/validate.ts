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
    const errors: Partial<ILoginErrors> = {};

    const emailError = validateEmail(values.email);
    if (emailError) errors.email = emailError;

    const passwordError = validateField(values.password, "La contraseña", 6);
    if (passwordError) errors.password = passwordError;

    return errors;
}

export function validateRegister(values: IRegisterProps): IRegisterErrors {
    const errors: Partial<IRegisterErrors> = {};

    const emailError = validateEmail(values.email);
    if (emailError) errors.email = emailError;

    const passwordError = validateField(values.password, "La contraseña", 6);
    if (passwordError) errors.password = passwordError;

    const nameError = validateField(values.name, "El nombre");
    if (nameError) errors.name = nameError;

    const addressError = validateField(values.address, "La dirección");
    if (addressError) errors.address = addressError;

    const phoneError = validateField(values.phone, "El teléfono");
    if (phoneError) errors.phone = phoneError;

    return errors;
}

