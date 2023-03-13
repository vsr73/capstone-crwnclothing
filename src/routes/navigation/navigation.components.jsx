import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import { useSelector } from 'react-redux';
import {NavigationContainer} from './navigation.styles.jsx'
import { signOutStart } from '../../store/user/user.action';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import { LogoContainer,NavLinks,NavLink } from './navigation.styles.jsx';
import { selectCurrentUser } from '../../store/user/user.selector';
import { useDispatch } from 'react-redux';
const Navigation=()=>{
  // const {currentUser}=useContext(Usercontext)
  const dispatch=useDispatch()
  const handleSignOut=()=>{
    console.log('thum ek fruit hai',signOutStart)
    dispatch(signOutStart())
  }
  const currentUser=useSelector(selectCurrentUser)
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
                  <NavLink onClick={handleSignOut}>
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