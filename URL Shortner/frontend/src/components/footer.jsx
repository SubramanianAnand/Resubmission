
const Footer = () =>{
  return(
      <>
      {/* <!-- Footer -->*/}
<footer className="text-center text-lg-start bg-light text-muted" style={{marginTop:"40vh"}}>
{/* <!-- Section: Social media -->*/}
<section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
  {/* <!-- Left -->*/}
  <div className="me-5 d-none d-lg-block">
    <span>Created by Subramanian Anand</span>
  </div>
  {/* <!-- Left -->*/}

  {/* <!-- Right -->*/}
  <div>
    <a href="" className="me-4 text-reset">
      <i className="fab fa-facebook-f"></i>
    </a>
    <a href="" className="me-4 text-reset">
      <i className="fab fa-twitter"></i>
    </a>
    <a href="" className="me-4 text-reset">
      <i className="fab fa-google"></i>
    </a>
    <a href="" className="me-4 text-reset">
      <i className="fab fa-instagram"></i>
    </a>
    <a href="" className="me-4 text-reset">
      <i className="fab fa-linkedin"></i>
    </a>
    <a href="" className="me-4 text-reset">
      <i className="fab fa-github"></i>
    </a>
  </div>
  {/* <!-- Right -->*/}
</section>
{/* <!-- Section: Social media -->*/}

{/* <!-- Section: Links  -->*/}
<section className="">
  <div className="container text-center text-md-start mt-5">
    {/* <!-- Grid row -->*/}
    <div className="row mt-3">
      {/* <!-- Grid column -->*/}
      <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        {/* <!-- Content -->*/}
        <h6 className="text-uppercase fw-bold mb-4">
          <i className="fas fa-gem me-3"></i>
        </h6>
        
      </div>
      {/* <!-- Grid column -->*/}

      {/* <!-- Grid column -->*/}
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        {/* <!-- Links -->*/}
        <h6 className="text-uppercase fw-bold mb-4">
          Products
        </h6>
        <p>
          <a href="#!" className="text-reset">React</a>
        </p>
        <p>
          <a href="#!" className="text-reset">HTML</a>
        </p>
        <p>
          <a href="#!" className="text-reset">CSS</a>
        </p>
        <p>
          <a href="#!" className="text-reset">JAVASCRIPT</a>
        </p>
      </div>
      {/* <!-- Grid column -->*/}

      {/* <!-- Grid column -->*/}
      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        {/* <!-- Links -->*/}
        <h6 className="text-uppercase fw-bold mb-4">
          Useful links
        </h6>
        <p>
          <a href="#!" className="text-reset">Pricing</a>
        </p>
        <p>
          <a href="#!" className="text-reset">Settings</a>
        </p>
        <p>
          <a href="#!" className="text-reset">Orders</a>
        </p>
        <p>
          <a href="#!" className="text-reset">Help</a>
        </p>
      </div>
      {/* <!-- Grid column -->*/}

      {/* <!-- Grid column -->*/}
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        {/* <!-- Links -->*/}
        <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
        <p><i className="fas fa-home me-3"></i> Tiruppur, TamilNadu</p>
        <p>
          <i className="fas fa-envelope me-3"></i>
          anadh1581997@example.com
        </p>
        <p><i className="fas fa-phone me-3"></i> + 9159721283</p>
        
      </div>
      {/* <!-- Grid column -->*/}
    </div>
    {/* <!-- Grid row -->*/}
  </div>
</section>
{/* <!-- Section: Links  -->*/}

{/* <!-- Copyright -->*/}
<div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
  © 2023 Copyright:
  <a className="text-reset fw-bold" href="">Subramanian anand(URL Shortner)</a>
</div>
{/* <!-- Copyright -->*/}
</footer>
{/* <!-- Footer -->*/}
      </>
  )
}

export default Footer
