import React from 'react'

function Footer() {
  return (
    <footer id="footer" className=''>
    <div className="footer-top  pt-24 pb-24">
        <div className="flex flex-col md:flex-row md:justify-between px-20">

            <div className="footer-info">
              <h3>Foodify</h3>
              <p>
                Drissia Street <br />
                NY 535022, Tanger<br/><br/>
                <strong>Phone:</strong> +212 535 733940<br />
                <strong>Email:</strong> foodify@contact.info<br />
              </p>
              <div className="social-links mt-3">
                <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
              </div>
            </div>

          <div className="footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="fa-solid fa-chevron-right"></i> <a href="#home">Home</a></li>
              <li><i className="fa-solid fa-chevron-right"></i> <a href="#about">About us</a></li>
              <li><i className="fa-solid fa-chevron-right"></i> <a href="#">Wy-us</a></li>
              <li><i className="fa-solid fa-chevron-right"></i> <a href="#events">Events</a></li>
              {/* <li><i className="fa-solid fa-chevron-right"></i> <a href="#">Privacy policy</a></li> */}
            </ul>
          </div>

          <div className="footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="fa-solid fa-chevron-right"></i> <a href="#">Meals</a></li>
              <li><i className="fa-solid fa-chevron-right"></i> <a href="#">Delivery</a></li>
              <li><i className="fa-solid fa-chevron-right"></i><a href="#">Event commandes</a></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>

          </div>

        </div>
    </div>
  </footer>
  )
}

export default Footer