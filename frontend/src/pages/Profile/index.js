import React from 'react'
import {Link} from 'react-router-dom'
import './stylesProfile.css'

import logoImg from '../../assets/logo.svg'

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                
            </header>
        </div>
    )
}