import React from 'react';
import Increment from './Increment'

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count : 0
        }
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleIncrement(){
        this.setState({
            count: this.state.count+1
        })
    }
    
    handleDecrement(){
        this.setState({
            count: this.state.count-1
        })
    }

    handleReset(){
        this.setState({
            count: 0
        })
    }
    
    render(){
        return(
        <div>
            <p>This button changes the count</p>
            <button className="btn btn-primary" onClick={this.handleIncrement}>Increment</button>
            <button className="btn btn-danger" onClick={this.handleDecrement}>Decrement</button>
            <button className="btn btn-default" onClick={this.handleReset}>Reset</button>
            <h1>Count : {this.state.count}</h1>
            {/*<Increment change={this.state.count} /> */}
        </div>)
    }
}

export default Main;