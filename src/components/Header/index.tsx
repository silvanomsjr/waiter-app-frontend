import WaiterAppLogo from '../../assets/images/logo.svg';

function Header(){
  return(
    <header className='bg-[#D73035] flex justify-center'>
      <div className='py-7 flex flex-row justify-between items-center max-w-[1216px] w-full'>
        <div className='text-white'>
          <h1 className='font-bold text-4xl'>Pedidos</h1>
          <p className='text-base font-normal mt-1'>Acompanhe os pedidos dos clientes</p>
        </div>
        <div>
          <img className='min-w-[200px]' src={WaiterAppLogo} alt="WaiterApp Logo"/>

        </div>
      </div>
    </header>
  );
}

export default Header;
