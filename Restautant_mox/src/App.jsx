import { Button } from 'react-bootstrap'
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import MainHeding from './Components/MainHeding/MainHeding'
import AboutUs from './Containers/AboutUs/AboutUs'
import Contact from './Containers/Contact/Contact'
import Home from './Containers/Home/Home'
import Menu from './Containers/Menu/Menu'
import { Route, Routes } from 'react-router'
import Order from './Containers/Order/Order'
import LogIn from './Components/LogIn/LogIn'
import { SignUp } from './Components/SignUp/SignUp'
import AddToCart from './Containers/AddToCart/AddToCart'

function App() {

  return (
    <>
      <header>
        {/* <MainHeding /> */}
        {/* <Header /> */}
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<Order />} />
          <Route path="/addtocart" element={<AddToCart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>
      <footer>
        {/* <Footer /> */}
      </footer>
    </>
  )
}

export default App
