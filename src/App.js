import React, { Component } from 'react';
import FirstCom from './Components/FirstCom/FirstCom';
import SecoundCom from './Components/SecoundCom/SecoundCom';

class App extends Component {
  state={
    acom:0,
    bcom:0,
    ccom:0,
    dcom:0
  }
  allminusebtn =()=>{
    let {acom ,bcom ,ccom ,dcom}=this.state
    acom--
    bcom--
    ccom--
    dcom--
    
    this.setState({
      acom,
      bcom,
      ccom,
      dcom,
     } )
  }
  allplusebtn =()=>{
    let {acom ,bcom ,ccom ,dcom}=this.state
    acom++
    bcom++
    ccom++
    dcom++
    
    this.setState({
      acom,
      bcom,
      ccom,
      dcom,
     } )
  }
  aPluse =()=> {
    let {acom}=this.state
    acom++
    this.setState({
      acom
    })
  }
  aMinuse =()=> {
    let {acom}=this.state
    acom--
    this.setState({
      acom
    })
  }
  bPluse =()=> {
    let {bcom}=this.state
    bcom++
    this.setState({
      bcom
    })
  }
  bMinuse =()=> {
    let {bcom}=this.state
    bcom--
    this.setState({
      bcom
    })
  }
  cPluse =()=> {
    let {ccom}=this.state
    ccom++
    this.setState({
      ccom
    })
  }
  cMinuse =()=> {
    let {ccom}=this.state
    ccom--
    this.setState({
      ccom
    })
  }
  dPluse =()=> {
    let {dcom}=this.state
    dcom++
    this.setState({
      dcom
    })
  }
  dMinuse =()=> {
    let {dcom}=this.state
    dcom--
    this.setState({
      dcom
    })
  }
  render() {
    const{acom,bcom,ccom,dcom}= this.state
    return (
      <div style={{display: 'flex', justifyContent: 'center', borderRadius:'10%' , alignItems: 'center' , flexDirection: 'column' , height: '80vh', width:'60%', margin: '10vh 20%', gap: '30px' , backgroundColor:'' , border: '5px solid blue'}} >
        <div>
          <button style={{width:'50px',height:'30px'}} onClick={this.allplusebtn} >+</button>
          <button style={{width:'50px',height:'30px'}} onClick={this.allminusebtn}>-</button>
        </div >
        <div style={{display: 'flex', justifyContent: 'center',alignItems: 'center', gap: '50px'}}>
        <div style={{width:'300px',height: '400px', borderRadius:'10%' , border: '3px solid green' }}><FirstCom acom={acom} bcom={bcom} aPluse={this.aPluse} aMinuse={this.aMinuse} bPluse={this.bPluse} bMinuse={this.bMinuse} /></div>
        <div style={{width:'300px',height: '400px',borderRadius:'10%', border: '3px solid green' }}> <SecoundCom ccom={ccom} dcom={dcom}  cPluse={this.cPluse}  cMinuse={this.cMinuse} dPluse={this.dPluse}  dMinuse={this.dMinuse} /> </div>
        </div>
      </div>
    );
  }
}

export default App;
