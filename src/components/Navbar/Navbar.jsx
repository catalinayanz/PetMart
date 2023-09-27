import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className='container'>
            <nav className='nav'>
                <div className='brand'>
                <NavLink className="nav__link_logo" to='/'>🐱🐶</NavLink>
                </div>
                <ul className='nav__list'>
                <li>
                    <NavLink className="nav__link" to='/category/juguetes'>Juguetes</NavLink>                        
                    </li>
                    <li>
                    <NavLink className="nav__link" to='/category/abrigos'>Abrigos</NavLink>                        
                    </li>
                    <li>
                    <NavLink className="nav__link" to='/category/medicamentos'>Medicamentos</NavLink>                        
                    </li>
                    <li>
                    <NavLink className="nav__link" to='/category/otros'>Otros</NavLink>                        
                    </li>
                    <li>
                    <NavLink className="nav__link" to='/cart'>Cart</NavLink>
                    <CartWidget/>                        
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
