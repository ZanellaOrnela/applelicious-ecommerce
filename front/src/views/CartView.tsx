'use client'
import { useAuth } from '@/context/authContext'
import { IProduct } from '@/types'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { createOrder } from '@/helpers/ordersHelper'

const CartView = () => {
  const { userData } = useAuth();
  const [cart, setCart]= useState<IProduct[]>([])
  const [total,setTotal]=useState<number>(0)
  const router = useRouter();

  useEffect(() => {
    !userData && router.push("/login")
  }, [userData])

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]")
    if(storedCart){
      let totalCart = 0
      storedCart.map((item:IProduct)=>{
        totalCart = totalCart + item.price
      })
      setTotal(totalCart)
      setCart(storedCart)
    }

  }, [])

  const handleCheckout = async () => {
    const idProducts = cart?.map((product) => product.id)
    if(userData?.token){
      await createOrder(idProducts, userData?.token)
      setTotal(0)
      setCart([])
      localStorage.setItem("cart", "[]")
    }
  }

  return ( 
    <div>
       <h1>Your Cart</h1>
    <div>
      Products
      {
        cart.length ? cart?.map((item: IProduct) => {
          return (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          )
        }) : <div>You don't have products in your cart</div>
      }
    </div>
    <div>
      Total: {total}
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  </div>
  )
}

export default CartView
