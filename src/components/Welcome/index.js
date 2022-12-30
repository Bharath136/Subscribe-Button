import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {count: true}

  click = () => {
    this.setState(prevState => {
      if (prevState.count === true) {
        return {count: false}
      }
      return {count: true}
    })
  }

  onDecrease = () => {
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  render() {
    const {count} = this.state
    let val
    if (count === true) {
      val = (
        <button className="button" onClick={this.click}>
          {' '}
          Subscribe{' '}
        </button>
      )
    } else {
      val = (
        <button className="button" onClick={this.click}>
          {' '}
          Subscribed{' '}
        </button>
      )
    }
    // }
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        {val}
      </div>
    )
  }
}

export default Welcome

// import {Component} from 'react'

// import './index.css'

// class Welcome extends Component {
//   state = {isSubscribed: true}

//   click = () => {
//     const {isSubscribed} = state
//     this.setState(prevState => {
//         if(prevState.isSubscribed === true){
//             return ({isSubscribed: false})
//         }else{
//             return ({isSubscribed: true})
//         }
//     }
//     )
//   render() {
//     const {isSubscribed} = this.state
//     let val;
//     if(isSubscribed){
//         val = <button className="button" onClick={this.click}>
//             {' '}
//             Subscribe{' '}
//           </button>
//     }else{
//         val = <button className="button" onClick={this.click}>
//             Subscribed
//           </button>
//     }

//     return (
//
//     )
//   }
// }

// export default Welcome
