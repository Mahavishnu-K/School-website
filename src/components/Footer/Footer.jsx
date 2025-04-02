import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaTwitter, FaYoutube, FaInstagram, FaFacebook  } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState({
        message: '',
        isError: false,
        isSubmitting: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ message: '', isError: false, isSubmitting: true });

        try {
            // Add a default subject for footer contact forms
            const contactData = {
                ...formData,
                subject: 'Website Footer Contact Form',
                mobile: 'Not provided' // The footer form doesn't have a mobile field
            };

            // Use the existing backend endpoint for sending emails
            const response = await fetch('https://jayam-vidyashram.onrender.com/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contactData),
            });
            
            const data = await response.json();
            
            if (response.ok) {
                setStatus({
                    message: 'Message sent successfully!',
                    isError: false,
                    isSubmitting: false
                });
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            } else {
                throw new Error(data.error || 'Failed to send message');
            }
        } catch (error) {
            console.error('Failed to send message:', error);
            setStatus({
                message: 'Failed to send message. Please try again.',
                isError: true,
                isSubmitting: false
            });
        }
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section about-section">
                    <p className="footer-description">
                        Jayam Vidhyashram is an outstanding Nursery & Primary school targeting educational
                        System, helping Kids to read and write.
                    </p>
                </div>

                <div className="footer-section links-section">
                    <h2 className="footer-title">Links</h2>
                    <ul className="footer-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">Academics</a></li>
                        <li><a href="/team">Management</a></li>
                        <li><a href="/gallery">Gallery</a></li>
                        <li><a href="/contact">Contact us</a></li>
                    </ul>
                </div>


                <div className="footer-section find-us-section">
                    <h2 className="footer-title">Find Us</h2>
                    <div className="contact-item">
                        <FaEnvelope className="contact-icon" />
                        <span>jayamvidhyashram@gmail.com</span>
                    </div>
                    <div className="contact-item">
                        <FaPhone className="contact-icon" />
                        <div className="phone-numbers">
                            <span>+91 97900 38537</span>
                            <span>+91 98410 26427</span>
                        </div>
                    </div>
                    <div className="contact-item social-links">
                        <a href="https://youtube.com/@jayamvidhyashramschool1638?si=JBI8QnhnmXD4NGjp" target="_blank" rel="noopener noreferrer">
                            <FaYoutube className="contact-icon" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61574498666513" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="contact-icon" />
                        </a>
                        <a href="https://www.instagram.com/jayam_vidyashram?igsh=eDlhb25tNzlicnQ5" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="contact-icon" />
                        </a>
                    </div>
                </div>

                <div className="footer-section contact-form-section">
                    <h2 className="footer-title">Contact us</h2>
                    {status.message && (
                        <div className={`footer-status-message ${status.isError ? 'footer-error' : 'footer-success'}`}>
                            {status.message}
                        </div>
                    )}
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Your Name" 
                            className="form-input"
                            value={formData.name}
                            onChange={handleChange}
                            required 
                        />
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Your Email" 
                            className="form-input"
                            value={formData.email}
                            onChange={handleChange}
                            required 
                        />
                        <textarea 
                            name="message" 
                            placeholder="Your Message..." 
                            className="form-textarea"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button 
                            type="submit" 
                            className="submit-button"
                            disabled={status.isSubmitting}
                        >
                            {status.isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
            <div className="copyright">
                <p>Powered by <a href="https://www.weacttech.com">Weact Tech</a></p>
            </div>
        </footer>
    );
};

export default Footer;