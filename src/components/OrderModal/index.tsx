import { OrderModalProps } from '../../types/props';
import close from '../../assets/images/close-icon.svg';
import formatCurrency from '../../utils/formatCurrency';
import CustomButton from '../CustomButton/indes';
import { useEffect } from 'react';

function OrderModal({ order, visible, setVisible}:OrderModalProps){

  useEffect(() => {

    function handleCloseOnEsc(event: KeyboardEvent){
      if(event.key === 'Escape'){
        setVisible(false);
      }
    }

    document.addEventListener('keydown', handleCloseOnEsc);

    return () => {
      document.removeEventListener('keydown', handleCloseOnEsc);
    };

  }, [setVisible]);

  if(!visible || !order){
    return null;
  }

  function handleModalClose(){
    setVisible(false);
  }

  const total = order.products.reduce((acc, { product, quantity }) => { return acc + (product.price * quantity); }, 0);

  return(
    <div className="fixed left-0 top-0 bg-black/60 h-full w-full backdrop-blur-[4px] flex justify-center items-center">
      <div className='bg-white w-[480px] rounded-lg p-8'>
        <header className='flex justify-between'>
          <h1 className='font-bold text-2xl'>Mesa 2</h1>
          <button onClick={handleModalClose} className='leading-[0]'>
            <img src={close} alt='Fechar'/>
          </button>
        </header>
        <div className='mt-8'>
          <div>
            <span className='text-sm opacity-80'>Status do Pedido</span>
            <div className='flex items-center gap-2 my-2'>
              <span className='font-semibold'>
                {order.status == 'WAITING' && '🕑'}
                {order.status == 'IN_PRODUCTION' && '👩‍🍳'}
                {order.status == 'DONE' && '✅'}
              </span><strong>
                {order.status == 'WAITING' && 'Fila de espera'}
                {order.status == 'IN_PRODUCTION' && 'Em preparação'}
                {order.status == 'DONE' && 'Pronto!'}
              </strong>
            </div>
          </div>
          <div>
            <span className='text-sm opacity-80'>Itens</span>
            <div className='mt-4 flex flex-col gap-4'>
              {order.products.map(({_id, product, quantity}) => (
                <div key={_id} className='flex gap-2'>
                  <img
                    width="56"
                    height="28.51"
                    src={`http://localhost:3001/uploads/${product.imagePath}`}
                    alt={product.name}
                    className='rounded-md'
                  />
                  <span className='text-sm font-normal'>{quantity}x</span>
                  <div className='flex flex-col'>
                    <span className='font-semibold text-base mb-1'>{product.name}</span>
                    <span className='text-sm font-normal'>{formatCurrency(product.price)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='flex justify-between items-center mt-6'>
            <span className='text-sm opacity-80'>Total</span>
            <span className='font-bold'>{formatCurrency(total)}</span>
          </div>
        </div>
        <footer className='flex flex-col items-center justify-center gap-3 mt-5'>
          <CustomButton type='primary' text="Concluir Pedido" icon="✅" />
          <CustomButton type='secondary' text="Cancelar Pedido"/>
        </footer>
      </div>
    </div>
  );
}

export default OrderModal;
