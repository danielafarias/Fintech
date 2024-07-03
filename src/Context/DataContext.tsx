import React from "react";
import useFetch from "../Hooks/useFetch";

export type Sell =  {
    id: string;
    nome: string;
    preco: number;
    status: "pago" | "processando" | "falha";
    pagamento: "boleto" | "cartao" | "pix";
    parcelas: null | number;
    data: string;
};

type DataContextType = {
    data: Sell[] | null;
    loading: boolean;
    error: string | null;
    initialDate: string;
    finalDate: string;
    setInitialDate: React.Dispatch<React.SetStateAction<string>>;
    setFinalDate: React.Dispatch<React.SetStateAction<string>>;
};

export const BASE_URL = "https://data.origamid.dev/vendas/";

function getDate(n: number) {
    const date = new Date();
    date.setDate(date.getDate() - n);

    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();

    return `${yyyy}-${mm}-${dd}`
}

const DataContext = React.createContext<DataContextType | null>(null);

export const useData = () => {
    const context = React.useContext(DataContext);
    if(!context) throw new Error("useData() is not inside a provider");
    return context;
};

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
    const [initialDate, setInitialDate] = React.useState(getDate(14));
    const [finalDate, setFinalDate] = React.useState(getDate(0));

    const { data, loading, error } = useFetch<Sell[]>(`${BASE_URL}?inicio=${initialDate}&final=${finalDate}`);
    
    return (
        <DataContext.Provider value={{ 
            data, 
            loading, 
            error, 
            initialDate, 
            setInitialDate, 
            finalDate, 
            setFinalDate 
        }}>
            {children}
        </DataContext.Provider>
    );
};