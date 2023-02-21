
import './App.css';
import Home from './routes/home/home.component';
import {Routes,Route, Outlet} from 'react-router-dom'
import Navigation from './routes/navigation/navigation.components';
import Authentication from './routes/authentication/authentication.component';

const Shop=(props)=>(
  <div>
    {console.log('props',props)
    
    }
    {
      console.log('props',{props})
    }

    <h1>
      this is shop page 
    </h1>
  </div>
)
const App=()=> {
 return (

 <Routes>
  <Route path='/' element={<Navigation />}>
    <Route index element={<Home/>}/>
    <Route path='shop' element={<Shop/>}/>
    <Route path='auth' element={<Authentication/>}/>
  </Route>
  
  </Routes>
 
 )
}

export default App;