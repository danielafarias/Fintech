import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch';
import { BASE_URL, Sell as SellType } from '../Context/DataContext';
import { formatValue } from './Resume';
import { Loading } from '../Components/Loading';

type SellWithoutDate = Omit<SellType, 'data'>;

export const Sell = () => {
    const { id } = useParams();

    const { data, loading } = useFetch<SellWithoutDate>(`${BASE_URL}${id}`);

    if (loading === true) return <Loading />;
    if (data === null) return null;
    return (
        <div>
            <div className='box mb'>ID: {data.id}</div>
            <div className='box mb'>Nome: {data.nome}</div>
            <div className='box mb'>Preço: {formatValue(data.preco)}</div>
            <div className='box mb'>Status: {data.status}</div>
            <div className='box mb'>Pagamento: {data.pagamento}</div>
        </div>
    )
}
