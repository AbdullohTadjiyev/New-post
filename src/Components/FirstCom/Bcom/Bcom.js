import React, { Component } from 'react';

class Bcom extends Component {
    render() {
        return (
            <div style={{width:'90%', marginLeft: '5%',border: '1px solid black',display:'flex' , justifyContent:'space-around',alignItems:'center'}}>
                <div>
                    <h3>B com</h3>
                    <button onClick={this.props.bMinuse}>-</button>
                    <button onClick={this.props.bPluse}>+</button>
                </div>
                <div>
                    <h1> {this.props.bcom} </h1>
                </div>
            </div>
        );
    }
}

export default Bcom;
