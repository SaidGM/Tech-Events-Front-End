import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/navbar/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={""}/>
      </Routes>
    </>
  );
}

export default App;
