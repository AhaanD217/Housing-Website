import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer'



import './index.css';

const App =() => {
return (
  <div>
    <ToastContainer/>
    <Navbar/> 
    <Header/>
    <About/>
    <Projects/>
    <Testimonials/>
    <Contact/>
    <Footer/>
  </div>
)

}

export default App