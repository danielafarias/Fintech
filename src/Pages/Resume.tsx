import React from 'react'
import { Sell, useData } from '../Context/DataContext';
import { Sells } from '../Components/Sells';

const sumAll = (data: Sell[]) => data.reduce((acc, item) => acc + item.preco, 0);
export const formatValue = (value: number) => value.toLocaleString("pt-BR", { style: "currency", currency: "BRL"});

export const Resume = () => {
    const { data } = useData();

    if (data === null) return null;

    const sells = data.filter(i => i.status !== "falha")
    const total = sumAll(sells);
    const formattedTotal = formatValue(total);

    const received = data.filter(i => i.status === "pago");
    const receivedTotal = sumAll(received);
    const receivedFormattedTotal = formatValue(receivedTotal);

    const processing = data.filter(i => i.status === "processando");
    const processingTotal = sumAll(processing);
    const processingFormattedTotal = formatValue(processingTotal);

    return (
        <section>
            <div className='resume flex mb'>
                <div className='box'>
                    <h2>Vendas</h2>
                    <span>{formattedTotal}</span>
                </div>
                <div className='box'>
                    <h2>Recebidos</h2>
                    <span>{receivedFormattedTotal}</span>
                </div>
                <div className='box'>
                    <h2>Processando</h2>
                    <span>{processingFormattedTotal}</span>
                </div>
            </div>
            <div className="box">
                Gráficos
            </div>
            <Sells />
        </section>
    )
}
