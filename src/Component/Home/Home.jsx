/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';

export default function Home({homeImg}) {
 document.title='Home'
  return (
      <>
          <section className="py-4 d-flex   home-bg min-vh-100">

             <div className="container d-flex justify-content-center flex-column align-items-center text-white">
              <div className="image-avatar ">
                  <img className=" img-fluid" src={homeImg} alt="" />
                  </div>
                  <div className=" py-2 position-relative">
                       <h1 className="fs-1 my-4  text-uppercase title position-relative  fw-bolder">start Framework</h1>
                        <FontAwesomeIcon className=" position-absolute start-50 translate-middle-x    star " icon={faStar}></FontAwesomeIcon>
                  </div>          
   
                  <p className="my-2">Graphic Artist - Web Designer - Illustrator</p>
          </div>  
          </section>
         
      </>
  )
}
