import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SelectBranch.css'; // Make sure the CSS file is in the same folder

// Pin Icon Component
const PinIcon = () => (
  <svg 
    className="sb-icon-wrapper" 
    viewBox="0 0 24 24" 
    fill="currentColor"
    width="32" 
    height="32"
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

const SelectBranch = () => {
  const navigate = useNavigate();
  const [selectedBranch, setSelectedBranch] = useState(null);

  const branches = ['Cebu', 'Davao', 'Manila'];

  const handleNext = () => {
    if (selectedBranch) {
      // Navigate to the dynamic URL (e.g. /apply/manila)
      navigate(`/apply/${selectedBranch.toLowerCase()}`);
    }
  };

  return (
    <div className="sb-page-container">
      <button className="sb-back-btn" onClick={() => navigate('/apply')}>
        ← Back
      </button>

      <div className="sb-card">
        <h1 className="sb-title">Select Branch</h1>
        <p className="sb-subtitle">Choose the branch location where you'd like to apply</p>

        <div className="sb-grid">
          {branches.map((branch) => (
            <div
              key={branch}
              className={`sb-option ${selectedBranch === branch ? 'selected' : ''}`}
              onClick={() => setSelectedBranch(branch)}
            >
              <PinIcon />
              <span className="sb-label">{branch}</span>
            </div>
          ))}
        </div>

        <button 
          className="sb-next-btn" 
          onClick={handleNext}
          disabled={!selectedBranch}
        >
          Next: Select Role →
        </button>
      </div>
    </div>
  );
};

export default SelectBranch;