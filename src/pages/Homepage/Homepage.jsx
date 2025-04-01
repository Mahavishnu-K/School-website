import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import bulb from '../../assets/bulb.png'
import coreValueBg from '../../assets/core_value_bg.png'
import dotted_path from '../../assets/dotted_path.png'
import jayam from '../../assets/jayam.png'
import mission from '../../assets/mission.png'
import p1 from '../../assets/gallery/g12.jpg'
import p2 from '../../assets/gallery/g13.jpg'
import p3 from '../../assets/gallery/g14.jpg'
import p4 from '../../assets/gallery/g15.jpg'
import p5 from '../../assets/gallery/g16.jpg'
import p6 from '../../assets/gallery/g17.jpg'
import p7 from '../../assets/gallery/g18.jpg'
import p8 from '../../assets/gallery/g19.jpg'
import p9 from '../../assets/gallery/g20.jpg'
import rocket from '../../assets/rocket.png'
import scratch from '../../assets/scratch.png'
import vision from '../../assets/vision.png'
import heroVideo from '../../assets/hero-video.mp4'
import './HomePage.css'

const HomePage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const navigate = useNavigate();
    
    // Add this for the gallery
    const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
    
    // Gallery images - in a real implementation, replace with your actual imported images
    const galleryImages = [
        // First slide images
        [p1, p2, p3],
        // Second slide images
        [p4, p5, p6],
        // Third slide images
        [p7, p8, p9]
    ];
    
    // Function to handle gallery navigation
    const handleGalleryDotClick = (index) => {
        setActiveGalleryIndex(index);
    };
    
    // Auto-rotate gallery images every 5 seconds
    useEffect(() => {
        const galleryInterval = setInterval(() => {
            setActiveGalleryIndex((prevIndex) => 
                prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);
        
        return () => clearInterval(galleryInterval);
    }, [galleryImages.length]);

    return (
        <div className='home-page-container'>
            {/* Video Section */}
            <div className="home-page-video-section">
                <video 
                    className="home-page-video" 
                    autoPlay
                    muted
                    loop
                >
                    <source src={heroVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Hero Section */}
            <div className="home-page-hero-section">
                <div className="home-page-hero-top">
                    <h2>Jayam Vidyashram</h2>
                    <h5>Vision</h5>
                    <p>To inspire and empower students to become responsible global citizens with a lifelong passion for learning.</p>
                </div>
                <div className="home-page-hero-bottom">
                    <h5>Mission</h5>
                    <p>
                        To provide a well-rounded education that promotes academic excellence and character development.
                        To foster critical thinking, creativity, and leadership skills.
                        To nurture values of empathy, respect, and integrity.
                    </p>
                </div>
                <div className="home-page-hero-bg-elements">
                    <div className="home-page-hero-circle-blue"></div>
                    <div className="home-page-hero-circle-sandal"></div>
                    <img src={p1} alt="" className='p1'/>
                    <img src={p2} alt="" className='p2'/>
                    <img src={p3} alt="" className='p3'/>
                    <img src={bulb} alt="" className='bulb'/>
                    <img src={rocket} alt="" className='rocket'/>
                    <img src={dotted_path} alt="" className='dotted_path'/>
                    <img src={scratch} alt="" className='scratch'/>
                </div>
                <div className='admission-button-container'>
                    <button className='admission-button' onClick={() => {navigate('admission-form')}}>Admission</button>
                </div>
            </div>

            {/* About Us Section */}
            <div className="home-page-about-us-section">
                <h2 className="about-us-title">ABOUT US</h2>
                
                <div className="about-us-content">
                    <div className="our-mission">
                        <div className="mission-content">
                            <h3>Our Mission</h3>
                            <p>To provide a well-rounded education that promotes academic excellence and character development.</p>
                            <p>To foster critical thinking, creativity, and leadership skills.</p>
                            <p>To nurture values of empathy, respect, and integrity.</p>
                        </div>
                        
                        <img src={mission} alt="Mission" className="about-us-image" />
                    </div>
                    <div className="our-vision">
                        <img src={vision} alt="Vision" className="about-us-image" />
                        
                        <div className="vision-content">
                            <h3>Our Vision</h3>
                            <p>To inspire and empower students to become responsible global citizens with a lifelong passion for learning.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="home-page-education-section">
                
                <div className="education-content">
                    <div className="education-levels">
                        <div className="primary-school">
                            <h3>Primary School (Grades 1-5)</h3>
                            <p>Foundation in literacy, numeracy, and basic sciences. Introduction to creative arts, physical education, and life skills. Activity-based learning to develop curiosity and confidence.</p>
                        </div>
                        
                        <div className="middle-school">
                            <h3>Middle School (Grades 6-8)</h3>
                            <p>In-depth subject learning with a focus on analytical thinking. Emphasis on project-based learning and collaborative activities. Exposure to STEM (Science, Technology, Engineering, and Mathematics) initiatives.</p>
                        </div>
                    </div>
                    
                    <div className="education-description">
                        <img src={jayam} alt="Students Learning" className="education-image" />
                        
                        <div className="education-text">
                            <p>Every child begins their journey in primary school with boundless curiosity and endless potential. This is a place where learning becomes an adventure, and each day brings new opportunities to explore, create, and grow.</p>
                            
                            <p>Through engaging lessons, hands-on activities, and a rich tapestry of music, art, and storytelling, children develop not only their academic skills but also their confidence and imagination. The classroom becomes a world where questions are encouraged, ideas come to life, and every child's unique voice is celebrated.</p>
                            
                            <p>Here, teachers are not just educators—they are mentors who guide with patience, kindness, and a deep understanding of the joy and wonder in learning. For these young minds, <span className="education-adventure">The World is an Adventure.</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-page-gallery-section">
                <h2 className="gallery-title" onClick={() => navigate('/gallery')}>Our <span>Gallery</span></h2>
                
                <div className="gallery-container">
                    {galleryImages[activeGalleryIndex].map((image, index) => (
                        <img 
                            key={`gallery-img-${activeGalleryIndex}-${index}`}
                            src={image} 
                            alt={`Gallery image ${index + 1}`}
                            className="gallery-image"
                        />
                    ))}
                </div>
                
                <div className="gallery-dots">
                    {galleryImages.map((_, index) => (
                        <div 
                            key={`gallery-dot-${index}`}
                            className={`gallery-dot ${activeGalleryIndex === index ? 'active' : ''}`}
                            onClick={() => handleGalleryDotClick(index)}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomePage