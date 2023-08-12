// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    tossimage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    count: 0,
    headscount: 0,
    tailscount: 0,
  }

  tosscoin = () => {
    const random = Math.floor(Math.random() * 2)
    if (random === 0) {
      this.setState(prevstate => ({
        tossimage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
        count: prevstate.count + 1,
        headscount: prevstate.headscount + 1,
      }))
    } else {
      this.setState(prevstate => ({
        tossimage: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
        count: prevstate.count + 1,
        tailscount: prevstate.tailscount + 1,
      }))
    }
  }

  render() {
    const {tossimage, headscount, tailscount, count} = this.state

    return (
      <div className="container">
        <div className="innercontainer">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={tossimage} alt="toss result" className="image" />
          <button type="button" className="button" onClick={this.tosscoin}>
            Toss Coin
          </button>
          <div className="countcontainer">
            <p className="countpara">Total:{count}</p>
            <p className="countpara">Heads:{headscount}</p>
            <p className="countpara">Tails:{tailscount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
