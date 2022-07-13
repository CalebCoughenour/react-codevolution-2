import React, { Component, PureComponent } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'
import MemoComponent from './MemoComponent'

class ParentComp extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Caleb'
    }
  }

  componentDidMount() {
    setInterval(() => {
    this.setState({
      name: 'Caleb'
    })
   }, 2000)
  }
  render() {
    console.log('***************parent comp********************')
    return (
      <div>
        Parent Component
        <MemoComponent name={this.state.name} />
        {/* <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} /> */}
      </div>
    )
  }
}

export default ParentComp