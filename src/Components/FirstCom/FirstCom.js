import React, { Component } from 'react';
import Acom from './Acom/Acom';
import Bcom from './Bcom/Bcom';

class FirstCom extends Component {
    render() {
        const{acom,bcom,aPluse,aMinuse,bPluse,bMinuse}=this.props
        return (
            <div style={{ width: '100%', height: '100%' }}>
                <h1>1-Component</h1>
                <Acom acom={acom} aPluse={aPluse} aMinuse={aMinuse}/>
                <Bcom bcom={bcom} bPluse={bPluse} bMinuse={bMinuse}/>
            </div>
        );
    }
}

export default FirstCom;
