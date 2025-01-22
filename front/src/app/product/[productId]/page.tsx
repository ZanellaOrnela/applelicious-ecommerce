import { getProductByID } from '@/helpers/productHelper';
import ProductDetail from '@/views/ProductDetail';
import React from 'react';

const Detail = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const productId = (await params).productId;
  const product = await getProductByID(productId);
  return (
    <ProductDetail {...product}/>
  );
};
export default Detail;
