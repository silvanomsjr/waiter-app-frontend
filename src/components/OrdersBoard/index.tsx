import { useState } from 'react';
import { OrdersBoardProps, Order } from '../../types/props';
import OrderModal from '../OrderModal';

function OrdersBoard({ title, icon, orders }:OrdersBoardProps){

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [orderModal, setOrderModal] = useState<Order | null>(null);

  function handleOrderModal(order:Order){
    setIsModalVisible(prevState => !prevState);
    setOrderModal(order);
  }

  return(
    <div className="p-4 flex-1 border-orderBorder border-solid border-[1px] rounded-2xl flex flex-col justify-center items-center gap-6">
      <OrderModal order={orderModal} visible={isModalVisible} setVisible={setIsModalVisible} icon={icon} status={title}/>
      <header className="flex items-center p-2 gap-2 text-[14px]">
        <span>{icon}</span>
        <p className="font-semibold">{title}</p>
        <span>({orders.length})</span>
      </header>
      <div className="flex flex-col w-full gap-6">
        {orders.length > 0 &&
          orders.map((order) => {
            return(
              <button
                onClick={() => handleOrderModal(order)}
                key={order._id}
                className="bg-white border-[1px] border-solid border-orderBorder h-32 rounded-lg w-full flex flex-col justify-center items-center gap-2">
                <strong className="font-medium">Mesa {order.table}</strong>
                <span className="text-sm text-[#666]">{order.products.length} itens</span>
              </button>
            );
          })
        }
      </div>
    </div>
  );
}

export default OrdersBoard;
