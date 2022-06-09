import { Component } from "react";

class Home extends Component {
  render() {
    return (
      <>
        <section className="home_section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 m-auto text-center">
                <p>We Create Design's We Are</p>
                <h1>PROTO</h1>
                <p>The Best Choice Of your new website</p>
              </div>
            </div>
          </div>
        </section>
        <section className="started">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h5>
                  The fastest way to grow your business with the leader in
                  Technology
                </h5>
                <p>Check out our options and features included.</p>
              </div>
              <div className="col-md-4 float-end">
                <button className="btn btn-info text-white">
                  Get Started now
                </button>
                <button className="tran-btn">or Learn More</button>
              </div>
            </div>
          </div>
        </section>

        <section className="third-section">
          <div className="container">
            <div className="row">
              <div className="col-md-10 m-auto text-center">
                <h3>
                  Porto specially extremely beautiful and fully responsive.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  elementum, nulla vel pellentesque consequat, ante nulla
                  hendrerit arcu, ac tincidunt mauris lacus sed leo.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <img
                  src="https://www.portotheme.com/wordpress/porto/corporate1/wp-content/uploads/sites/7/2018/12/parallax-corporate-1-1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section className="our-service">
          <div className="container">
            <h5 className="text-center">
              Our <span>Services</span>
            </h5>

            <div className="row mb-5">
              <div className="col-md-4">
                <div className="blurb d-flex">
                  <div className="blurb-icon">
                    <i class="fas fa-address-book" aria-hidden="true"></i>
                  </div>
                  <div className="blurb-content">
                    <h6>Customer Support</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing metus.
                      elit. Quisque rutrum pellentesque imperdiet.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="blurb d-flex">
                  <div className="blurb-icon">
                    <i class="fas fa-address-book" aria-hidden="true"></i>
                  </div>
                  <div className="blurb-content">
                    <h6>Customer Support</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing metus.
                      elit. Quisque rutrum pellentesque imperdiet.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="blurb d-flex">
                  <div className="blurb-icon">
                    <i class="fas fa-address-book" aria-hidden="true"></i>
                  </div>
                  <div className="blurb-content">
                    <h6>Customer Support</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing metus.
                      elit. Quisque rutrum pellentesque imperdiet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="blurb d-flex">
                  <div className="blurb-icon">
                    <i class="fas fa-address-book" aria-hidden="true"></i>
                  </div>
                  <div className="blurb-content">
                    <h6>Customer Support</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing metus.
                      elit. Quisque rutrum pellentesque imperdiet.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="blurb d-flex">
                  <div className="blurb-icon">
                    <i class="fas fa-address-book" aria-hidden="true"></i>
                  </div>
                  <div className="blurb-content">
                    <h6>Customer Support</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing metus.
                      elit. Quisque rutrum pellentesque imperdiet.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="blurb d-flex">
                  <div className="blurb-icon">
                    <i class="fas fa-address-book" aria-hidden="true"></i>
                  </div>
                  <div className="blurb-content">
                    <h6>Customer Support</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing metus.
                      elit. Quisque rutrum pellentesque imperdiet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="forth-section">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <i class="fas fa-calculator" aria-hidden="true"></i>
                <h3>30000+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="col-md-3">
                <i class="fas fa-calculator" aria-hidden="true"></i>
                <h3>30000+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="col-md-3">
                <i class="fas fa-calculator" aria-hidden="true"></i>
                <h3>30000+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="col-md-3">
                <i class="fas fa-calculator" aria-hidden="true"></i>
                <h3>30000+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Home;
