import React from 'react';

class Numbers extends React.Component{
    constructor(props){
        super(props);
        this.state={
            result:''
        }
        this.showResult = this.showResult.bind(this);
        this.resetResult = this.resetResult.bind(this);
    }

    showResult(event){
        this.setState({
            result: event
        })
    }

    resetResult(){
        this.setState({
            result: ''
        })
    }
    render(){
        return(
            <div className="container">

            <div className="row">
                <h2>{this.state.result}</h2>
            </div>
            
            <div className="row row1 border">
                    <div className="col-sm-3" onClick={this.showResult} > 9
                    </div>
                    <div className="col-sm-3" onClick={this.showResult} value="8">8
                    </div>
                    <div className="col-sm-3" onClick={this.showResult} value="7"> 7
                    </div>
                    <div className="col-sm-3" onClick={this.showResult} value="6"> *
                    </div>

                </div>
            <div className="row row2 border">
                    <div className="col-sm-3"> 6
                    </div>
                    <div className="col-sm-3">5
                    </div>
                    <div className="col-sm-3">4
                    </div>
                    <div className="col-sm-3"> +
                    </div>

                </div>
                <div className="row row3 border">
                    <div className="col-sm-3"> 1
                    </div>
                    <div className="col-sm-3">2
                    </div>
                    <div className="col-sm-3"> 3
                    </div>
                    <div className="col-sm-3"> -
                    </div>

                </div>
                <div className="row row4 border">
                    <div className="col-sm-3"> 0
                    </div>
                    <div className="col-sm-3" onClick={this.resetResult} >clr

                    </div>
                    <div className="col-sm-3"> /
                    </div>
                    <div className="col-sm-3"> =
                    </div>

                </div>

            </div>
        )
    }
}

export default Numbers;