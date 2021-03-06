import React, { Component } from 'react';

class SectionB extends Component {

    state = {
        text: "He loves me",
        btnText: "Hola",
        status: true
    }

    btnClick = () => {
        this.state.status ? 
        this.setState({
            text:"He loves me not",
            status:false
        }) 
        : 
        this.setState({
            text:"He loves me",
            status:true
        })

    }

    render() {
        return (
            <div>
                <h1>101.b</h1>
                <div className="msg">{this.state.text}</div>
                <button className="btn" onClick={this.btnClick}>
                    {this.state.btnText}
                </button>
            </div>
        );
    }
}

export default SectionB;
