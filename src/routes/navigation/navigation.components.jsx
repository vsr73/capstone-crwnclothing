import { Fragment,useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import { Usercontext } from '../../components/contexts/user.context';
import {NavigationContainer} from './navigation.styles.jsx'
import { SignOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import { LogoContainer,NavLinks,NavLink } from './navigation.styles.jsx';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.components';
const Navigation=()=>{
  const {currentUser}=useContext(Usercontext)
  // const {}=use
 
    return(
      <Fragment>
       <NavigationContainer>
        
            <LogoContainer to='/'>
                  <CrownLogo className='logo'/>
            </LogoContainer>
            
            <NavLinks>
                <NavLink to='/shop'>
                    SHOP
                </NavLink>

                {
                  currentUser ?  (
                  <NavLink onClick={SignOutUser}>
                      SIGN OUT
                  </NavLink>
              ):(

                <NavLink to='/auth'>
                SIGN IN
                </NavLink>
              )
                }

                <Link>
                  
                    <CartIcon />
                  
                </Link>
            </NavLinks>
        
        </NavigationContainer>
        <Outlet/>
      </Fragment>
      
    )
  }

export default Navigation;