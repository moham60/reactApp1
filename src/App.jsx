import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Component/Home/Home';
import Layout from './Component/Layout/Layout';
import About from './Component/About/About';
import Portofolio from './Component/Portfolio/Portofolio';
import Contact from './Component/Contact/Contact';
import portfoliImg1 from '../images/poert1.png'
import portfoliImg2 from '../images/port2.png'
import portfoliImg3 from '../images/port3.png'
import homeImg from '../images/avataaars.webp'
function App() {
 
  const router = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { path: '/', element: <Home homeImg={homeImg} /> }
        , {
          path: '/about', element: <About />
        }
        ,
        {
          path: '/portfolio', element: <Portofolio img1={portfoliImg1} img2={portfoliImg2} img3={portfoliImg3} />
        }
        ,
        {
          path: '/contact', element: <Contact />
        }
      ]
    },
      
  ]);
  
  return (
    
      <RouterProvider router={router} />

  )
  
}

export default App
