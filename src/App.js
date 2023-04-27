import { Route, Routes } from 'react-router-dom';
import './Assets/App.css';
import Navbar from './Components/navbar/Navbar';
import Home from './Pages/Home/Home';
import Info from './Pages/Info/Info';
import LogIn from './Pages/LogIn/LogIn';
import Register from './Pages/Register/Register';
import Admin from './Pages/Admin/Admin';
import RequireAuth from './Components/requireAuth/RequireAuth';
import Categories from './Pages/Categories/Categories';
import AddForm from './Pages/AddForm/AddForm';
import EventsUser from './Pages/EventsUser/EventsUser';
import RequireAuthAdmin from './Components/requireAuth/RequireAuthAdmin';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/login' element={<LogIn />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Home />} />
        <Route path='/categorie/:id' element={<Categories />} />
        <Route path='/infoEvent/:id' element={<Info />} />
        <Route path='/eventsUser' element={
          <RequireAuth>
            <EventsUser />
          </RequireAuth>
        } />
        <Route path='/admin'
          element={
            <RequireAuthAdmin>
              <Admin />
            </RequireAuthAdmin>
          } />
        <Route path='/adminAdd' element={
          <RequireAuth>
            <AddForm />
          </RequireAuth>
        } />
      </Routes>
    </> 
  ); 
}

export default App;
