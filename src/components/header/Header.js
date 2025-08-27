import { NavLink } from 'react-router';
import'./header.css';

function Header(){
    return(
        <header className='myheader'>
            <a href='google.html'>google</a>
            <NavLink to='/' > Home </NavLink>
            <NavLink to='/servies' > Servies </NavLink>
            <NavLink to='/career' > Career </NavLink>
            <NavLink to='/blogs' > Blogs </NavLink>
            <NavLink to='/contact' > Contact </NavLink>
        </header>
    )
}

export default Header;