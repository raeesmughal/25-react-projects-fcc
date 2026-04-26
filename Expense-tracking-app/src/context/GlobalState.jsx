import { createContext, useReducer } from "react"

import AppReducer from './AppReducer'



// Initial state

const InitialState = {
    // expenses are -ve and income is +ve
    transactions: [
        // { id: 1, text: 'Flower', amount: -20 },
        // { id: 2, text: 'Salary', amount: 300 },
        // { id: 3, text: 'Book', amount: -10 },
        // { id: 4, text: 'Camera', amount: 150 },
        // { id: 5, text: 'Glass', amount: -13 },
        // { id: 6, text: 'Handfree', amount: -5 },
        // { id: 7, text: 'Stocks Profit', amount: 150 },
        // { id: 8, text: 'Property Rent', amount: 100 },
        // { id: 9, text: 'Car Maintenance', amount: -145 },
    ]
}


// create context

export const GlobalContext = createContext(InitialState);


// provider component 

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, InitialState);

    // Action
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id,
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction,
        });
    }

    return <GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
    }}>
        {children}
    </GlobalContext.Provider>
} 