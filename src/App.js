import { Route, Routes } from 'react-router-dom';
import './Assets/App.css';
import Navbar from './Components/navbar/Navbar';
// import Home from './Pages/Home/Home';
// import Info from './Pages/Info/Info';
// import LogIn from './Pages/LogIn/LogIn';
// import Register from './Pages/Register/Register';
import Admin from './Pages/Admin/Admin';
import AddForm from './Pages/AddForm/AddForm';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        {/* <Route path='/login' element={<LogIn/>}/>  */}
        {/* <Route path='/register' element={<Register/>}/>  */}
        {/* <Route path='/' element={<Home/>}/>  */}
        {/* <Route path='/infoEvent/:id' element={<Info/>}/> */}
        <Route path='/' element={<Admin/>}/>
        <Route path='/form' element={<AddForm/>}/>
      </Routes>
    </> 
  ); 
}

export default App;
