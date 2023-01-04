import { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconsContainer from './IconsContainer';
import Dropdown from './Dropdown';

export default function Navbar({ onMenuOpen }) {

    return <div className="navbar">
        <ArrowBackIcon fontSize='large' className='arrow' onClick={onMenuOpen}/>
        <h2>My Reservations</h2>
        <IconsContainer className='icons-container' />
    </div>
}