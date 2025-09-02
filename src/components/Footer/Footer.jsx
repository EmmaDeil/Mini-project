import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    // <div className='container-fluid' style={{marginTop: '20px', marginBottom: '20px'}}>
    //     <div className='container'>
    //       <div className='row'>
    //         <div className='col'>
    //           <h3 className='word'>Stay Updated, Stay Connected</h3>
    //         </div>
    //         <div className='col'>
    //           <h6 className='work'>Get Our News And Updates</h6>
    //           <div className='scribe mb-2'>
    //           <input type="email" name="" id="email" placeholder='Enter your email' className=''/>
    //           <button type="submit" className='sub'>Subscribe</button>
    //           </div>
    //           <h6 className='letter-1'>By subscribing you agree to our <a href="#" className='letter-2'>Privacy Policy</a></h6>
    //         </div>
    //       </div>
    //       <div className='vl'></div>
    //     </div>
    //     <div className='container'>
    //       <div className='row mt-4'>
    //       <div className='col'>
    //         <img src="../favicon.ico" alt=""  className='lineimg'/>
    //         <h3 className='blue'>Blue_Bird</h3>
    //         <p className='bluedo'>Seamless transactions, personalized insights, and innovative solutions for a smarter tomorrow</p>
    //         <div className='row'>
    //           <div className='social-icons'>
    //             <a href="#" className='me-3'><i className="fab fa-facebook p-1"></i></a>
    //             <a href="#" className='me-3'><i className="fab fa-twitter p-1"></i></a>
    //             <a href="#" className='me-3'><i className="fab fa-instagram p-1"></i></a>
    //             <a href="#" className='me-3'><i className="fab fa-linkedin p-1"></i></a>
    //             <a href="#" className='me-3'><i className="fab fa-youtube p-1"></i></a>
    //           </div>
    //         </div>
    //       </div>
    //       <div className='col'>
    //         <h3 className='blue'>About</h3>
    //         <ul>
    //           <li>Company</li>
    //           <li>Leadership</li>
    //           <li>Press</li>
    //           <li>Career</li>
    //         </ul>
    //       </div>
    //       <div className='col'>
    //         <h3 className='blue'>Help</h3>
    //         <ul>
    //           <li>Help Center</li>
    //           <li>Support Team</li>
    //           <li>Community</li>
    //           <li>FAQs</li>
    //         </ul>
    //       </div>
    //       <div className='col'>
    //         <h3 className='blue'>Product</h3>
    //         <ul>
    //           <li>Overview</li>
    //           <li>Business Account</li>
    //           <li>Credit Card</li>
    //           <li>Financial Modelling</li>
    //         </ul>
    //       </div>
    //       <div className='col'>
    //         <h3 className='blue'>Company</h3>
    //         <ul>
    //           <li>About Finwise</li>
    //           <li>Contact</li>
    //           <li>News & Blog</li>
    //           <li></li>
    //         </ul>
    //       </div>
    //       </div>
    //     </div>
    //     <div className='flip'>
    //         <h6 className='downfooter'>Copyright &copy; Blue_Bird All Rights Reserved {new Date().getUTCFullYear()}</h6>
    //         <h6 className='downfooter'>Privacy Policy</h6>
    //     </div>
    // </div>
    <div>
      <div className="container-fluid">
        <div className="container-fluid" id="subscribe">
          <h3 className="subword">Stay Updated, Stay Connected</h3>
          <h6 className="subwork">Get Our News And Updates</h6>
          <div className="scribe">
            <input
              type="email"
              name=""
              id="email"
              placeholder="Enter your email"
              className="subinput"
            />
            <button type="submit" className="btn btn-primary subbtn">
              Subscribe
            </button>
          </div>
          <h6 className="letter-1">
            By subscribing you agree to our{" "}
            <a href="#" className="letter-2">
              Privacy Policy
            </a>
          </h6>
        </div>
        <div className="row">
          <div className="col">

          </div>
          <div className="col">
            
          </div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
        <h6 className="downfooter">Follow Us</h6>
        <div className="social-icons">
          <a href="#" className="me-3">
            <i className="fab fa-facebook p-1"></i>
          </a>
          <a href="#" className="me-3">
            <i className="fab fa-twitter p-1"></i>
          </a>
          <a href="#" className="me-3">
            <i className="fab fa-instagram p-1"></i>
          </a>
          <a href="#" className="me-3">
            <i className="fab fa-linkedin p-1"></i>
          </a>
          <a href="#" className="me-3">
            <i className="fab fa-youtube p-1"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
