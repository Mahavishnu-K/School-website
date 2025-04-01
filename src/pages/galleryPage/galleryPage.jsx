import React, { useState } from 'react';
import g1 from './../../assets/gallery/g1.jpg';
import g2 from './../../assets/gallery/g2.jpg';
import g3 from './../../assets/gallery/g3.jpg';
import g4 from './../../assets/gallery/g4.jpg';
import g5 from './../../assets/gallery/g5.jpg';
import g6 from './../../assets/gallery/g6.jpg';
import g7 from './../../assets/gallery/g7.jpg';
import g8 from './../../assets/gallery/g8.jpg';
import g9 from './../../assets/gallery/g9.jpg';
import g10 from './../../assets/gallery/g10.jpg';
import g11 from './../../assets/gallery/g11.jpg';
import g12 from './../../assets/gallery/g12.jpg';
import g13 from './../../assets/gallery/g13.jpg';
import g14 from './../../assets/gallery/g14.jpg';
import g15 from './../../assets/gallery/g15.jpg';
import g16 from './../../assets/gallery/g16.jpg';
import g17 from './../../assets/gallery/g17.jpg';
import g18 from './../../assets/gallery/g18.jpg';
import g19 from './../../assets/gallery/g19.jpg';
import g20 from './../../assets/gallery/g20.jpg';
import g21 from '../../assets/school-entrance.jpg';
import './galleryPage.css';

const Gallery = () => {

    const images = [
        { id: 1, url: g21, title: 'Cultural Dance Performance' },
        { id: 2, url: g1, title: 'Cultural Dance Performance' },
        { id: 3, url: g2, title: 'Principal\'s Address' },
        { id: 4, url: g3, title: 'Science Exhibition Winners' },
        { id: 5, url: g4, title: 'Drama Club Presentation' },
        { id: 6, url: g5, title: 'Sports Champions' },
        { id: 7, url: g6, title: 'Alumni Guest Speech' },
        { id: 8, url: g7, title: 'Orchestra Performance' },
        { id: 9, url: g8, title: 'Art Exhibition Display' },
        { id: 10, url: g9, title: 'Best Student Awards' },
        { id: 11, url: g10, title: 'Traditional Folk Dance' },
        { id: 12, url: g11, title: 'School Choir Performance' },
        { id: 13, url: g12, title: 'Annual Day Inauguration' },
        { id: 14, url: g13, title: 'Teachers\' Special Performance' },
        { id: 15, url: g14, title: 'Prize Distribution Ceremony' },
        { id: 16, url: g15, title: 'Student Council Parade' },
        { id: 17, url: g16, title: 'Group Photo Session' },
        { id: 18, url: g17, title: 'Theatrical Production' },
        { id: 19, url: g18, title: 'Primary Section Dance' },
        { id: 20, url: g19, title: 'Parent-Teacher Meeting' },
        { id: 21, url: g20, title: 'Annual Day Grand Finale' },
    ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-page-container">
      <header className="gallery-header">
        <h1>Photo Gallery</h1>
        <p>A collection of beautiful images</p>
      </header>

      <div className="gallery-grid">
        {images.map((image) => (
          <div className="gallery-item" key={image.id} onClick={() => openLightbox(image)}>
            <img src={image.url} alt={image.title} />
            <div className="image-overlay">
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="close-btn">&times;</span>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.url} alt={selectedImage.title} />
            <div className="image-caption">
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;