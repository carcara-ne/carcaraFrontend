import React, { Component } from 'react';

import ButtonMob from './header/ButtonMob';
import Adress from './header/Adress';
import Logo from './header/Logo';
import Nav from './header/Nav';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <Nav/>
                <ButtonMob/>
                <Logo/>
                <Adress/>
            </div>
        )
    }
}