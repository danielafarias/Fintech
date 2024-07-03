import React from 'react'
import { DateRange } from './DateRange';
import { Months } from './Months';

export const Header = () => {
    
    return (
        <header className='mb'>
            <div className='mb'>
                <DateRange/>
            </div>
            <Months />
        </header>
    )
}
