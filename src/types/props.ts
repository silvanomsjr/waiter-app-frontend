//OrderBoardProps

export type OrdersBoardProps = {
  title: string,
  icon: string,
  orders: Order[]
}

export type Order = {
  _id: string,
  table: string,
  status: 'WAITING' | 'IN_PRODUCTION' | 'DONE',
  products: Array<{
    _id: string,
    quantity: number;
    product: {
      name: string,
      imagePath: string,
      price: number,
    }
  }>
}


// ---------------------------------


//OrderModalProps

export type OrderModalProps = {
  order: Order | null,
  visible: boolean,
  setVisible: (val:boolean) => void,
}


// ---------------------------------


//CustomButtonProps

export type CustomButtonProps = {
  type: string,
  text: string,
  icon?: string,
}


// ---------------------------------
