import React from "react";
import "./App.css"
import { motion, Reorder } from "framer-motion"

function App(){
    
    return (
        <motion.div
        animate={ {width: 300, height: 300, backgroundColor: "blue"} } 
        drag
        dragConstraints={ {top: 10, left: 0, right: 0, bottom: 0} } 
        dragElastic={0.5}>
        </motion.div>
        )

}

// // Creating a variant is nothing but creating a simple javascript object
// // Variants --> Pre defined targets

// const myVariant = {
//     data: {width: 300, height: 300, backgroundColor: "blue"}
// }

// function App(){

//     return (
//     <motion.div
//     animate={"data"}
//     variants={myVariant}>
//     </motion.div>
//     );
// }



// const myVariant = {
//     data: {width: 100, height: 100, backgroundColor: "blue", marginLeft: 700, marginTop: 300}
// }

// function App(){
    
//     return (
//     <motion.button variants={myVariant} animate={"data"} whileHover={
//         {scale: [2,1,2,1,2,1,2,1]}
//     }>
//     Click me
//     </motion.button>
//     );

// }



export default App;