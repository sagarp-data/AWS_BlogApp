import React from 'react'

const Footer = () => {
  return(
    <footer className="bg-dark text-center text-white">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a className="btn btn-outline-light btn-floating m-1" style={{backgroundColor: '#3b5998'}} href="#!" role="button"><i className="fab fa-facebook-f"></i></a>
          <a className="btn btn-outline-light btn-floating m-1" style={{backgroundColor: '#dd4b39'}} href="#!" role="button"><i className="fab fa-google"></i></a>
          <a className="btn btn-outline-light btn-floating m-1" style={{backgroundColor: '#ac2bac'}} href="#!" role="button"><i className="fab fa-instagram"></i></a>
          <a className="btn btn-outline-light btn-floating m-1" style={{backgroundColor: '#0082ca'}} href="#!" role="button"><i className="fab fa-linkedin-in"></i></a>
          <a className="btn btn-outline-light btn-floating m-1" style={{backgroundColor: '#333333'}} href="#!" role="button"><i className="fab fa-github"></i></a>
        </section>
        <section className="">
          <form action="">
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <p className="pt-2"><strong>Sign up for our newsletter</strong></p>
              </div>
              <div className="col-md-5 col-12">
                <div className="form-outline form-white mb-4">
                  <input type="email" id="form5Example21" className="form-control" />
                  <label className="form-label" htmlFor="form5Example21">Email address</label>
                </div>
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-outline-light mb-4">Subscribe</button>
              </div>
            </div>
          </form>
        </section>
        
        <section className="">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Our Locations</h5>
              <ul className="list-unstyled mb-0">
                <li><a href="#!" className="text-white">Bloomington</a></li>
                <li><a href="#!" className="text-white">Chiacgo</a></li>
                <li><a href="#!" className="text-white">New York</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">For Beginners</h5>
              <ul className="list-unstyled mb-0">
                <li><a href="#!" className="text-white">Login/ Register</a></li>
                <li>
              <a href="#!" class="text-white">Access Blog Items</a>
            </li>
            <li>
              <a href="#!" class="text-white">View Blog-Info</a>
            </li>
            <li>
              <a href="#!" class="text-white">Contact Us</a>
            </li>
          </ul>
          </div>
        
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Our Food Categories</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-white">American</a>
            </li>
            <li>
              <a href="#!" class="text-white">Indian</a>
            </li>
            <li>
              <a href="#!" class="text-white">Italian</a>
            </li>
            <li>
              <a href="#!" class="text-white">Chinese</a>
            </li>
            <li>
              <a href="#!" class="text-white">French</a>
            </li>
            <li>
              <a href="#!" class="text-white">Mexican</a>
            </li>
          </ul>
        </div>
        
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Connect</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-white">Sagar Prabhu</a>
            </li>
            <li>
              <a href="#!" class="text-white">ecccloudproject11@gmail.com</a>
            </li>
            <li>
              <a href="#!" class="text-white">8126353478</a>
            </li>
            <li>
              <a href="#!" class="text-white">Bloomington, Indiana</a>
            </li>
          </ul>
        </div>
              </div>
      
    </section>
      </div>
  
      </footer>
  )
}


export default Footer