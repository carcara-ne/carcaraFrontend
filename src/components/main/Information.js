import React, { Component } from 'react';
import styled from 'styled-components';

const Text = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #000;
`;


export default class Information extends Component{
    render(){
        return(
            <div className='info'>
                <Text>Qual tipo de gráfico você gostaria de ver?</Text>
            </div>
        )
    }
}