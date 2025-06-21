import React, { useState } from 'react';
import cbse from '../../assets/cbse.pdf';
import calender from '../../assets/calender2025-2026.pdf';
import sanitary from '../../assets/sanitary.pdf';
import fire from '../../assets/fire.pdf';
import abcd from '../../assets/abcd.pdf';
import recog from '../../assets/recog.pdf';
import trust from '../../assets/trust.pdf';
import deo from '../../assets/deo.pdf';
import smc from '../../assets/smc.pdf';
import pta from '../../assets/pta.pdf';
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
    const [selectedPdf, setSelectedPdf] = useState(null);

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
            const response = await fetch('https://jayam-vidyashram.onrender.com/api/send-email', {
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

    const handleViewPdf = (docType) => {
        const pdfUrls = {
            affiliation: cbse,        // CBSE affiliation document
            registration: trust,      // Trust/Society registration
            noc: abcd,               // NOC document
            rte: recog,              // RTE recognition certificate
            building_safety: abcd,   // Building safety certificate (reusing abcd)
            fire_safety: fire,       // Fire safety certificate
            deo: deo,               // DEO certificate (reusing cbse)
            health: sanitary,        // Health and sanitation certificates
            calendar: calender,
            smc: smc,
            pta: pta      
        };

        const pdfUrl = pdfUrls[docType];
        if (pdfUrl) {
            setSelectedPdf({
                url: pdfUrl,
                type: docType
            });
        }
    };


    const closePdfViewer = () => {
        setSelectedPdf(null);
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
                            <p>kalpoondi Salai</p>
                            <p>Kil Pennathur, Tiruvannamalai Dt</p>
                            <p>Tamil Nadu 604601</p>
                        </div>
                    </div>
                    
                    <div className="contact-form-container">
                        {status.message && (
                            <div className={`status-message ${status.isError ? 'error' : 'success'}`}>
                                {status.message}
                            </div>
                        )}
                        <div className="contact-form">
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
                                onClick={handleSubmit}
                            >
                                {loading ? 'SENDING...' : 'SEND MESSAGE'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="map-container">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.935378144456!2d79.2375096!3d12.252652399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bacc9c4063c907b%3A0x8ffb8f6f09ffe140!2sJAYAM%20VIDYASHRAM%20SCHOOL%20KILPENNATHUR%2C%20TIRUVANNAMALAI%20-%20604601!5e0!3m2!1sen!2sin!4v1743589854400!5m2!1sen!2sin"
                    width="100%" 
                    height="400" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Jayam Vidyashram location"
                ></iframe>
            </div>

            {/* Mandatory Public Disclosure Section */}
            <div className="disclosure-section">
                <h2 className="disclosure-title">MANDATORY PUBLIC DISCLOSURE</h2>
                
                {/* Table A: General Information */}
                <div className="table-container">
                    <h3 className="table-heading">A: GENERAL INFORMATION:</h3>
                    <div className="table-wrapper">
                        <table className="disclosure-table">
                            <thead>
                                <tr>
                                    <th>S.NO</th>
                                    <th>INFORMATION</th>
                                    <th>DETAILS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>NAME OF THE SCHOOL</td>
                                    <td>JAYAM VIDYASHRAM SCHOOL CBSE</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>AFFILIATION NO.(IF APPLICABLE)</td>
                                    <td>1931164</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>SCHOOL CODE (IF APPLICABLE)</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>COMPLETE ADDRESS</td>
                                    <td>Kalpoondi Salai, Kilpennathur, Tiruvannamalai dist.</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>PRINCIPAL NAME & QUALIFICATION</td>
                                    <td> S.Vasanthakumari M.sc., B.Ed.,</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>SCHOOL EMAIL ID</td>
                                    <td>jayamvidhyashram@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>CONTACT DETAILS (LANDLINE/MOBILE)</td>
                                    <td>+91-9790038537, +91-9841026427</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Table B: Documents and Information */}
                <div className="table-container">
                    <h3 className="table-heading">B. DOCUMENTS AND INFORMATION</h3>
                    <div className="table-wrapper">
                        <table className="disclosure-table">
                            <thead>
                                <tr>
                                    <th>S.NO</th>
                                    <th>DOCUMENTS/INFORMATION</th>
                                    <th>DOCUMENTS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IF ANY</td>
                                    <td>
                                        <button 
                                            className="view-button"
                                            onClick={() => handleViewPdf('affiliation')}
                                        >
                                            View
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE</td>
                                    <td>
                                        <button 
                                            className="view-button"
                                            onClick={() => handleViewPdf('registration')}
                                        >
                                            View
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND IT'S RENEWAL IF APPLICABLE</td>
                                    <td>
                                        <button 
                                            className="view-button"
                                            onClick={() => handleViewPdf('rte')}
                                        >
                                            View
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE</td>
                                    <td>
                                        <button 
                                            className="view-button"
                                            onClick={() => handleViewPdf('building_safety')}
                                        >
                                            View
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY</td>
                                    <td>
                                        <button 
                                            className="view-button"
                                            onClick={() => handleViewPdf('fire_safety')}
                                        >
                                            View
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>COPY OF THE DEO CERTIFICATE SUBMITTED BY THE SCHOOL FOR AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATIONOR SELF CERTIFICATION BY SCHOOL</td>
                                    <td>
                                        <button 
                                            className="view-button"
                                            onClick={() => handleViewPdf('deo')}
                                        >
                                            View
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES</td>
                                    <td>
                                        <button 
                                            className="view-button"
                                            onClick={() => handleViewPdf('health')}
                                        >
                                            View
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Optional: Academic Calendar Section */}
                <div className="table-container">
                    <h3 className="table-heading">C. ADDITIONAL DOCUMENTS</h3>
                    <div className="table-wrapper">
                        <table className="disclosure-table">
                            <thead>
                                <tr>
                                    <th>S.NO</th>
                                    <th>DOCUMENTS/INFORMATION</th>
                                    <th>DOCUMENTS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>ACADEMIC CALENDAR 2025-2026</td>
                                    <td>
                                        <button 
                                            className="view-button"
                                            onClick={() => handleViewPdf('calendar')}
                                        >
                                            View
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>SCHOOL MANAGEMENT COMMITTEE</td>
                                    <td>
                                        <button 
                                            className="view-button"
                                            onClick={() => handleViewPdf('smc')}
                                        >
                                            View
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>PARENTS TEACHERS ASSOCIATION</td>
                                    <td>
                                        <button 
                                            className="view-button"
                                            onClick={() => handleViewPdf('pta')}
                                        >
                                            View
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="table-note">
                    <strong>NOTE:</strong> THE SCHOOLS NEEDS TO UPLOAD THE SELF ATTESTED COPIES OF ABOVE LISTED DOCUMENTS BY CHAIRMAN/MANAGER/SECRETARY AND PRINCIPAL IN CASE, IT IS NOTICED AT LATER STAGE THAT UPLOADED DOCUMENTS ARE NOT GENUINE THEN SCHOOL SHALL BE LIABLE FOR ACTION AS PER NORMS.
                </div>
            </div>

            {/* PDF Viewer Modal */}
            {selectedPdf && (
                <div className="pdf-modal-overlay" onClick={closePdfViewer}>
                    <div className="pdf-modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="pdf-modal-header">
                            <h3>Document Viewer</h3>
                            <button className="close-button" onClick={closePdfViewer}>
                                ×
                            </button>
                        </div>
                        <div className="pdf-viewer-container">
                            <iframe
                                src={selectedPdf.url}
                                width="100%"
                                height="800"
                                title={`Document - ${selectedPdf.type}`}
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Background Elements */}
            <div className="contact-bg-elements">
                <div className="contact-circle-blue"></div>
                <div className="contact-circle-sandal"></div>
            </div>

        </div>
    );
};

export default ContactPage;