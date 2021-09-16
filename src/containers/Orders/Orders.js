import {useEffect, useState} from 'react';
import OrderItem from '../../components/Order/OrderItem/OrderItem';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(
      "https://pizza-red-default-rtdb.europe-west1.firebasedatabase.app/order.json"
    )
    .then(response => {
      if (response.ok) {
        return response.json()
      }
    })
    .then(data => {
      const orders = Object.keys(data).map((id) => {
        return {
          ...data[id],
          id,
        };
      });

      setOrders(orders);
    })
  }, [])

  return (
    <div>
      {orders.map((item, index) => {
        return <OrderItem key={item.id} {...item} />;
      })}

    </div>
  );
}

export default Orders
