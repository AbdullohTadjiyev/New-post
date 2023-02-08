import React, { Component } from 'react';

class Acom extends Component {
    render() {
        return (
            <div style={{width:'90%', marginLeft: '5%',border: '1px solid black',display:'flex' , justifyContent:'space-around',alignItems:'center'}}>
                <div>
                    <h3>A com</h3>
                    <button onClick={this.props.aMinuse} >-</button>
                    <button onClick={this.props.aPluse}>+</button>
                </div>
                <div>
                    <h1>{this.props.acom}</h1>
                </div>
            </div>
        );
    }
}

export default Acom;
