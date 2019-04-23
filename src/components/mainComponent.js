import React from 'react';
import Numbers from './Numbers';
import Result from './Result';

class Main extends React.Component{

    constructor(){
        super();
        this.state={
            result:''
        }
    }


    render(){
        return(<div>
            <Result />
            <Numbers />
        </div>)
    }
}

export default Main;