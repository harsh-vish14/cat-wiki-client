import { createContext,useState } from 'react';
export const DataContext = createContext();
export const DataContextProvider = (props) => {
    const [data, setData] = useState([]);
    return (
        <DataContext.Provider value={{ data: [data, setData] }}>
            {props.children}
        </DataContext.Provider>
    )
};