import React from 'react'
import { Axios } from 'axios'
import { imageUrl } from './Api'
import { API_KEY } from './Api'
import './index.css'


function NetflixOriginals() {

    const [originalsData, setOriginalsData] = React.useState([])

    React.useEffect(function(){
        Axios.get(`https://api.themoviedb.org/3/discover/tv/?api_key=${API_KEY}&with_network=123`)
        .then(function(output){
            setOriginalsData(output.data.results)
        })
        .catch(function(error){
        console.log(error)
        })
    },[])




    return (
        <div>
             <h2 style={{color: 'white'}}>NETFLIX ORIGINALS</h2> 
             <div className='allImages'>{
              originalsData.map(function(info)
        {
        // console.log(info)
        // console.log(https://image.tmdb.org/t/p/original/SERr09UrnVm@hdXBeefNVtQMxI.jpg)
        // console.log(imageUrl+info.poster_path)
        return <img width="250px" height="250px" src={imageUrl+info.poster_path}/>
        })
    }
        </div>
        </div>
        )
//   return (
//     <div className="allImages">
//     {
//         originalsData.map(function(info){
//             return <img width="250px" height="250px" src={imageUrl+info.poster_path}/>
//         })
//     }   
//     </div>
    
//   )
}

export default NetflixOriginals