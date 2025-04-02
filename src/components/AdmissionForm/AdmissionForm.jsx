import React, { useState } from 'react';
import './AdmissionForm.css';

const AdmissionPage = () => {
    const [formData, setFormData] = useState({
        studentName: '',
        parentName: '',
        email: '',
        mobile: '',
        dob: '',
        gender: '',
        address: '',
        previousSchool: '',
        gradeApplying: '',
        academicYear: '',
        additionalInfo: ''
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

    const handleDownload = () => {
        const pdfUrl = '/Admission form.pdf';
        
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Application form.pdf'; 
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ message: '', isError: false });
        
        try {
            const response = await fetch('https://jayam-vidyashram.onrender.com/api/submit-admission', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            
            const data = await response.json();
            
            if (response.ok) {
                setStatus({
                    message: 'Your admission application has been submitted successfully!',
                    isError: false
                });
                // Reset form after successful submission
                setFormData({
                    studentName: '',
                    parentName: '',
                    email: '',
                    mobile: '',
                    dob: '',
                    gender: '',
                    address: '',
                    previousSchool: '',
                    gradeApplying: '',
                    academicYear: '',
                    additionalInfo: ''
                });
            } else {
                throw new Error(data.error || 'Failed to submit admission form');
            }
        } catch (error) {
            console.error('Failed to submit admission form:', error);
            setStatus({
                message: 'Failed to submit your application. Please try again later.',
                isError: true
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="admission-page-container">
            {/* Hero Section */}
            <div className="admission-hero-section">
                <h1>Admission Form</h1>
                <h2 className="admission-sub-heading">Apply for Enrollment</h2>

                {/* Admission Info and Form */}
                <div className="admission-box">
                    <div className="admission-info">
                        <h3>ADMISSION INFO</h3>
                        <p className="admission-description">
                            Thank you for your interest in Jayam Vidyashram. Please fill out the form with accurate information to begin the admission process.
                        </p>
                        <button className='app-download' onClick={handleDownload}>Download application form</button>
                    </div>
                    
                    <div className="admission-form-container">
                        {status.message && (
                            <div className={`status-message ${status.isError ? 'error' : 'success'}`}>
                                {status.message}
                            </div>
                        )}
                        <form onSubmit={handleSubmit} className="admission-form">
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="studentName" 
                                    placeholder="Student's Full Name" 
                                    value={formData.studentName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="parentName" 
                                    placeholder="Parent/Guardian's Name" 
                                    value={formData.parentName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="Email Address" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <input 
                                    type="tel" 
                                    name="mobile" 
                                    placeholder="Mobile Number" 
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group half">
                                    <input 
                                        type="date" 
                                        name="dob" 
                                        placeholder="Date of Birth" 
                                        value={formData.dob}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                
                                <div className="form-group half">
                                    <select 
                                        name="gender" 
                                        value={formData.gender}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="" disabled>Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <textarea 
                                    name="address" 
                                    placeholder="Residential Address" 
                                    rows="3"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="previousSchool" 
                                    placeholder="Previous School (if any)" 
                                    value={formData.previousSchool}
                                    onChange={handleChange}
                                />
                            </div>
                            
                            <div className="form-row">
                                <div className="form-group half">
                                    <select 
                                        name="gradeApplying" 
                                        value={formData.gradeApplying}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="" disabled>Grade Applying For</option>
                                        <option value="LKG">LKG</option>
                                        <option value="UKG">UKG</option>
                                        <option value="1">Grade 1</option>
                                        <option value="2">Grade 2</option>
                                        <option value="3">Grade 3</option>
                                        <option value="4">Grade 4</option>
                                        <option value="5">Grade 5</option>
                                        <option value="6">Grade 6</option>
                                        <option value="7">Grade 7</option>
                                        <option value="8">Grade 8</option>
                                        <option value="9">Grade 9</option>
                                        <option value="10">Grade 10</option>
                                        <option value="11">Grade 11</option>
                                        <option value="12">Grade 12</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <textarea 
                                    name="additionalInfo" 
                                    placeholder="Additional Information (Special needs, achievements, etc.)" 
                                    rows="4"
                                    value={formData.additionalInfo}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            
                            <button 
                                type="submit" 
                                className="submit-button"
                                disabled={loading}
                            >
                                {loading ? 'SUBMITTING...' : 'SUBMIT APPLICATION'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Background Elements */}
            <div className="admission-bg-elements">
                <div className="admission-circle-blue"></div>
                <div className="admission-circle-sandal"></div>
            </div>
        </div>
    );
};

export default AdmissionPage;