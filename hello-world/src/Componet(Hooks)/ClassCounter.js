import React, { Component } from 'react'

export class ClassCounter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    ClickCounter = () => {

        this.setState({

            count : this.state.count+1
        })
    }
  render() {

    const {count} =this.state
    return (
      <div>
        <button onClick={this.ClickCounter}> Count -- {count}</button>
      </div>
    )
  }
}

export default ClassCounter