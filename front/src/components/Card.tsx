import { IProduct } from '@/types'
import React from 'react'
const Card: React.FC<IProduct> = ( {name , price, description, image, stock}) => {
  return (
    <div>
        <img src={image} alt={"image of the product" + name} />
        <div>
           
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>Stock: {stock}</p>
            <p>description: {description}</p>
        </div>
      
    </div>
  )
}

export default Card

