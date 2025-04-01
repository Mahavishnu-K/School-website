import React from 'react';
import tm1 from '../../assets/tm1.png';
import tm2 from '../../assets/tm2.png';
import tm3 from '../../assets/tm3.png';
import tm4 from '../../assets/tm4.png';
import tm5 from '../../assets/tm5.png';
import tm6 from '../../assets/tm6.png';
import tm7 from '../../assets/tm7.png';
import './TeamPage.css';

const TeamPage = () => {
    const leadershipTeam = [
        {
            role: 'CORRESPONDENT',
            name: 'S. Nambi, M.A.',
            description: 'Responsible for the overall vision, mission, and strategic growth of the school. Oversees major decisions and ensures the institution\'s values are upheld.',
            imageUrl: tm1,
        },
        {
            role: 'SECRETARY',
            name: 'N. Jayalakshmi',
            credentials: '',
            description: 'Manages the day-to-day administrative operations of the school. Works closely with staff to implement policies and ensures smooth functioning of all departments.',
            imageUrl: tm2,
        },
        {
            role: 'JOINT SECRETARY',
            name: 'N. Srinivasan',
            credentials: 'M.A., B.L.',
            description: 'Assists the Secretary in administrative duties and legal compliance. Brings legal expertise to ensure the institution adheres to educational regulations and standards.',
            imageUrl: tm3,
        },
        {
            role: 'TREASURER',
            name: 'Dr. N. Sumithra Devi',
            credentials: 'M.Sc., M.A., M. Phil., Ph.D.',
            description: 'Oversees the financial management of the institution including budgeting, accounting, and financial reporting. Ensures fiscal responsibility and sustainable growth.',
            imageUrl: tm4,
        },
        {
            role: 'CO-ORDINATOR',
            name: 'V. Vijayakumar',
            credentials: 'DCE',
            description: 'Coordinates between different departments and stakeholders. Facilitates effective communication and collaboration among staff, students, and parents.',
            imageUrl: tm5,
        },
        {
            role: 'LAW OFFICER',
            name: 'S. Pavithra',
            credentials: 'M.Sc., M.Ed., M.L.',
            description: 'Handles legal matters related to the institution. Provides guidance on compliance with educational laws and represents the school in legal proceedings when needed.',
            imageUrl: tm6,
        },
        {
            role: 'ADMIN OFFICER',
            name: 'K. Sumathi',
            credentials: 'M.Com., M.S.W, M.B.A., M.Lis., B.Ed',
            description: 'Manages administrative staff and operations. Responsible for record keeping, human resources, and ensuring efficient administrative processes.',
            imageUrl: tm7,
        },
    ];

    return (
        <div className="leadership-page-container">
            {/* Leadership Team Section */}
            <div className="leadership-team-section">
                {/* Correspondent (Featured Leadership Position) */}
                <div className="leadership-featured">
                    <div className="leadership-card featured">
                        <div className="leadership-image-container featured">
                            <img 
                                src={leadershipTeam[0].imageUrl} 
                                alt={leadershipTeam[0].name} 
                            />
                        </div>
                        <h3 className="leadership-role">{leadershipTeam[0].role}</h3>
                        <h4 className="leadership-name">{leadershipTeam[0].name}</h4>
                        <p className="leadership-description">{leadershipTeam[0].description}</p>
                    </div>
                </div>

                {/* Other Leadership Team Members in Zigzag Layout */}
                <div className="leadership-team-flex">
                    {leadershipTeam.slice(1).map((leader, index) => (
                        <div 
                            key={`leader-${index}`} 
                            className={`leadership-card-flex ${index % 2 === 0 ? 'even' : 'odd'}`}
                        >
                            {index % 2 === 0 ? (
                                // Even index (left image, right text)
                                <>
                                    <div className="leadership-info-flex">
                                        <h3 className="leadership-role">{leader.role}</h3>
                                        <h4 className="leadership-name">{leader.name}</h4>
                                        {leader.credentials && (
                                            <p className="leadership-credentials">{leader.credentials}</p>
                                        )}
                                        <p className="leadership-description">{leader.description}</p>
                                    </div>
                                    <div className="leadership-image-container-flex">
                                        <img 
                                            src={leader.imageUrl} 
                                            alt={leader.name} 
                                        />
                                    </div>
                                </>
                            ) : (
                                // Odd index (left text, right image)
                                <>
                                    <div className="leadership-info-flex">
                                        <h3 className="leadership-role">{leader.role}</h3>
                                        <h4 className="leadership-name">{leader.name}</h4>
                                        {leader.credentials && (
                                            <p className="leadership-credentials">{leader.credentials}</p>
                                        )}
                                        <p className="leadership-description">{leader.description}</p>
                                    </div>
                                    <div className="leadership-image-container-flex">
                                        <img 
                                            src={leader.imageUrl} 
                                            alt={leader.name} 
                                        />
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Additional Quote Section */}
            <div className="leadership-quote-section">
                <div className="leadership-quote-content">
                    <h3>Working Together for Excellence</h3>
                    <p>
                        Our leadership team brings together a wealth of experience in education, administration, and management. 
                        Together, they work tirelessly to create an environment where students can thrive academically, 
                        emotionally, and socially, preparing them to be tomorrow's leaders.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TeamPage;