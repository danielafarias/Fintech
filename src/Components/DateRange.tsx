import React from 'react'
import { DateInput } from './DateInput'

export const DateRange = () => {
    const [initialDate, setInitialDate] = React.useState("");
    const [finalDate, setFinalDate] = React.useState("");
    return (
        <form onSubmit={(e) => e.preventDefault()}>
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
