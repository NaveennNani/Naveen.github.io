import React,{useState} from "react";
import { useFormik } from "formik";
import { formSchema } from "./validationForm";


// function App(){

//     const formik = useFormik({ 
//         initialValues: { 
//             username: "",//username: "Raju" 
//             email: "",//email: "raju123@gmail.com"
//             password: ""//password: "Welcome1234"
//         },
        
//         onSubmit: function(){
//             console.log("Data is submitted") 
//         },

//     validationSchema: formSchema, 
//     validate: function(data)
//     {
//     //Logic the logic to validate the data 
//     // {username: 'Raju', email: 'raju@gmail.com', password: 'Welcome'}
    
//     let errors = {} // {error1: "Username is required"}
//     if(!data.username)
//     {
//         errors.username = "Username is required"
//     }
//     if(!data.email)
//     {
//         errors.email="Email is required"
//     }
//     if(!data.password)
//     {
//         errors.password= "Password is required"
//     }
//     return errors
//     }
// })

//     return (
//         <div>
//         <form method="POST" onSubmit={formik.handleSubmit}>
            
//             <label>Username:</label>
//             <input type="text" value={formik.values.username} name="username" onChange={formik.handleChange}/> <br></br>
//             {formik.errors.username ? <h3>{formik.errors.username}</h3> : null }
            
//             <label>Email:</label>
//             <input type="email" value={formik.values.email} name="email" onChange={formik.handleChange}/> <br></br>
//             {formik.errors.email ? <h3>{formik.errors.email}</h3> : null }
            
//             <label>Password:</label>
//             <input type="password" value={formik.values.password} name="password" onChange={formik.handleChange}/><br></br>
//             {formik.errors.password ? <h3>{formik.errors.password}</h3> : null }
//         </form>
//         </div>
//     );
// }

// export default App;




function App(){
    const [fields, setFields] = useState([])
    
    function addField(){
        setFields([...fields, ""])
    }

    function handleChange(index, event){
        const newFields = [...fields] 
        newFields[index] = event.target.value 
        setFields(newFields)
    }

    function handleSubmit(event){
        event.preventDefault()
    }

    return (
        <div>
        <form onSubmit={handleSubmit}> 
            {fields.map((field, index)=>
                {
            return
            <input key={index} type="text" placeholder={`Field ${index + 1}`} value={field} 
            onChange={(event) => 
                handleChange(index, event)
            }
            />
        })}
        <button type="button" onClick={addField}>Add</button>
        </form>
        </div>
        );
    }

export default App;