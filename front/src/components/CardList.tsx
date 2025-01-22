import productsToPreLoad from '@/helpers/productsToPreload';
import Card from './Card';
import { getProductsDB } from '@/helpers/productHelper';
import Link from 'next/link';

const CardList = async  () => {
  const products = await getProductsDB()
  return (
    <div>
      {products &&
        products?.map((product) => {
          return (
            <Link key={product.id} href={`/product/${product.id}`}>
              <Card key={product.id} {...product} />
            </Link>
          );
          
        })}
    </div>
  );
};

export default CardList;

