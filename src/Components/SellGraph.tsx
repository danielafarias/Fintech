import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Sell } from '../Context/DataContext';

type SellGraphProps = {
    data: Sell[]
};

type GraphData = {
    data: string;
    pago: number;
    processando: number;
    falha: number;
};

function transformData(data: Sell[]): GraphData[] {
    const newData = data.reduce((acc: { [key: string]: GraphData }, item) => {
        const newDate = item.data.split(" ")[0];
        if (!acc[newDate]) {
            acc[newDate] = {
                data: newDate,
                pago: 0,
                falha: 0,
                processando: 0
            };
        }

        acc[newDate][item.status] += item.preco;
        return acc;
    }, {});

    return Object.values(newData).map(item => ({
        ...item,
        data: item.data.substring(5)
    }));
}

export const SellGraph = ({ data }: SellGraphProps) => {
    const transformedData = transformData(data);
    return (
        <ResponsiveContainer width="99%" height={400}>
            <LineChart data={transformedData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                <XAxis dataKey="data" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pago" stroke="#A36AF9" strokeWidth={3} />
                <Line type="monotone" dataKey="processando" stroke="#FBCB21" strokeWidth={3} />
                <Line type="monotone" dataKey="falha" stroke="#000000" strokeWidth={3} />
        </LineChart>
        </ResponsiveContainer>
    )
}
