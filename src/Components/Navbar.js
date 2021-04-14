import React from 'react'
import {Link} from 'react-router-dom'

import {ReactComponent as Logo} from '../assets/star-wars-logo.svg'
import {ReactComponent as Search} from '../assets/search.svg'
import {ReactComponent as List} from '../assets/list2.svg'

const Navbar = () => {
    return (
        <div className='navbar'>
            <Logo width={100} height={50}/>
            <div className='navbar__items'>
                <Link to='/' className='navbar__item'>
                    <List width={24} height={24} />
                    <div className='navbar__item--description'>Characters List</div>
                </Link>
                <Link to='/search' className='navbar__item'>
                    <Search width={24} height={24} />
                    <div className='navbar__item--description'>Search for characters</div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
