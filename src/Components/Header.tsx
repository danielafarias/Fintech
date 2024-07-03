import React from 'react'
import { DateRange } from './DateRange';
import { Months } from './Months';
import { useLocation } from 'react-router-dom';

export const Header = () => {
    const [title, setTitle] = React.useState("Resumo");

    const location = useLocation();

    React.useEffect(() => {
        if (location.pathname === "/vendas") {
            setTitle("Vendas")
            document.title = "Fintech | Vendas";
        } else if (location.pathname === "/") {
            setTitle("Resumo")
            document.title = "Fintech | Resumo";
        }
    }, [location]);
    
    return (
        <header className='mb'>
            <div className='daterange mb'>
                <DateRange/>
                <h1 className='box bg-3'>{title}</h1>
            </div>
            <Months />
        </header>
    )
}
