import OrdersBoard from '../OrdersBoard';

import { Order } from '../../types/props';

const orders: Order[] = [
  {
    _id: '6372e48cbcd195b0d3d0f7f3',
    table: '123',
    status: 'WAITING',
    products: [
      {
        product: {
          name: 'Pizza Quatro Queijos',
          imagePath: '1684434118402-1quatro-queijos.jpeg',
          price: 40,
        },
        quantity: 3,
        _id: '6372e48cbcd195b0d3d0f7f4'
      },
      {
        product: {
          name: 'Coca Cola',
          imagePath: '1684434522720-6coca-cola.jpeg',
          price: 7,
        },
        quantity: 2,
        _id: '6372e48cbcd195b0d3d0f7f5'
      }
    ],
  }
];

function Orders(){

  const waitingOrders = orders.filter(order => order.status === 'WAITING');
  const inProdOrders = orders.filter(order => order.status === 'IN_PRODUCTION');
  const doneOrders = orders.filter(order => order.status === 'DONE');

  return(
    <>
      <div className="w-full max-w-[1216px] mx-auto my-10 flex flex-row gap-8">
        <OrdersBoard title="Fila de espera" icon="🕑" orders={waitingOrders} />
        <OrdersBoard title="Em preparação" icon="👩‍🍳" orders={inProdOrders}/>
        <OrdersBoard title="Pronto!" icon="✅" orders={doneOrders}/>
      </div>
    </>
  );
}

export default Orders;
