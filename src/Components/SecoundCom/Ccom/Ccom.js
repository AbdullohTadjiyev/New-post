import React, { Component } from 'react';

class Ccom extends Component {
    render() {
        return (
            <div style={{width:'90%', marginLeft: '5%', borderRadius:'20px' , border: '2px solid blue', marginBottom:'30px' ,display:'flex' , justifyContent:'space-around',alignItems:'center'}}>
                <div>
                    <h3>C com</h3>
                    <button onClick={this.props.cMinuse}>-</button>
                    <button onClick={this.props.cPluse}>+</button>
                </div>
                <div>
                    <h1> {this.props.ccom} </h1>
                </div>
            </div>
        );
    }
}

export default Ccom;
