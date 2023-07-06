import React from 'react'
import Axios from "axios"
import { addUsers, fetchUsers } from './redux'
import {useDispatch, useSelector} from "react-redux"

function UserData(){
    const [useData, setUserData] = React.useState([])
    const output = useSelector(function(data)
    {
        return data.myReducer.users
    })
    
    const dispatch = useDispatch()
    React.useEffect(function(){
        dispatch(fetchUsers())
    },[])
    
    return (
        <div>{
            output.map(function(user){
                return <ul><li>{user.username}</li></ul>
            })
        }
        </div>
    )
}

export default UserData