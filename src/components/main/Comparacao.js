import React, { Component } from 'react';
import Button from './Button';

export default class Comparacao extends Component {
    constructor(props){
        super(props);
        this.toggleCharts = this.toggleCharts.bind(this)
        this.state={
            showChart: false
        }
    }

    toggleCharts (){
        const {showChart} = this.state
        this.setState({
            showChart: !this.state.showChart
        })
    }

    render() {
        return (
            <div className="imagem">
                <Button onClick={this.toggleCharts}>Comparação</Button>
                <br></br><br></br>
                {this.state.showChart === true ? <p><img src="/img/columns.png" alt="Botão comparação"/></p> : ""}
            </div>
        )
    }
}