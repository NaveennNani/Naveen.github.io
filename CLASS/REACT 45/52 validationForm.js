import React from 'react'; 
import './index.css';
import InvoiceForm from './InvoiceForm';

export const myContext = React.createContext()

function App(){
    const [currency, setCurrency] = React.useState("INR")
    const [tax, setTax] = React.useState(0)
    
    return (
        <div>
        <myContext.Provider value={ {myCurrency: currency, myTax: tax} }> 
        <InvoiceForm/>
        </myContext.Provider>
        </div>
    )}
    

export default App