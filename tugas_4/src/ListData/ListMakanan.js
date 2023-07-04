import React, { Component } from "react";

class ListMakanan extends Component{
    constructor(props){
        super(props);
        this.state={
            datalist : this.props.datalist
        }
    }
    render(){
        return(
            <div>
                <img src={this.state.datalist} alt="product makanan" width="150"/>
            </div>
        )
    }
}

export default ListMakanan;