import React from 'react'

class Button extends React.Component {
  constructor(props){
    super(props)
    this.addToScreen=this.addToScreen.bind(this)
    this.result= this.result.bind(this)
    this.toZero =this.toZero.bind(this)
    this.power= this.power.bind(this)
    this.delete =this.delete.bind(this)
  }
  addToScreen(e){
    e.preventDefault()
    this.props.toScreen(e.target.value)
  }
  result(){
    this.props.finalResult()
  }
  toZero(){
    this.props.toNothing()
  }
  power(){
    this.props.toPower()
  }
  delete(){
    this.props.deleteLast()
  }
  render(){
    return(
         <div className="container-fluid">
             <div>
              <button className="btn btn-danger battan AC" onClick={this.toZero}>AC</button>
              <button className="btn btn-warning battan CE" onClick={this.delete}>CE</button>
              <button className="btn btn-default battan"  onClick={this.power}>x^2</button>
              <button className="btn btn-default battan" value="+" onClick={this.addToScreen}>+</button>
             </div>
            <div>
             <button className="btn btn-default battan" value="7" onClick={this.addToScreen}>7</button>
             <button className="btn btn-default battan" value="8" onClick={this.addToScreen}>8</button>
             <button className="btn btn-default battan" value="9" onClick={this.addToScreen}>9</button>
             <button className="btn btn-default battan" value="/" onClick={this.addToScreen}>/</button>
            </div>
            <div>
             <button className="btn btn-default battan" value="4" onClick={this.addToScreen}>4</button>
             <button className="btn btn-default battan" value="5" onClick={this.addToScreen}>5</button>
             <button className="btn btn-default battan" value="6" onClick={this.addToScreen}>6</button>
             <button className="btn btn-default battan" value="*" onClick={this.addToScreen}>×</button>
            </div>
            <div>
             <button className="btn btn-default battan" value="1" onClick={this.addToScreen}>1</button>
             <button className="btn btn-default battan" value="2" onClick={this.addToScreen}>2</button>
             <button className="btn btn-default battan" value="3" onClick={this.addToScreen}>3</button>
             <button className="btn btn-default battan" value="-" onClick={this.addToScreen}>-</button>
            </div>
            <div className="lastrow">
             <button className="btn btn-default battan" value="0" onClick={this.addToScreen}>0</button>
             <button className="btn btn-default battan" value="." onClick={this.addToScreen}>.</button>
             <button className="btn btn-warning equal" onClick={this.result}>=</button>
            </div>
        </div>
    )
  }
}

module.exports = Button
