import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (<AppBar>
        <Toolbar className='toolbar_navbar' sx={{display: "flex", justifyContent:"space-evenly"}}>
            <Typography sx={{color: "black", fontSize: "25px"}}>
                PetMart
            </Typography>
            <Button sx={{color: "white", fontSize:"18px"}}>
                Inicio 
            </Button>
            <Button sx={{color: "white", fontSize:"18px"}}>
                Categorias
            </Button>
            <Button sx={{color: "white", fontSize:"18px"}}>
                Productos
            </Button>
            <Button sx={{color: "white", fontSize:"18px"}}>
                 Nosotros    
            </Button>
            <CartWidget />    
        </Toolbar>
    </AppBar>);
}

export default Navbar;
