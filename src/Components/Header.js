import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      
      <svg x="0" y="0"  viewBox="0 0 2560 100" preserveAspectRatio="none">
    <polygon fill="white" points="2560,0 2560,100 0,100"/>
  </svg>

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#Courses">Courses</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>


      </nav>



      <div className="row banner">
         <div className="banner-text">

            <h4 className="responsive-headline">Hello, I'm</h4><h1> ABHINAV RANJAN.
            <img src="images/dev.webp" class="img-fluid" alt="Image description."></img>
                  </h1>
            <h3>I'm focused on creating meaningful experinces through design, currently working on being full stack web developer where I can apply, develop and consolidate my skills.
            </h3>
            <hr />

            <ul className="social">
               {networks}
            </ul>

            <div className="columns download">
                  <p>
                     <a className="button" href="CV/ABHINAV RANJAN.pdf"><i className="fa fa-download"></i>Download Resume </a>
                      </p>
              </div>


         </div>
      </div>

     

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle" ></i></a>
      </p>

      

   </header>
    );
  }
}

export default Header;
