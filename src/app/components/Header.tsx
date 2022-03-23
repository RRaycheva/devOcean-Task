import React from 'react'
import { devOceanText } from '../constants'
import logo from '../../assets/logo.png'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <Link to='/'><img src={logo} alt="devOcean logo" style={{width: "25%"}} />
        <span className='logoText'>{devOceanText}</span>
        </Link>
    </div>
  )
}

export default Header