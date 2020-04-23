import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default class Nav extends Component {
    render() {
        return (
            <div className="nav"> 
                <AnchorLink href='#home'>Home</AnchorLink>
                <AnchorLink href='#graficos'>Tipos de Gráficos</AnchorLink>
                <AnchorLink href='#faq'>FAQ</AnchorLink>
                <AnchorLink href='#about'>About</AnchorLink>
            </div>
        )
    }
}