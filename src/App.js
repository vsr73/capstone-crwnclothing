
import './App.css';
import Home from './routes/home/home.component';
import {Routes,Route} from 'react-router-dom'
import Navigation from './routes/navigation/navigation.components';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import CheckOut from './components/check-out/check-out.component';
const App=()=> {
 return (

 <Routes>
  <Route path='/' element={<Navigation />}>
    <Route index element={<Home/>}/>
    <Route path='shop/*' element={<Shop/>}/>
    <Route path='auth' element={<Authentication/>}/>
    <Route path='checkout' element={<CheckOut/>} />
  </Route>
  
  </Routes>
 
 )
}

export default App;
