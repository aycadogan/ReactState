import React, { Component } from 'react';

class SectionA extends Component {

    state = {
        text: "Click the button",
        btnText: "Click Me!"
    }

    btnClick = () => {
        this.setState({
            text: "You are beautiful!",
            btnText: "Really beautiful!!!"
        })

    }

    render() {
        return (
            <div>
                <h1>101.a</h1>
                <div className="msg">{this.state.text}</div>
                <button className="btn" onClick={this.btnClick}>
                    {this.state.btnText}
                </button>
            </div>
        );
    }
}

export default SectionA;
