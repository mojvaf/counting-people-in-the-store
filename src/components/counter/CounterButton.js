import React, { Component } from 'react';
import PropType from 'prop-types'
import './Counter.css'

class CounterButton extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    render() {
        return (
            <div >
                <button style={counterButtonStyle} onClick={this.increment}>+{this.props.by}</button>
                <button style={counterButtonStyle} onClick={this.decrement}>-{this.props.by}</button>

            </div>
        )
    }
    increment(by) {
        this.setState(
            (prevState) => {
                //the new value of counter
                return { counter: prevState.counter }
            })
        this.props.incrementMethod(this.props.by)

    }

    decrement() {
        this.setState({
            counter: this.state.counter - this.props.by

        })
        this.props.decrementMethod(this.props.by)
    }
}

const counterButtonStyle = {
    backgroundColor: 'green',
    fontSize: '40px',
    padding: '15px',
    color: 'white',
    width: '100px'
}

CounterButton.defaultProps = {
    by: 1
}

CounterButton.PropType = {
    by: PropType.number
}
export default CounterButton
