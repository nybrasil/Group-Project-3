import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TeamMember from '../components/TeamMember';
import '../styles/AboutUs.css'; // Corrected path to the CSS file
import aboutUsImage from '../assets/image1.webp'
import pikachu2 from '../assets/pikachu2.jpg';
import panda from '../assets/panda.jpg';
import psyduk from '../assets/psyduk.jpg';
import husky from '../assets/husky.jpg';
import cat from '../assets/cat.jpg';


const AboutUs = () => {
    const teamMembers = [
        {
            name: 'Ross Tauchert',
            role: 'CEO and Founder',
            bio: 'Ross has over 20 years of experience in stock brokerage and financial planning...',
            image: pikachu2,
        },
        {
            name: 'Mark Comer',
            role: 'Chief Financial Officer',
            bio: 'Mark oversees all financial operations and ensures the company’s financial health...',
            image: panda,
        },
        {
            name: 'Tania Bezerra',
            role: 'Head of Marketing',
            bio: 'Tania leads the marketing team with innovative strategies and campaigns...',
            image: psyduk,
        },
        {
            name: 'Chris Joo',
            role: 'Chief Technology Officer',
            bio: 'Chris is in charge of all technology and development efforts...',
            image: husky,
        },
        {
            name: 'Tyler Zhao',
            role: 'Operations Manager',
            bio: 'Tyler ensures smooth operations and manages logistics...',
            image: cat
        },
       
    ];

    return (
      <>
      <Header />

      <div className="about-us">
          <div className="about-us-header-container">
              <div className="about-us-header">
                  <h1>About Us</h1>
                  <p className="mission-statement">
                      At Stock Broker, our mission is to empower individuals and businesses with the tools and insights needed
                      to navigate the complexities of the financial markets. We strive to provide accurate, timely, and comprehensive
                      stock analysis to help our users make informed investment decisions. Our commitment is to enhance financial
                      literacy and promote a deeper understanding of market dynamics, ensuring that every investor has the confidence 
                      and knowledge to achieve their financial goals.
                  </p>
              </div>
              <div className="about-us-image">
                  <img src={aboutUsImage} alt="About Us" />
              </div>
          </div>
          <div className="team-members">
              {teamMembers.map((member, index) => (
                  <TeamMember
                      key={index}
                      name={member.name}
                      role={member.role}
                      bio={member.bio}
                      image={member.image}
                  />
              ))}
          </div>
          <Footer />
      </div>
      </>
  );
};
export default AboutUs;
