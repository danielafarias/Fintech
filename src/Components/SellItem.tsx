import React from 'react'
import { Sell } from '../Context/DataContext';
import { formatValue } from '../Pages/Resume';

type SellItemProps = {
    sell: Sell;
};

export const SellItem = ({ sell }: SellItemProps) => {
  return (
    <div className='sell box'>
        <a href="" style={{ fontFamily: "monospace" }}>{sell.id}</a>
        <div>{sell.nome}</div>
        <div>{formatValue(sell.preco)}</div>
    </div>
  )
}
