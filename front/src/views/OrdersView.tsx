'use client'


import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { useAuth } from '@/context/authContext';
import { getOrders } from '@/helpers/ordersHelper';
import { IOrder } from '@/types';

const OrdersView = () => {
  const router = useRouter();
  const { userData } = useAuth();
  const [orders, setOrders] = useState<IOrder[]>([]);

  const loadOrders = async () => {
    if (userData?.token) {
      const response: IOrder[] = await getOrders(userData.token);
      setOrders(response);
    }
  };

  useEffect(() => {
    if (!userData?.token) {
      router.push('/login'); // Redirige al usuario al login si no está autenticado
    } else {
      loadOrders(); // Carga las órdenes si el usuario tiene un token
    }
  }, [userData, router]); 

  return (
    <div className="p-4">
      <h1 className="text-2xl text-gray-700 font-bold mb-4">Tus ordenes</h1>
      {orders.length ? (
        orders.map((item: IOrder) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-lg shadow-md mb-4"
          >
            <p className="text-gray-600">
              <span className="font-semibold">Estado:</span>{' '}
              {item.status.toLocaleUpperCase()}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Fecha:</span>{' '}
              {new Date(item.date).toLocaleString()}
            </p>
          </div>
        ))
      ) : (
        <div className="text-gray-500">
          ¡Aún no tienes pedidos, ve de compras!
        </div>
      )}
    </div>
  );
};

export default OrdersView;
