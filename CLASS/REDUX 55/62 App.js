import React from "react";
import './App.css';
import { motion, useTime, useTransform, Reorder, rotate } from "framer-motion"
// npm install framer-motion to run animation



const myVariant = {
    first: {width: 300, height: 300, backgroundColor: "black", borderRadius: "50%", opacity:0.1}, 
    second: {width: 300, height: 300, backgroundColor: "yellow", borderRadius: "0%", x: 200, y:200} 
}

function App(){

    const myTime = useTime()//4000
    const rotate = useTransform(myTime, [0, 5000], [0, 360], {clamp: false})
    

    const [stage, setStage] = React.useState(false)
    // stage = false

    function changeIt(){
        // Logic to changeit from true to false and viceversa
        setStage(!stage)
    }
    
    return (
        <div>
            <motion.div 
            variants={myVariant} 
            animate={ stage ? "first": "second" } 
            onClick={changeIt}
            transition={ {duration: 2} }>
            </motion.div>

            <motion.div 
            animate={ {width: 200, height: 200, backgroundColor: "orange", marginLeft: 600, marginTop:0 } }
            whileHover={ {scale: 2, transition: {duration: 3}, boxShadow: "5px 5px 10px black", borderRadius: "50%"} }>
            </motion.div>

            <motion.div style={{rotate}} animate={ 
                {width: 200, height: 200, backgroundColor: "orange", margin: "auto", marginTop:100} }>
            </motion.div>
        </div>
    )
}

export default App