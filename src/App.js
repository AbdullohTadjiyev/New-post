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
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center' , flexDirection: 'column' , height: '80vh', width:'60%', margin: '10vh 20%', gap: '30px' , border: '1px solid black'}} >
        <div>
          <button onClick={this.allplusebtn} >+</button>
          <button onClick={this.allminusebtn}>-</button>
        </div >
        <div style={{display: 'flex', justifyContent: 'center',alignItems: 'center', gap: '50px'}}>
        <div style={{width:'300px',height: '400px', border: '1px solid black' }}><FirstCom acom={acom} bcom={bcom} aPluse={this.aPluse} aMinuse={this.aMinuse} bPluse={this.bPluse} bMinuse={this.bMinuse} /></div>
        <div style={{width:'300px',height: '400px', border: '1px solid black' }}> <SecoundCom ccom={ccom} dcom={dcom}  cPluse={this.cPluse}  cMinuse={this.cMinuse} dPluse={this.dPluse}  dMinuse={this.dMinuse} /> </div>
        </div>
      </div>
    );
  }
}

export default App;
