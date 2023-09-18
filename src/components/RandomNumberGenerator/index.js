// Write your code here

import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  countChange = () => {
    this.setState({count: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-con">
        <div className="cg-con">
          <h1 className="head">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" onClick={this.countChange} className="but">
            Generate
          </button>
          <p className="head">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
