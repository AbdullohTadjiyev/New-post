import React, { Component } from 'react';
import Ccom from './Ccom/Ccom';
import Dcom from './Dcom/Dcom';

class SecoundCom extends Component {
    render() {
        const{ccom,dcom,cPluse,cMinuse,dPluse,dMinuse}=this.props
        return (
            <div style={{ width: '100%', height: '100%' }}>
                <h1>2-Component</h1>
                <Ccom ccom={ccom} cPluse={cPluse} cMinuse={cMinuse}/>
                <Dcom dcom={dcom} dPluse={dPluse} dMinuse={dMinuse}/>
            </div>
        );
    }
}

export default SecoundCom;
