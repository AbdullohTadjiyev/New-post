import React, { Component } from 'react'

export default class Dcom extends Component {
  render() {
    return (
        <div style={{width:'90%', marginLeft: '5%',border: '1px solid black',display:'flex' , justifyContent:'space-around',alignItems:'center'}}>
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
