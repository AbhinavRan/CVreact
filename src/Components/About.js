import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      
    }

    return (
      <section id="about">
      <div className="row">
         
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p> Emerging Full Stack Full Developer</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>Abhinav Ranjan</span><br />
						   <span>Ukrid<br />
						         Ranchi,Jharkhand,835219
                   </span><br />
						   <span>9142103209</span><br />
                     <span>abhinavranjan334@gmail.com</span>
					   </p>
               </div>
               
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
