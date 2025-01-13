
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';


export default function Contact() {
  document.title='contact'
    const handleinpt = (e) => {
        if (e.target.value !== '') {
              e.target.nextElementSibling.classList.remove('bottom');
        e.target.nextElementSibling.classList.add('top');
        }
        else {
              e.target.nextElementSibling.classList.add('bottom');
        e.target.nextElementSibling.classList.remove('top');
       }
    }
    
  return (
     <section className=" d-flex  py-5  min-vh-100">
       
         <div className="container mt-5 py-4 text-center">
                  
        <div className=" py-2  position-relative ">
                              <h1 className="fs-1 my-4  text-uppercase title position-relative  portofolio  fw-bolder">Contact</h1>
                               <FontAwesomeIcon className=" position-absolute start-50 translate-middle-x bg-white     star " icon={faStar}></FontAwesomeIcon>
              </div>      
              <div className="form mt-5 py-5 ">
                  <div className="inpt mx-auto my-2 position-relative w-50">
                  
                      <input type="text" onInput={handleinpt} className=' border-top-0 form-control  mx-auto' placeholder='userName' name="" id="userName" />
                          <label htmlFor="userName" className='text-success position-absolute bottom '>userName:</label>
                  </div>
                 <div className="inpt mx-auto my-5 position-relative w-50">
                     
                      <input type="text" onInput={handleinpt} className=' border-top-0 form-control  mx-auto' placeholder='userAge' name="" id="userAge" />
                       <label htmlFor="userAge" className='text-success position-absolute  bottom'>userAge:</label>
                  </div>
                  <div className="inpt mx-auto my-5 position-relative w-50">
                     
                      <input type="text" onInput={handleinpt} className=' border-top-0 form-control  mx-auto' placeholder='userEmail' name="" id="userEmail" />
                       <label htmlFor="userEmail" className='text-success position-absolute  bottom'>userEmail:</label>
                  </div>
                  <div className="inpt mx-auto my-2 position-relative w-50">
                    
                      <input type="text" onInput={handleinpt} className=' border-top-0 form-control  mx-auto' placeholder='userPassword' name="" id="userPassword" />
                        <label htmlFor="userPassword" className='text-success position-absolute  bottom'>userPassword:</label>
                  </div>
                 
                 
        </div>
            
          </div> 
                 
        </section>
  )
}
