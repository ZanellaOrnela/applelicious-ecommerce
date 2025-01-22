import { IProduct } from '@/types';

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export async function getProductsDB(): Promise<IProduct[]> {
  try {
    const response = await fetch(`${APIURL}/products`);
    const products: IProduct[] = await response.json();
    return products;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getProductByID(id:string): Promise<IProduct> {
    try {
      const products: IProduct[] = await getProductsDB()
      const productFiltered = products.find((product) => product.id.toString() === id)
      if(!productFiltered) throw new Error ("Producto no encontrado")
        else return productFiltered
    } catch (error: any) {
      throw new Error(error);
    }
  }