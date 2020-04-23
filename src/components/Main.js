import React, { Component } from 'react';

import Comparacao from './main/Comparacao';
import Distribuicao from './main/Distribuicao';
import Relacionamento from './main/Relacionamento';
import Composicao from './main/Composicao';
import Information from './main/Information';

export default class Main extends Component {
    render() {
        return (
            <div className ='main'>
                <Information/>
                <Comparacao/>
                <Distribuicao/>
                <Relacionamento/>
                <Composicao/>
            </div>
        )
    }
}