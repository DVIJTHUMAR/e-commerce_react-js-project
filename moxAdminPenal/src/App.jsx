import { Route, Routes } from 'react-router'
import './App.css'
import LogIn from './Component/LogIn/LogIn'
import MenuItemList from './Container/MenuItemList/MenuItemList'
import AddMenuItem from './Container/AddMenuItem/AddMenuItem'
import UserData from './Container/UserData/UserData'
import Reservation from './Container/Reservation/Reservation'
import EditItem from './Component/EditItem/EditItem'
import Deshboard from './Container/Deshboard/Deshboard'


function App() {

  return (
    <>
    <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/deshboard" element={<Deshboard/>} />
        <Route path="/menuitemlist" element={<MenuItemList/>} />
        <Route path="/edititem" element={<EditItem/>} />
        <Route path="/addmenuitem" element={<AddMenuItem/>} />
        {/* <Route path="/userdata" element={<UserData/>} /> */}
        {/* <Route path="/reservation" element={<Reservation/>} /> */}
      </Routes>
    </>
  )
}

export default App
