import React, { Component } from 'react'

export default class Dcom extends Component {
  render() {
    return (
        <div style={{width:'90%', borderRadius:'20px' ,  marginLeft: '5%',border: '2px solid blue',display:'flex' , justifyContent:'space-around',alignItems:'center'}}>
        <div>
            <h3>D com</h3>
            <button onClick={this.props.dMinuse}>-</button>
            <button onClick={this.props.dPluse}>+</button>
        </div>
        <div>
            <h1> {this.props.dcom} </h1>
        </div>
    </div>
    )
  }
}
