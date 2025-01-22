 export interface IProduct {
    id: number;
    name: string;
    price: number;
    description: string; 
    image: string;
    categoryId: number;
    stock: number;
    }

export interface ICategory {
    id: number;
    name: string;
}


export interface ILoginProps {  
    email: string;
    password: string;
}

export interface ILoginErrors {
    email?: string;
    password?: string;
}

export interface IRegisterProps {
    email: string;
    password: string;
    name: string;
    address: string;
    phone: string;
}

export interface IRegisterErrors {
    email?: string;
    password?: string;
    name?: string;
    address?: string;
    phone?: string;
}

export interface IUserSession {
    token: string;
    user: {
        address: string;
        email: string;
        id: number;
        name: string;
        phone: number;
        orders: []

    }
}
export interface IOrder {
    id: number;
    date: Date;
    status: string;
    products: IProduct[]

}