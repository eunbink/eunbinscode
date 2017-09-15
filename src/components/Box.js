import React, { Component } from 'react';

class Box extends Component {   
    constructor(){
        super();
        
        this.state = {
            input:''           
        }

        this.clickSearch = this.clickSearch.bind(this);
    }

    clickSearch(){
        return this.state.input;
        
    }



    render() {
        return (
            <div className="inputContainer">
                <input type='text' value={this.state.input} onChange={(e) => {
                    this.setState({
                      input: e.target.value })
                  }}/>
                <button onClick ={ () => this.clickSearch() }>SEARCH</button>                
            </div>
        );
    }
    
}



export default Box;