import useFetch from "./48 usefetch";
import Card from "./48 card";
import { useState } from "react";

function App() {
    const {data, error, loading} =useFetch('https://api.github.com/users')
    const [search, setSearch]=useState('');
    const filterUser =(e)=>{ setSearch (e.target.value)}
    
    return (
        <div className="App">
        <div className="navbar">
        <input type="text" onChange={filterUser} placeholder="Enter User Name"/>
        </div>
        
        <div className="container">{
            loading ? <h2>loading...</h2> : data.map((val) => {
                if(val.login.includes(search.toLowerCase())) 
                return <Card data={val} />
            })
        }
        </div>
    </div>
    );
}


export default App;