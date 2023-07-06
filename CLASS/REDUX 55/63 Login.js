import React from 'react'
import { auth, provider } from './firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


function Login(props){// props--> info == setLoggedI

    const navigate = useNavigate()

    // Display the popup
    function pleaseLogin(){
    signInWithPopup(auth, provider)
    .then(function(){

        // It means user is Loggedin
        props.info(true)

        // Login to display the username and email in the console or browser
        const userName = auth.currentUser.displayName
        const email = auth.currentUser.email

        navigate("/home")
    })
    .catch(function(error){
        console.log(error)
    })
  }

  return (
    <div style={{margin:30}}>
    <button type="button" className="btn btn-outline-primary" onClick={pleaseLogin}>Login with Google</button>
    </div>
  )
}

export default Login