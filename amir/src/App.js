import React from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import FlipCard from './Components/FlipCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faServer, faCode } from '@fortawesome/free-solid-svg-icons';

import { faPython } from '@fortawesome/free-brands-svg-icons'; // Import Python icon specifically

function App() {
  return (
    <div>
      <Header className="title" />
      <About />
      <div className="flip-cards">
        <FlipCard
          title="Education"
          content="Bachelor, Scholarship-holder

                  SEP. 2020 - PRESENT, 7th Semester

                  University of Dunaújváros – Fejér, Hungary

                  Major: 
                   Computer Science Engineering BSc."
        />
        <FlipCard
          title="Technologies"
          content={
            <div className="icon-list">
              <FontAwesomeIcon icon={faHtml5} size="3x" title="HTML5" className="icon" />
              <FontAwesomeIcon icon={faCss3} size="3x" title="CSS3" className="icon" />
              <FontAwesomeIcon icon={faJs} size="3x" title="JavaScript" className="icon" />
              <FontAwesomeIcon icon={faReact} size="3x" title="React" className="icon" />
              <FontAwesomeIcon icon={faNodeJs} size="3x" title="Node.js" className="icon" />
              <FontAwesomeIcon icon={faDatabase} size="3x" title="MongoDB" className="icon" />
              <FontAwesomeIcon icon={faServer} size="3x" title="MySQL" className="icon" />
              <FontAwesomeIcon icon={faCode} size="3x" title="PHP" className="icon" />
              <FontAwesomeIcon icon={faServer} size="3x" title="Java" className="icon" />
              <FontAwesomeIcon icon={faPython} size="3x" title="Python" className="icon" />
            </div>
          }
        />
        <FlipCard title="Soft Skills" content="Communication,
Problem-Solving,
Collaboration,
Time Management,
Adaptability,
Leadership,
Attention to Detail,
Empathy,
Self-Motivation,
Critical Thinking" />
      </div>
    </div>
  );
}

export default App;
