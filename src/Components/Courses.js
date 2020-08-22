import React, { Component } from 'react';

class Courses extends Component {
  render() {

    if(this.props.data){
      var Courses = this.props.data.Courses.map(function(Courses){
        return  <li key={Courses.user}>
            <blockquote>
               <p>{Courses.text}</p>
               <cite>{Courses.user}</cite>
            </blockquote>
         </li>
      })
    }

    return (
      <section id="Courses">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span>Courses</span></h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {Courses}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Courses;
