
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


// eslint-disable-next-line react/prop-types
export default function Portofolio({img1,img2,img3}) {

  const showModel = (e) => {
    document.querySelector('.modal').classList.replace('d-none', 'd-flex');
    document.querySelector('.modal img').src = e.target.firstElementChild.src;
   
  }
  window.addEventListener('click', function (e) {
    if (e.target=== document.querySelector('.modal')) {
        document.querySelector('.modal').classList.replace('d-flex', 'd-none');
    }
  })
 
  document.title='portfolio'
  return (
    <>
      <section className=" d-flex  py-5 r min-vh-100">    
         <div className="container mt-5 py-4 text-center">
                  
                    <div className=" py-2  position-relative ">
                              <h1 className="fs-1 my-4  text-uppercase title position-relative  portofolio  fw-bolder">portfolio component</h1>
                               <FontAwesomeIcon className=" position-absolute start-50 translate-middle-x bg-white     star " icon={faStar}></FontAwesomeIcon>
                    </div>          
              <div className="row mt-1 gy-3 cards">
                  <div className="col-lg-4 col-md-6">
                        <div className="img" onClick={showModel}>
                          <img    className='img-fluid  rounded' src={img1} alt="" />
                          <FontAwesomeIcon className=' position-absolute start-50 top-50 translate-middle  text-white plus' icon={faPlus}></FontAwesomeIcon>
                      </div>
                      
                  </div>
                  <div className="col-lg-4 col-md-6">
                     
                           <div className="img" onClick={showModel}> 
                        <img    className='img-fluid rounded' src={img2} alt="" />
                         <FontAwesomeIcon className=' position-absolute start-50 top-50 translate-middle  text-white plus' icon={faPlus}></FontAwesomeIcon>
                      </div>
                     
                     
                  </div>
                   <div className="col-lg-4 col-md-6">
                      <div className="img" onClick={showModel}>
                          <img    className='img-fluid rounded' src={img3} alt="" />
                           <FontAwesomeIcon className=' position-absolute start-50 top-50 translate-middle  text-white plus' icon={faPlus}></FontAwesomeIcon>
                      </div>
                  </div>
                   <div className="col-lg-4 col-md-6">
                      <div className="img" onClick={showModel}>
                          <img    className='img-fluid rounded' src={img1} alt="" />
                           <FontAwesomeIcon className=' position-absolute start-50 top-50 translate-middle  text-white plus' icon={faPlus}></FontAwesomeIcon>
                      </div>
                  </div>
                   <div className="col-lg-4 col-md-6">
                      <div className="img" onClick={showModel}>
                          <img    className='img-fluid rounded' src={img2} alt="" />
                           <FontAwesomeIcon className=' position-absolute start-50 top-50 translate-middle  text-white plus' icon={faPlus}></FontAwesomeIcon>
                      </div>
                  </div>
                   <div className="col-lg-4 col-md-6">
                        <div className="img" onClick={showModel}>
                          <img    className='img-fluid rounded' src={img3} alt="" />
                           <FontAwesomeIcon className=' position-absolute start-50 top-50 translate-middle  text-white plus' icon={faPlus}></FontAwesomeIcon>
                      </div>
                  </div>
                    </div>
          </div>  
      <div className="modal  position-fixed start-0 top-0 bg-primary bg-opacity-25 d-none justify-content-center align-items-center">
      <img  src={img3} alt="" />
      </div>    
    </section>
    </>
    
    
  )
}
