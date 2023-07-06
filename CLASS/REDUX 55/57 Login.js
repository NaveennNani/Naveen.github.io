import React from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from './firebase'
import { useNavigate } from 'react-router-dom'

function Login(props) {

    const navigate = useNavigate()

  function signIn(){
    signInWithPopup(auth, provider)
    .then(function(){
        const username = auth.currentUser.displayName
        const email = auth.currentUser.email
        // console.log(username, email)
        props.setLoggedIn(true)
        navigate("/mobile")
    })
    .catch(function(error) {
        console.log(error)
    })
  }
  
  return (
    <div>
        <button onClick={signIn}>Signin with google</button>
    </div>
  )
}

export default Login