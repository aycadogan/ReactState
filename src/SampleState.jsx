import React, { Component } from 'react'

class SampleState extends Component {
    state = {
        brand: 'Ford'
    }
    
    updateCar = () => {
        //this is bad!!!
        // this.state.brand = 'Tesla'

        this.setState({
            brand: 'Tesla'
        })
    }

    render() {
        return (
            <h1>
                My Car: {this.state.brand}
                <br />
                <button onClick={this.updateCar}>Click to change</button>
            </h1>
        )
    }
}

export default SampleState
