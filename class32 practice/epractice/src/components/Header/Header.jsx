import React from 'react'

const Header = () => {
  return (
    <>

     	<header class="clearfix">
			<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
				<div class="top-line">
					<div class="container">
						<div class="row">
							<div class="col-md-6">
								<p>
									<span><i class="fa fa-phone"></i>1234 - 5678 - 9012</span>
									<span><i class="fa fa-envelope-o"></i>support@koncept.com</span>
									<a href="#"><i class="fa fa-user"></i>Log In</a>
								</p>
							</div>	
							<div class="col-md-6">
								<ul class="social-icons">
									<li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
									<li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
									<li><a class="rss" href="#"><i class="fa fa-rss"></i></a></li>
									<li><a class="google" href="#"><i class="fa fa-google-plus"></i></a></li>
									<li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
									<li><a class="pinterest" href="#"><i class="fa fa-pinterest"></i></a></li>
								</ul>
							</div>	
						</div>
					</div>
				</div>
				<div class="container">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<a class="navbar-brand" href="index.html"><img src="images/logo.png" alt=""/></a>
					</div>

				
					<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul class="nav navbar-nav navbar-right">
							<li class="drop"><a href="index.html">Home</a>
								<ul class="dropdown">
									<li><a href="index.html">Home 1 - Default</a></li>
									<li><a href="home2.html">Home 2</a></li>
									<li><a href="home3.html">Home 3</a></li>
									<li><a href="home4.html">Home 4</a></li>
								</ul>
							</li>
							<li class="drop"><a href="projects-3col.html">Projects</a>
								<ul class="dropdown">
									<li><a href="projects-2col.html">Projects 2 Colums</a></li>
									<li><a href="projects-3col.html">Projects 3 Colums</a></li>
									<li><a href="projects-4col.html">Projects 4 Colums</a></li>
									<li><a href="projects-fullwidth.html">Projects Fullwidth</a></li>
									<li><a href="projects-masonry.html">Projects Masonry</a></li>
									<li><a href="single-project.html">Single Project</a></li>
								</ul>
							</li>
							<li class="drop"><a href="about.html">Pages</a>
								<ul class="dropdown">
									<li><a href="about.html">About Us</a></li>
									<li><a href="tables.html">Tables</a></li>
									<li><a href="404-error.html">404 Error</a></li>
									<li><a href="underconstruction.html">Under Construction</a></li>
								</ul>
							</li>
							<li class="drop"><a href="services.html">Services</a>
								<ul class="dropdown">
									<li><a href="ser-opt1.html">services 1</a></li>
									<li><a href="ser-opt2.html">services 2</a></li>
									<li><a href="ser-opt3.html">services 3</a></li>
									<li><a href="ser-opt4.html">services 4</a></li>
									<li><a href="ser-opt5.html">services 5</a></li>
									<li><a href="ser-opt6.html">services 6</a></li>
								</ul>
							</li>
							<li class="drop"><a href="blog.html">Blog</a>
								<ul class="dropdown">
									<li><a href="blog.html">Blog Default</a></li>
									<li><a href="blog-2col.html">Blog 2 Colums</a></li>
									<li><a href="blog-3col.html">Blog 3 Colums</a></li>
									<li><a href="blog-4col.html">Blog 4 Colums</a></li>
									<li><a href="blog-fullscreen.html">Blog Fullscreen</a></li>
									<li><a href="single-post.html">Single Post</a></li>
								</ul>
							</li>
							<li><a class="active" href="shop.html">Shop</a></li>
							<li class="drop"><a href="contact.html">Contact</a>
								<ul class="dropdown">
									<li><a href="contact.html">Contact 1</a></li>
									<li><a href="contact2.html">Contact 2</a></li>
								</ul>
							</li>
							<li class="search drop"><a href="#" class="open-search"><i class="fa fa-search"></i></a>
								<form class="form-search">
									<input type="search" placeholder="Search:"/>
									<button type="submit">
										<i class="fa fa-search"></i>
									</button>
								</form>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>  
        
     
    </>
  )
}

export default Header