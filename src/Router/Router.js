import { Route, Routes } from "react-router-dom"
import RequireAuth from "../Components/requireAuth/RequireAuth"
import RequireAuthAdmin from "../Components/requireAuth/RequireAuthAdmin"
import AddForm from "../Pages/AddForm/AddForm"
import Admin from "../Pages/Admin/Admin"
import Categories from "../Pages/Categories/Categories"
import EventsUser from "../Pages/EventsUser/EventsUser"
import Home from "../Pages/Home/Home"
import Info from "../Pages/Info/Info"
import LogIn from "../Pages/LogIn/LogIn"
import Register from "../Pages/Register/Register"



const Router = ()=> {
    return(
    <Routes>
        <Route path='/login' element={<LogIn/>} />
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
    )
}

export default Router