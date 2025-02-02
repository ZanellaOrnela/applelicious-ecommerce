
import Card from './Card';
import { getProductsDB } from '@/helpers/productHelper';
import Link from 'next/link';

const CardList = async  () => {
  const products = await getProductsDB()
  return (
    <div className="flex flex-wrap justify-center gap-6 md:justify-center lg:justify-center">
  {products &&
    products.map((product) => (
      <Link key={product.id} href={`/product/${product.id}`}>
        <Card key={product.id} {...product} />
      </Link>
    ))}
</div>

  );
};

export default CardList;

