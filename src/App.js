import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/navbar/Navbar';
import Home from './Pages/Home/Home';
// import Footer from './Components/footer/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
      </Routes>
      {/* <Footer/> */}
    </> 
  ); 
}

export default App;
