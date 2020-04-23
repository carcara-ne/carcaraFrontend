import React, { Component } from 'react';
import Button from './Button';

export default class Composicao extends Component {
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
        const {showChart} = this.state
        return (
            <div className="imagem">
                <Button onClick={this.toggleCharts}>Composição</Button>
                <br></br><br></br>
                {this.state.showChart === true ? <p><img src="/img/scater.png" alt="Botão composição"/></p> : ""}
            </div>
        )
    }
}
