const Header = () => {
  return (
    <section className="header">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <img
              src="https://www.portotheme.com/wordpress/porto/corporate1/wp-content/themes/porto/images/logo/logo_black.png"
              alt=""
            />
          </div>
          <div className="col-md-8 menu">
            <ul>
              <li>Home</li>
              <li>Element</li>
              <li>Feature</li>
              <li>Page </li>
              <li>Blog</li>
              <li>portfolio</li>
              <li>Buy proto</li>
            </ul>
          </div>
          <div className="col-md-2 icon">
            <ul>
              <li>
                <i class="fab fa-facebook" aria-hidden="true"></i>
              </li>
              <li>
                <li>
                  <i class="fab fa-twitter" aria-hidden="true"></i>
                </li>
                <i class="fab fa-instagram" aria-hidden="true"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
