import React from 'react'
import { Container, Row, Col} from 'reactstrap';
import "../style.scss";

import Developer1 from '../assets/Sagar.jpeg';
import Developer2 from '../assets/Brad.jpeg';
import Developer3 from '../assets/Bhakti.jpg';
import OurStory from '../assets/our_storyImage.jpg';
import About from '../assets/about_1.jpg';
import About1 from '../assets/about_2.jpg';
import About2 from '../assets/about_3.jpg';



function AboutUs() {
  
  return (
    
    <div className="about">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      

      <div className="aboutBottom">
      <section id="ourStory" data-aos="fade-up">
    <div class="container">
      <div class="ourStory__wrapper">

        <div class="ourStory__img">
          <img src={OurStory} alt="Food 4U"/>
        </div>
        <div class="ourStory__info">
          <h4 class="ourStory__title">
            Our Story
          </h4>
          <p class="ourStory__subtitle">
            It's all started since 2012
          </p>
          <p class="ourStory__text">
          Welcome to <b>Food 4U</b>, our delicious world of food blog! 
          <br></br>
          From mouth-watering recipes to tantalizing food adventures,<br></br> 
          our app is your ultimate guide  to all things food.

            <br></br>
            <br></br>
            Ready to indulge in a culinary journey that will tantalize your taste buds? 
            <br></br> 
            Look no further than our food blog app, where we serve up a smorgasbord 
            <br></br> of delectable dishes and culinary creations that are sure to satisfy any appetite.
            
          </p>
        </div>
      </div>
    </div>

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  <br></br>
    
  <section id="ourGoals" data-aos="fade-down">
    <div class="container">
      <div class="ourGoals__info">
        <h3 class="ourGoals__title">
          Our Goals
        </h3>
        <p class="ourGoals__text">
          Our Food 4U blog displays delicious and remarkable food and beverages that meet the highest quality, freshness, and
          seasonality criteria while combining modern-creative and classic cooking traditions. By showcasing warmth,
          graciousness, efficiency, skill, professionalism, and integrity in our work, we will continually serve our
          consumers with exceptional service. To have every customer who comes through our website leave impressed
          and are excited to come back again.
        </p>
      </div>
      <div class="ourGoals__imgs__wrapper" data-aos="fade-up">
        <div class="ourGoals__img1">
          <img src={About} alt="kitchen img" height="735" width="500" />
        </div>
        <div class="ourGoals__img2">
          <img src={About1} alt="kitchen img" height="350" width="600"/>
        </div>
        <div class="ourGoals__img3">
          <img src={About2} alt="kitchen img" height="350" width="600"/>
        </div>
      </div>
    </div>
  </section>
  
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  </section>

      <h2> Our Developers</h2>
      <div className="developers-container">
        <div className="developer">
          <img src={Developer1} alt="Developer 1" height={400} width={500}/>
          <h3>Sagar Prabhu</h3>
          <p>Cloud & Application Developer </p> 
          <p>Application Architect</p>
        </div>
        <div className="developer">
          <img src={Developer2} alt="Developer 2" height={400} width={500}/>
          <h3>Brad Cooley</h3>
          <p>Cloud Architect & Developer</p> 
        </div>
        <div className="developer">
          <img src={Developer3} alt="Developer 3" height={400} width={500}/>
          <h3>Bhakti Patrawala</h3>
          <p>Application Developer</p>
        </div>
      </div>

      </div>

    </div>
        
  )
    
}


export default AboutUs

