import React from 'react'
import { useData } from '../Context/DataContext';

export const Resume = () => {
    const { data } = useData();

    console.log(data);
    
    return (
        <div>Resume</div>
    )
}
