import React, { Component } from 'react'

export default class Comp extends Component { 
    componentWillUnmount(){
        console.log('component Unmount');
    }
        
        render() {
            
            return (
                <div><h1>Component Visible</h1></div>
                )
            }
    }
