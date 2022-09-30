import React,{ useEffect } from 'react';
import './App.css';
import WebFont from 'webfontloader';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faCamera, faCar, faCarBattery, faCartPlus, faCashRegister, faFootball, faHeart, faKitchenSet, faLaptop, faLock, faMessage, faMinus, faMobile, faPhone, faPlus, faRemove, faShirt, faShoePrints, faShoppingCart, faTelevision, faTimes, faUserCircle, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Whishlist from './Pages/Whishlist/Whishlist';
import Cart from './Pages/Cart/Cart';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Blog from './Pages/Blog/Blog';
import Signup from './Pages/Signup/Signup';
import AdminLogin from './Pages/AdminLogin/AdminLogin';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import SinglePost from './Pages/SinglePost/SinglePost';
import AdminAddPosts from './Pages/AdminAddPosts/AdminAddPosts';
import AdminAddProducts from './Pages/AdminAddProducts/AdminAddProducts';
import Logout from './Pages/Logout/Logout';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';

library.add(faRemove,faMinus,faPlus,faLock,faShoppingCart,faShirt,faShoePrints,faCarBattery,faFootball,faKitchenSet,faTelevision,faMobile,faCamera,faLaptop,faPhone, faCartPlus, faHeart, faUserCircle, faTimes, faBars, faCar, faCashRegister, faMessage, faUserFriends);

function App() {

  useEffect(() =>{ 
      //fetch google fonts
      WebFont.load({
      google: {
        families: ['Droid Sans', 'Chilanka']
      }
    })
  }, [])

  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />}/>
          <Route path="/whishlist" element={<Whishlist />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addproducts/:password" element={<AdminAddProducts />} />
          <Route path="/addposts/:password" element={<AdminAddPosts />} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="/dashboard/:password" element={<Dashboard/>} />
          <Route path="/sproduct/:id" element={<SingleProduct/>} />
          <Route path="/blog/spost/:id" element={<SinglePost/>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
      <Footer />
      </>
  );
}

export default App;