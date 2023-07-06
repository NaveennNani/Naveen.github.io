import React from "react";
import "./App.css"
import { motion, Reorder } from "framer-motion"

function App(){
    
    
    const myVariant = {
        first: {width: 250, height: 200, backgroundColor: "red", margin: 300, marginTop: 200}
    }

    return (
        <motion.img src="https://www.cardio.com/hubfs/human%20heart%20illustration.jpeg" variants={myVariant} animate={"first"} whileHover={
        {
            scale: 1.1,
            transition: {
                repeat: Infinity
            }
        }}>
    </motion.img>
    )
}
    
export default App;


// import React from "react";
// import "./App.css"
// import { motion, Reorder, AnimatePresence } from "framer-motion"

// function App(){

//     const [ box, setBox ] = React.useState(true)
    
//     const myVariant = {
//         first: {width: 250, height: 200, backgroundColor: "red", margin: 300, marginTop: 200}
//     }

//     function goTo(){
//         setBox(false)
//     }

//     return (
//             <AnimatePresence> 
//             {box && <motion.div exit={ 
//                 {y: 100}}
//                 variants={myVariant}
//                 animate={"first"} onClick={goTo}></motion.div>}
//             </AnimatePresence>
//     )
// }
    
// export default App;