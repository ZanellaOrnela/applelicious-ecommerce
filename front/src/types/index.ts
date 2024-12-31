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



