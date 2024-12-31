import productsToPreLoad from '@/helpers/productsToPreload';
import Card from './Card';

const CardList = () => {
  return (
    <div>
      {productsToPreLoad &&
        productsToPreLoad?.map((product) => {
          return (
            <Card key={product.id} {...product} />
          );
        })}
    </div>
  );
};

export default CardList;

