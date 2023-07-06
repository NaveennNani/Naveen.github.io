import React from "react";
import "./App.css"
import { motion, Reorder } from "framer-motion"


const names =[
    {
        name: "Raju",
        age: 24
    },
    {
        name: "Rani",
        age: 22
    },
    {
        name: "ashok",
        age: 28
    },
    {
        name: "Kiran",
        age: 20
    }
]

function App(){

    const [myData, setMyData] = React.useState(names)
    
    return (
        <Reorder.Group values={myData} onReorder={setMyData}>
        {myData.map(function(i)
            {
            return <Reorder.Item key={i.age} value={i}><li>{i.name}</li></Reorder.Item>
            }
        )}
        </Reorder.Group>
        )
}
export default App;