import React from 'react'
import { DateInput } from './DateInput'
import { useData } from '../Context/DataContext';

export const DateRange = () => {
    const { initialDate, setInitialDate, finalDate, setFinalDate } = useData();
    return (
        <form className="box flex" onSubmit={(e) => e.preventDefault()}>
            <DateInput 
                id="initialDate" 
                label="Início"
                value={initialDate} 
                onChange={({ target }) => setInitialDate(target.value)}
            />
            <DateInput 
                id="finalDate" 
                label="Final"
                value={finalDate} 
                onChange={({ target }) => setFinalDate(target.value)}
            />
        </form>
    );
}
