import { ILoginErrors, ILoginProps } from "@/types";

export function validateLogin(values: ILoginProps) {
    const errors: ILoginErrors = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 6) {
        errors.password = 'Password must be 6 characters long or more';
    }
    return errors;
}

export function validateRegister(values: any) {
    const errors: any = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 6) {
        errors.password = 'Password must be 6 characters long or more';
    }
    if (!values.name) {
        errors.name = 'Required';
    } else if (values.name.length < 3) {
        errors.name = 'Name must be 3 characters long or more';
    }
    if (!values.address) {
        errors.address = 'Required';
    } else if (values.address.length < 3) {
        errors.address = 'Address must be 3 characters long or more';
    }
    if (!values.phone) {
        errors.phone = 'Required';
    } else if (values.phone.length < 3) {
        errors.phone = 'Phone must be 3 characters long or more';
    }
    return errors;
}