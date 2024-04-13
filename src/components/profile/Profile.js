import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './Profile.scss';

export default function Profile() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const dogs = [
    {
      id: 1,
      name: 'Golden Retriever',
      image: 'https://example.com/golden_retriever.jpg',
      description: 'The Golden Retriever is a friendly, intelligent, and devoted dog breed.',
    },
    {
      id: 2,
      name: 'German Shepherd',
      image: 'https://example.com/german_shepherd.jpg',
      description: 'The German Shepherd is a loyal, versatile, and highly trainable breed.',
    },
    {
      id: 3,
      name: 'Labrador Retriever',
      image: 'https://example.com/labrador_retriever.jpg',
      description: 'The Labrador Retriever is a friendly, outgoing, and high-spirited breed.',
    },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="profile-container">
      <div className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-content">
          <div className="sidebar-toggle" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={sidebarOpen ? faTimes : faComment} />
          </div>
          <h3>Sidebar Content</h3>
          <ul>
            <li>
              <Link to="/profile">
                <span>Profile</span>
              </Link>
            </li>
            <li>
              <Link to="/doctor-list">
                <span>Doctor list</span>
              </Link>
            </li>
            <li>
              <Link to="/pet-store">
                <span>Pet store</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="main-content">
        <div className="dog-gallery">
          {dogs.map((dog) => (
            <div key={dog.id} className="dog-card">
              <img src={dog.image} alt={dog.name} />
              <div className="dog-description">
                <h3>{dog.name}</h3>
                <p>{dog.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="main-content-toggle" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={sidebarOpen ? faTimes : faComment} />
        </div>
      </div>
    </div>
  );
}
