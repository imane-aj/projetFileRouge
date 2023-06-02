import React from 'react'

function Footer() {
  return (
    <footer id="footer" className=''>
    <div class="footer-top  pt-24 pb-24">
        <div class="flex flex-col md:flex-row md:justify-between px-20">

            <div class="footer-info">
              <h3>Foodify</h3>
              <p>
                Drissia Street <br />
                NY 535022, Tanger<br/><br/>
                <strong>Phone:</strong> +212 535 733940<br />
                <strong>Email:</strong> foodify@contact.info<br />
              </p>
              <div class="social-links mt-3">
                <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
              </div>
            </div>

          <div class="footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#home">Home</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#about">About us</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div class="footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Meals</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Delivery</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Event commandes</a></li>
            </ul>
          </div>

          <div class="footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>

          </div>

        </div>
    </div>
  </footer>
  )
}

export default Footer