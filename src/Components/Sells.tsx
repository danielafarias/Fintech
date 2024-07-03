import { useData } from '../Context/DataContext';
import { SellItem } from './SellItem';

export const Sells = () => {
    const { data } = useData();

    if (data === null) return null;
    return (
        <ul>
           {data.map(i => (
                <li key={i.id}>
                    <SellItem sell={i}/>
                </li>
           ))}
        </ul>
    )
}
