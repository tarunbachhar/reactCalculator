import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import Button from './Button'

if(process.env.NODE_ENV !=='producton'){
  console.log("Looks like wer are in development mode")
}

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      display:""
    }
    this.toDisplay= this.toDisplay.bind(this)
    this.theResult = this.theResult.bind(this)
    this.erase =this.erase.bind(this)
    this.Square = this.Square.bind(this)
    this.deleted=this.deleted.bind(this)
  }
  toDisplay(e){
   var temp = this.state.display
    temp +=e
  this.setState({
    display:temp
  })
  }
  theResult(){
    let temp = this.state.display
    let emp = eval(temp)
    this.setState({
      display:emp
    })
  }
  erase(){
    let temp = this.state.display
    temp=""
    this.setState({
      display:temp
    })
  }
  Square(){
    let temp = this.state.display
    temp = temp*temp
    this.setState({
      display:temp
    })
  }
 deleted(){
   let temp = this.state.display
   let emp = temp.split("")
   let mp = emp.slice(0,emp.length-1)
   let p = mp.join("")
   this.setState({
     display:p
   })
 }
  render(){
    return(
      <div className="overall">
        <div>
        <input className="display" type="text" name="results" value={this.state.display}  disabled/ >
        </div>
          <Button
           toScreen={this.toDisplay}
           finalResult={this.theResult}
           toNothing={this.erase}
           toPower={this.Square}
           deleteLast={this.deleted}
          />
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('root'))
