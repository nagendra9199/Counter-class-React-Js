import {Component} from 'react'
import './index.css'
class Counter extends Component {
  onIncrement = () => {
    console.log('inc')
    this.setState(prevState => {
      return {count: prevState.count + 1}
    })
  }
  onDecrement = () => {
    console.log('dec')
    this.setState(prevState => {
      return {count: prevState.count - 1}
    })
  }
  state = {count: 0}
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count">{count}</p>
        <div>
          <button className="button" onClick={this.onIncrement}>
            Increse
          </button>
          <button className="button" onClick={this.onDecrement}>
            Decrese
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
