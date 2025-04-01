import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        mobile: '',
        message: ''
    });
    const [status, setStatus] = useState({
        message: '',
        isError: false
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ message: '', isError: false });
        
        try {
            // Send data to server-side API endpoint
            const response = await fetch('http://localhost:5000/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            
            const data = await response.json();
            
            if (response.ok) {
                setStatus({
                    message: 'Your message has been sent successfully!',
                    isError: false
                });
                // Reset form after successful submission
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    mobile: '',
                    message: ''
                });
            } else {
                throw new Error(data.error || 'Failed to send email');
            }
        } catch (error) {
            console.error('Failed to send email:', error);
            setStatus({
                message: 'Failed to send your message. Please try again later.',
                isError: true
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-page-container">
        {/* Hero Section */}
        <div className="contact-hero-section">
            <h1>Contact Us</h1>
            <h2 className="contact-sub-heading">Get In Touch</h2>

            {/* Contact Info and Form */}
            <div className="contact-box">
            <div className="contact-info">
                <h3>CONTACT INFO</h3>
                <p className="contact-description">
                You can always reach us via following contact details. We will give our best to reach you as possible.
                </p>
                
                <div className="contact-detail">
                <h4>Phone:</h4>
                <p>+91 97900 38537</p>
                <p>+91 98410 26427</p>
                </div>
                
                <div className="contact-detail">
                <h4>Email:</h4>
                <p>jayamvidhyashram@gmail.com</p>
                </div>
                
                <div className="contact-detail">
                <h4>Address:</h4>
                <p>763P+3XW, Tindivanam Rd,</p>
                <p>Kil Pennathur,</p>
                <p>Tamil Nadu 604601</p>
                </div>
            </div>
            
            <div className="contact-form-container">
                {status.message && (
                    <div className={`status-message ${status.isError ? 'error' : 'success'}`}>
                        {status.message}
                    </div>
                )}
                <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <input 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />
                </div>
                
                <div className="form-group">
                    <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                </div>
                
                <div className="form-group">
                    <input 
                    type="text" 
                    name="subject" 
                    placeholder="Subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    />
                </div>
                
                <div className="form-group">
                    <input 
                    type="tel" 
                    name="mobile" 
                    placeholder="Mobile number" 
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    />
                </div>
                
                <div className="form-group">
                    <textarea 
                    name="message" 
                    placeholder="Message here..." 
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    ></textarea>
                </div>
                
                <button 
                    type="submit" 
                    className="submit-button"
                    disabled={loading}
                >
                    {loading ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
                </form>
            </div>
            </div>
        </div>

        {/* Map Section */}
        <div className="map-container">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d177692.3556122802!2d79.28821454110845!3d12.22485402529369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bacc970d204b6a1%3A0x9cb52b395a203e31!2sJAYAM%20VIDYASHRAM%20SCHOOL%20KILPENNATHUR!5e0!3m2!1sen!2sin!4v1743479955188!5m2!1sen!2sin" 
            width="100%" 
            height="400" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Jayam Vidyashram location"
            ></iframe>
        </div>

        {/* Background Elements */}
        <div className="contact-bg-elements">
            <div className="contact-circle-blue"></div>
            <div className="contact-circle-sandal"></div>
        </div>
        </div>
    );
};

export default ContactPage;