
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  const [activeLink, setActiveLink] = useState(null);
  const active = (link) => {
    setActiveLink(link);
    localStorage.setItem('activelink', link);
  }
  window.addEventListener('load', function () {
    if (this.localStorage.getItem('activelink')) {
      setActiveLink(this.localStorage.getItem('activelink'));
    }
  });
  window.addEventListener('scroll', function () {
    if (this.window.scrollY > 10) {
      this.document.querySelector('.navbar').classList.replace('py-4', 'py-2');
    }
    else {
        this.document.querySelector('.navbar').classList.replace('py-2', 'py-4');
    }
    })
  return (
      <>
  <nav className="navbar navbar-expand-lg fixed-top py-4 "id='nav'>
  <div className="container">
    <Link to='/' className="navbar-brand fs-2 text-uppercase text-white fw-bolder" >Start Framework</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  ms-auto mb-2 mb-lg-0">
              <li className={activeLink === 'about' ? "nav-item ms-3 active" : "nav-item ms-3"}
                onClick={()=>active('about')}
              >
          <Link to='/about' className="nav-link  fw-bolder  text-uppercase text-white" aria-current="page">About</Link>
        </li>
              <li className={activeLink === 'portfolio' ? "nav-item ms-3 active" : "nav-item ms-3"}
              onClick={()=>active('portfolio')}>
          <Link to='/portfolio' className="nav-link  fw-bolder text-uppercase text-white" >Portfolio</Link>
                          </li>
              <li className={activeLink === 'contact' ? "nav-item ms-3 active" : "nav-item ms-3"}
                onClick={()=>active('contact')}
              >
          <Link to='/contact' className="nav-link  fw-bolder text-uppercase text-white" >contact</Link>
        </li>
       </ul>
    
    </div>
  </div>
          </nav>
      <Outlet />
      <footer className=' text-white text-center '>
        <div className="container  py-3 ">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <p className=' text-uppercase'>Location</p>
              <span>2215 John Daniel Drive</span>
              <p className='mt-2'>Clark, MO 65243</p>
            </div>
            <div className="col-lg-4 col-md-6">
              <p className=' text-uppercase'>AROUND THE WEB</p>
              <div className="icons">
              <FontAwesomeIcon className='icon  border rounded-circle ms-2' icon={faFacebook}></FontAwesomeIcon>
                <FontAwesomeIcon className='icon  border rounded-circle ms-2' icon={faInstagram}></FontAwesomeIcon>
                <FontAwesomeIcon className='icon  border rounded-circle ms-2' icon={faLinkedin}></FontAwesomeIcon>
                  <FontAwesomeIcon className='icon  border rounded-circle ms-2' icon={faGlobe}></FontAwesomeIcon>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <p className=' text-uppercase'>ABOUT FREELANCER</p>
              <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
             </div>
          </div>
        </div>
        </footer>
  </>
  )
 
  
}
