import React from 'react'
import { Sell } from '../Context/DataContext';
import { formatValue } from '../Pages/Resume';
import { NavLink } from 'react-router-dom';

type SellItemProps = {
    sell: Sell;
};

export const SellItem = ({ sell }: SellItemProps) => {
  return (
    <div className='sell box'>
        <NavLink to={`/vendas/${sell.id}`} style={{ fontFamily: "monospace" }}>{sell.id}</NavLink>
        <div>{sell.nome}</div>
        <div>{formatValue(sell.preco)}</div>
    </div>
  )
}
