const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-6">
                <img
                  src="https://www.portotheme.com/wordpress/porto/corporate1/wp-content/uploads/sites/7/2018/12/logo_white_large.png"
                  alt=""
                />
              </div>
              <div className="col-md-3">
                <h4>Pages</h4>
                <a href="#">
                  {" "}
                  <i class="fa fa-angle-right" aria-hidden="true"></i> Our
                  Service
                </a>
                <a href="#">
                  {" "}
                  <i class="fa fa-angle-right" aria-hidden="true"></i> About Us
                </a>{" "}
                <a href="#">
                  {" "}
                  <i class="fa fa-angle-right" aria-hidden="true"></i> Contact
                  Us
                </a>
              </div>
              <div className="col-md-3">
                <h4>Links</h4>
                <a href="#">
                  {" "}
                  <i class="fa fa-angle-right" aria-hidden="true"></i> Faq,s
                </a>
                <a href="#">
                  {" "}
                  <i class="fa fa-angle-right" aria-hidden="true"></i> Sitemap
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <h4>Newsletter</h4>
            <div className="form">
              <input type="text" placeholder="Email Adress" />
              <input className="submit" type="Submit" value="Go!" />
            </div>
            <div className="form-info d-flex">
              <a href="#">
                {" "}
                <i class="fab fa-whatsapp" aria-hidden="true"></i>(123) 456-7890
              </a>
              <a href="#">
                {" "}
                <i class="fas fa-envelope" aria-hidden="true"></i>(123) 456-7890
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col text-center text-black-50 mt-5 copyright">
            <p>© copyright 2022. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
