import React, { Component, useState } from 'react';
import contactimage from "../assets/Contactimage.jpg";
import "../style.scss";
import emailjs from '@emailjs/browser';

const Result = ()  => {
  return(
    <p> Your message has been sent successfully !!!</p>
  )
}


function ContactUs(props) {

  const [result,showResult] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7f50lck', 'template_uf6pv48', e.target, '28W-tfGO4rpZCxlks')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(e.target);
  };
  
    return (
      <div>
      <div className="contact">
      
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${contactimage})`}}
      ></div>
      <div className="rightSide">
        <br></br>
        <br></br>
        <br></br>

        <form id="contact-form" action = "" onSubmit={sendEmail} >
          <label htmlFor="name" style={{fontSize: '19px'}}>Full Name</label>
          <br></br>
          <input name="name" placeholder="Enter full name..." type="text" style={{fontSize: '19px'}} />
          <br></br>
          <label htmlFor="email" style={{fontSize: '19px'}}>Email</label>
          <br></br>
          <input name="email" placeholder="Enter email..." type="email" style={{fontSize: '19px'}} />
          <br></br>
          <label htmlFor="message" style={{fontSize: '19px'}}>Message</label>
          <br></br>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <br></br>
          <button type="submit" style={{fontSize: '16px', width: '25%', margin: 'auto', borderRadius: '10px'}}> Send Message</button>
          <div className='row'> {result ? <Result/> : null}
            
          </div>
        </form>
      
      </div>
      
      
    </div>
    <br></br>
    <hr/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <h1 style={{textAlign:'center'}}>CONTACT FOOD4U AT</h1>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    
    <div className="row">
        
          <div className="card" style={{ width: '280px', height: '250px', marginLeft: '70px',border: '3px solid black'}}>
          <i className="fas fa-building" style={{ fontSize: '70px', display: 'block', margin: 'auto', color:'lightskyblue', marginTop: '25px' }}></i> 
          <div className="card-body" style={{textAlign: 'center', marginTop:'15px'}}>
            <h3 className="card-title">OUR MAIN OFFICE</h3>
            <p className="card-text" style={{fontSize:'16px'}}>
              141 Broadway, North St, Bloomington, IN 47404
            </p>
          </div>
        

        </div>

        <div className="card" style={{ width: '280px', height: '250px', marginLeft: '50px' ,border: '3px solid black'}}>
          <i className="fas fa-phone" style={{ fontSize: '70px', display: 'block', margin: 'auto', color:'lightskyblue', marginTop: '20px' }}></i> 
          <div className="card-body" style={{textAlign: 'center', marginTop:'15px'}}>
            <h3 className="card-title">CONTACT PERSON</h3>
            <p className="card-text" style={{fontSize:'16px'}}>
              Sagar Prabhu (876-774-8432)
            </p>
          </div>              
        </div>
        

        <div className="card" style={{ width: '280px', height: '250px', marginLeft: '50px',border: '3px solid black'}}>
        <i className="fas fa-user" style={{ fontSize: '70px', display: 'block', margin: 'auto', color:'lightskyblue', marginTop: '20px' }}></i>
        <div className="card-body" style={{textAlign: 'center', marginTop:'15px'}}>
            <h3 className="card-title">FAX</h3>
            <p className="card-text" style={{fontSize:'16px'}}>
              1-823-549-8843
            </p>
          </div> 
        </div>
        

        <div className="card" style={{ width: '280px', height: '250px', marginLeft: '50px',border: '3px solid black'}}>
        <i className="fas fa-envelope" style={{ fontSize: '70px', display: 'block', margin: 'auto', color:'lightskyblue', marginTop: '20px' }}></i>
          <div className="card-body" style={{textAlign: 'center', marginTop:'15px'}}>
            <h3 className="card-title">EMAIL</h3>
            <p className="card-text" style={{fontSize:'16px'}}>
              ecccloudproject11@gmail.com
            </p>
          </div> 
        </div>
        
    </div>
    </div>
    
    
    
    

    )
  }

export default ContactUs

