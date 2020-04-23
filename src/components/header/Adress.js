import React, { Component } from 'react';

export default class Adress extends Component {
    render() {
        return (
            <div className="adress">
                <img src="/img/email.png" alt="Email de contato"/> carcara@ufcg.com <br/>
                <img src="/img/contato.png" alt="Telefone de contato"/> (xx) xxxxx-xxxx <br/>
            </div>
        )
    }
}