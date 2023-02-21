import { Fragment,useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import { Usercontext } from '../../components/contexts/user.context';
import './navigation.styles.scss'
import { SignOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.components';
const Navigation=()=>{
  const {currentUser}=useContext(Usercontext)
  console.log('current user',currentUser)
  // const {}=use
 
    return(
      <Fragment>
       <div className='navigation'>
            <Link className='logo-container' to='/'>
                <CrownLogo className='logo'/>
            </Link>
            
            <div  className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                    SHOP
                </Link>

                {
                  currentUser ?  (
                  <Link className='nav-link' onClick={SignOutUser}>
                      SIGN OUT
                  </Link>
              ):(

                <Link className='nav-link' to='/auth'>
                SIGN IN
                </Link>
              )
                }

                <Link>
                  
                    <CartIcon />
                  
                </Link>
            </div>
        
        </div>
        <Outlet/>
      </Fragment>
      
    )
  }

export default Navigation;