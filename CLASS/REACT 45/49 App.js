import { Component } from "react";
import Comp from "./Comp";


class App extends Component{

    constructor(props) {
        console.log('constructor');
        super(props);

        this.state = {
            count: 0,
            show:true
        }
    }

    inc = () => {
        this.setState({ count: this.state.count + 1 })
    } 
    
    // componentDidMount ----> useEffect(()=>{}, [])
    componentDidMount(){
        console.log('componentDidMount');
    }
        
    // shouldComponentUpdate ---> default value is true whioch lets us update
    shouldComponentUpdate(){
        return true;
    }
        
    // componentDidUpdate
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }

    
    render(){
        return <>
        <h1>That was simple </h1>
        <h1> Count : {this.state.count} </h1>
        <button className="btn" onClick={this.inc}> Increment </button>
        {
            this.state.show? <Comp/> : ''
        }
        
        <button onClick={() =>{this.setState({show:!this.state.show})}}> Show Component </button>
        </>
    }

}

export default App;