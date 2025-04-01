import React from 'react';
import f1 from '../../assets/f1.png';
import f2 from '../../assets/f2.png';
import f3 from '../../assets/f3.png';
import './FacultyGrid.css';

const FacultyGrid = () => {
    // Faculty data could be moved to an array for easier management
    const facultyMembers = [
        {
        id: 1,
        image: f1,
        name: "K. VIJAYALAKSHMI, M.Sc, B.Ed",
        position: "Primary School Teacher",
        class: "Grade V",
        specialization: "Specialized in English",
        experience: "25+ years of experience in primary education",
        description: "She specializes in creating engaging and interactive learning experiences for young learners. Her approach focuses on fostering creativity, critical thinking, and literacy by creating strong ties between the classroom and real-world applications. Well-versed in differentiated instruction, she employs innovative methods in her classroom."
        },
        {
        id: 2,
        image: f2,
        name: "K. VIJAYALAKSHMI, M.Sc, B.Ed",
        position: "Senior Science Teacher",
        class: "Physics",
        specialization: "M.Sc in Applied Physics, B.Ed",
        experience: "15+ years of experience teaching ICSE and CBSE syllabi",
        description: "She is a passionate physics educator and a strong believer in hands-on learning. She helps students grasp complex concepts through real-world applications of science. By blending physics fundamentals with real-world engineering challenges, fostering critical thinking, and creating immersive laboratory experiences, she instills a lifelong love of scientific thinking in young minds."
        },
        {
        id: 3,
        image: f3,
        name: "S. VIJAYALAKSHMI, M.B.A",
        position: "Assistant Professor of Business Administration",
        class: "Marketing",
        specialization: "Specialized in Marketing",
        experience: "15 years in business consultancy",
        description: "With an MBA focusing on Marketing Management from a prestigious NIRF/NAAC Entity and an elaborate mid-career in business consultancy, she specializes in marketing strategy and digital customer engagement. Her research publications maintain relevant papers in International journals and she has guided several MBA students in their dissertations for teaching skills that have strong experiential learning."
        }
    ];

    return (
        <div className="faculty-section">
        <h2 className="section-title">FACULTY</h2>
        
        <div className="faculty-grid">
            {facultyMembers.map((faculty) => (
            <div key={faculty.id} className="faculty-card">
                <div className="faculty-image-container">
                <img src={faculty.image} alt={faculty.name} className="faculty-image" />
                </div>
                <div className="faculty-info">
                <h3 className="faculty-name">{faculty.name}</h3>
                <p className="faculty-position">{faculty.position} ({faculty.class})</p>
                <p className="faculty-specialization">{faculty.specialization}</p>
                <p className="faculty-experience">{faculty.experience}</p>
                <p className="faculty-description">{faculty.description}</p>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
};

export default FacultyGrid;