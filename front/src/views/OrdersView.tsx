'use client'

import { IProduct } from '@/types';
import React, { useState,useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/authContext';
import { getOrders } from '@/helpers/ordersHelper';
import { IOrder } from '@/types';

const OrdersView = () => {
  const router = useRouter();
  const { userData } = useAuth();
  const [orders, setOrders] = useState<IOrder[]>([]);

  const loadOrders = async () => {
      if (userData?.token) {
          const response: IOrder[] = await getOrders(userData?.token);
          setOrders(response);
      }
  };

  useEffect(() => {
      userData?.token ?  router.push("/") : loadOrders();
  }, []);

 

  return (
    <div>
        <h1>Your orders:</h1>
        {orders.length ? (
            orders.map((item: IOrder) => (
                <div key={item.id}>
                    <p>Status - {item.status.toLocaleUpperCase()}</p>
                    <p>Date- {new Date(item.date)?.toLocaleString()}</p>
                </div>
            ))
        ) : (
            <div>You don't have orders yet, go to shopping</div>
        )}
    </div>
);

}

export default OrdersView;

