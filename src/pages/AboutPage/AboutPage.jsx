import React from 'react';
import f1 from '../../assets/f1.png';
import f10 from '../../assets/f10.png';
import f2 from '../../assets/f2.png';
import f3 from '../../assets/f3.png';
import f4 from '../../assets/f4.png';
import f5 from '../../assets/f5.png';
import f6 from '../../assets/f6.png';
import f7 from '../../assets/f7.png';
import f8 from '../../assets/f8.png';
import f9 from '../../assets/f9.png';
import i1 from '../../assets/i1.png';
import i2 from '../../assets/i2.png';
import i3 from '../../assets/i3.jpg';
import logo from '../../assets/school-entrance.jpg';
import playarea from '../../assets/playarea.png';

import './AboutPage.css';

const AboutPage = () => {
    // Faculty data array for easier management
    const facultyMembers = [
        {
          "id": 1,
          "image": f1,
          "name": "S. Vasantha Kumari",
          "qualifications": "M.Sc, B.Ed",
          "position": "Principal",
          "experience": "15 years"
        },
        {
          "id": 2,
            "image": f4,
          "name": "R. Ramya",
          "qualifications": "D.T.Ed, B.A",
          "position": "TGT",
          "class": "PP1 (JKG)",
          "experience": "7 years"
        },
        {
          "id": 3,
            "image": f5,
          "name": "N. Mala",
          "qualifications": "D.T.Ed, B.A, B.Ed",
          "position": "TGT",
          "class": "PP2 (UKG)",
          "experience": "10 years"
        },
        {
          "id": 4,
            "image": f6,
          "name": "A. Aruna",
          "qualifications": "M.Sc, B.Ed",
          "position": "TGT",
          "class": "Grade 1",
          "experience": "3 years"
        },
        {
          "id": 5,
            "image": f7,
          "name": "P. Reka",
          "qualifications": "M.A, B.Ed",
          "position": "PGT",
          "subject": "Tamil",
          "experience": "7 years"
        },
        {
          "id": 6,
            "image": f8,
          "name": "I. Auxlium Pream Kumari",
          "qualifications": "M.Sc, B.Ed, M.C.A",
          "position": "PGT",
          "class": "Grade 5",
          "experience": "10 years"
        },
        {
          "id": 7,
            "image": f9,
          "name": "V. Deepa",
          "qualifications": "M.A, B.Ed",
          "position": "TGT",
          "class": "Grade 2",
          "experience": "3 years"
        },
        {
          "id": 8,
            "image": f2,
          "name": "K. Vijayalakshmi",
          "qualifications": "M.Sc, B.Ed",
          "position": "PGT",
          "class": "Grade 3",
          "experience": "5 years"
        },
        {
          "id": 9,
          "image": f3,
          "name": "P. Jothi",
          "qualifications": "B.A",
          "position": "TGT",
          "subject": "Hindi",
          "experience": "3 years"
        },
        {
          "id": 10,
            "image": f10,
          "name": "L. Iswarya",
          "qualifications": "M.Sc, B.Ed",
          "position": "PGT",
          "class": "Grade 4",
          "experience": "5 years"
        }
      ]      

    return (
        <div className="about-page-container">
            {/* Academic Section */}
            <div className="about-section academic-section">
                <h2 className="section-title">ACADEMIC</h2>
                <div className="section-subtitle">A student-focused environment and care for children</div>
                
                <div className="academic-content">
                    <p>
                        Welcome to Jayam Vidyashram School (JVS), where learning meets excellence. Established 
                        with a vision to impart quality education, we are committed to providing quality education in a 
                        supportive and inclusive environment.
                    </p>
                    
                    <p>
                        At Jayam Vidyashram School, our educational environment is shaped by our dedicated faculty, 
                        modern infrastructure, and dynamic curriculum to ensure holistic development that goes beyond textbooks.
                    </p>
                    
                    <p>
                        At Jayam Vidyashram School (JVS), our management team is dedicated to ensuring a 
                        nurturing and inspiring learning environment. With a strong commitment to academic 
                        excellence and holistic development, our leadership works collaboratively to shape the school's 
                        vision and mission.
                    </p>
                    
                    <p>
                        At Jayam Vidyashram School (JVS), we are dedicated to fostering a stimulating learning 
                        environment where every child can thrive. Our teaching methodologies are thoughtfully 
                        designed to cater to diverse learning styles, ensuring students are well-
                        equipped for future challenges.
                    </p>
                </div>
            </div>

            {/* Faculty Section with Grid Layout */}
            <div className="about-section faculty-section">
                <h2 className="section-title">FACULTY</h2>
                
                <div className="faculty-grid">
                    {facultyMembers.map((faculty) => (
                        <div key={faculty.id} className="faculty-card">
                            <div className="faculty-image-container">
                                <img src={faculty.image} alt={faculty.name} className="faculty-image" />
                            </div>
                            <div className="faculty-info">
                                <h3 className="faculty-name">{faculty.name}</h3>
                                <p className="faculty-specialization">{faculty.qualifications}</p>
                                <p className="faculty-position">{faculty.position}</p>
                                <p className="faculty-position">{faculty.class}</p>
                                <p className="faculty-specialization">{faculty.specialization}</p>
                                <p className="faculty-experience">Experience: {faculty.experience}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Infrastructure Section */}
            <div className="about-section infrastructure-section">
                <h2 className="section-title">INFRA STRUCTURES</h2>
                
                <div className="infrastructure-content">
                    {/* Bus Service */}
                    <div className="infrastructure-item">
                        <div className="infrastructure-image-container">
                            <img src={i1} className="infrastructure-image placeholder-image" alt="School Bus Service"/>
                        </div>
                        
                        <div className="infrastructure-details">
                            <h3>School Bus Service</h3>
                            <p>
                                Choose a fun theme like "Future Stars", "Little Achievers", or 
                                "SuperHeroes of Learning"! Decorate with balloons, banners, and 
                                photo booths and lay graduation caps and gowns for the 
                                kids.Have them walk the stage to receive a diploma.Set up a 
                                graduation photo booth with props.Let kids create a memory 
                                scrapbook with their handprints and drawings.Add a heartfelt 
                                song like "You're God's Friend In Me" or "We Are The Champions".
                            </p>
                        </div>
                    </div>

                    {/* Library */}
                    <div className="infrastructure-item reverse">
                        <div className="infrastructure-image-container">
                            <img src={i2} className="infrastructure-image placeholder-image" alt="Library"/>
                        </div>
                        
                        <div className="infrastructure-details">
                            <h3>Library</h3>
                            <p>
                                Libraries frequently offer workshops focusing on Science, 
                                Technology, Engineering, Arts, and Mathematics (STEAM). These 
                                interactive sessions provide hands-on learning experiences that 
                                foster creativity and problem-solving skills.Interactive scavenger 
                                hunts are a fun way for children to explore the library, learn about 
                                different sections, and discover new books. This activity 
                                enhances their familiarity with library resources.
                            </p>
                        </div>
                    </div>

                    {/* Play Area */}
                    <div className="infrastructure-item reverse">
                        <div className="infrastructure-image-container">
                            <img src={playarea} className="infrastructure-image placeholder-image" alt="Play Area"/>
                        </div>
                        
                        <div className="infrastructure-details">
                            <h3>Play Area</h3>
                            <p>
                                Play areas provide a dynamic space for children to engage in active and imaginative play. These
                                environments encourage social interaction, motor skill development, and creative exploration.
                                Themed play zones introduce children to different concepts through interactive setups, such as
                                miniature grocery stores, space stations, or jungle adventures. These experiences promote role-playing,
                                problem-solving, and cognitive growth.
                            </p>
                        </div>
                    </div>

                    {/* Computer Lab */}
                    <div className="infrastructure-item">
                        <div className="infrastructure-image-container">
                            <img src={i3} className="infrastructure-image placeholder-image" alt="Computer Lab"/>
                        </div>
                        
                        <div className="infrastructure-details">
                            <h3>Computer Lab</h3>
                            <p>
                                Introduce kids to coding using platforms like Scratch, Code.org, or 
                                Tynker.Use Blocket (a non-coding workshop) for kids.Let kids 
                                create digital drawings using MS Paint, Krita, or Canva.Introduce 
                                animation tools like Piskel (for pixel art) or FlipAGrid.Available, 
                                introduce kids to robotics kits like LEGO Mindstorms or 
                                Arduino.Teach basic Microsoft Office (Word, Excel, PowerPoint) 
                                skills.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* School Identity Section */}
            <div className="about-section school-identity-section">
                <div className="school-identity-content">
                    <div className="school-logo-container">
                        <img src={logo} className="school-logo placeholder-image" alt="School Logo"/>
                    </div>
                    
                    <div className="school-identity-details">
                        <h2>JAYAM VIDHYASHRAM</h2>
                        <p>
                            We follow the Central Board of Secondary Education (CBSE) 
                            curriculum, which is recognized for its balanced approach to 
                            academic excellence and holistic development. Our 
                            curriculum emphasizes both theoretical knowledge and 
                            practical applications through interactive and experiential 
                            learning.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;