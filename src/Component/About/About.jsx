
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';



export default function About() {
  document.title='about'

  return (
    <section className="py-4 d-flex   home-bg min-vh-100">
   
             <div className="container p-5 d-flex justify-content-center flex-column align-items-center text-white">
              
                    <div className=" py-2 position-relative">
                          <h1 className="fs-1 my-4  text-uppercase title position-relative  fw-bolder">about component</h1>
                           <FontAwesomeIcon className=" position-absolute start-50 translate-middle-x      star " icon={faStar}></FontAwesomeIcon>
                     </div>          
              <div className='d-flex row  align-items-center mt-2 px-3  py-4'>
                  <div className="col-lg-6">
                           <p className='px-3'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                  </div>
                  <div className="col-lg-6">
                      <p className='px-3'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
             </div>
                  
                 </div>
             </div>  
             </section>
  )
}
