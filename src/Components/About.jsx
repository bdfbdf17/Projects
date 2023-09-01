import React from 'react';
import { useInView } from 'react-intersection-observer';



const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className={`about-container ${inView ? 'slide' : ''}`} ref={ref}>
      <div className="about-card">
        <div className="image-container">
          <img id="image" src="public/photo.JPG" alt="Your Photo" />
        </div>
        <div className="details">
          <h2>About Me</h2>
          <div className="personal-info">
            <p>Name: Mohamed Amir Ben Dhief</p>
            <p>Age: 24</p>
            <p>Email : Mohamedamirbendhiaf@gmail.com </p>
            <p>Phone number : +36309045826</p>
          </div>
          <p>
          Passionate computer science engineering student skilled in web development with expertise in front-end technologies like HTML5, CSS3, and JavaScript. Dedicated to creating high-quality, user-friendly websites. Proactive learner always seeking to expand knowledge and stay up-to-date with the latest trends in web development. Ready to contribute innovative web solutions to make a positive impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
