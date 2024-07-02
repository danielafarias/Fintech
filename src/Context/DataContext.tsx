import React from "react";
import useFetch from "../Hooks/useFetch";

type Sell =  {
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
};

const BASE_URL = "https://data.origamid.dev/vendas/";

const DataContext = React.createContext<DataContextType | null>(null);

export const useData = () => {
    const context = React.useContext(DataContext);
    if(!context) throw new Error("useData() is not inside a provider");
    return context;
};

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
    const { data, loading, error } = useFetch<Sell[]>(BASE_URL);
    return (
        <DataContext.Provider value={{ data, loading, error }}>
            {children}
        </DataContext.Provider>
    );
};