import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ApplicationForm.css'; // Shared CSS

/* --- MOCK DATA WITH BRANCH AVAILABILITY --- */
const ROLES_DATA = [
  { 
    id: 'corp-sec', 
    title: 'Corporate Secretary/Division Manager for Brokerage', 
    desc: 'Oversee brokerage division operations and manage corporate secretarial duties', 
    isOpen: { manila: false, cebu: false, davao: true } 
  },
  { 
    id: 'licensed-broker', 
    title: 'Licensed Customs Broker', 
    desc: 'Handle customs clearance procedures and regulatory compliance', 
    isOpen: { manila: true, cebu: true, davao: false } 
  },
  { 
    id: 'office-manager', 
    title: 'Office Manager', 
    desc: 'Manage office operations and administrative functions', 
    isOpen: { manila: false, cebu: true, davao: true } 
  },
  { 
    id: 'messenger', 
    title: 'Messenger / Logistics', 
    desc: 'Handle document delivery and logistics coordination', 
    isOpen: { manila: true, cebu: true, davao: true } 
  },
  { 
    id: 'secretary', 
    title: 'Secretary to the Office Manager', 
    desc: 'Provide administrative support to the Office Manager', 
    isOpen: { manila: true, cebu: true, davao: false } 
  },
  { 
    id: 'brokerage-specialist', 
    title: 'Brokerage Specialist', 
    desc: 'Specialize in brokerage operations and client services', 
    isOpen: { manila: true, cebu: true, davao: true } 
  },
  { 
    id: 'import-export-head', 
    title: 'Import & Export Head', 
    desc: 'Lead import and export operations and compliance', 
    isOpen: { manila: true, cebu: false, davao: true } 
  },
  { 
    id: 'admin-staff', 
    title: 'Administration Staff', 
    desc: 'Support administrative and operational functions', 
    isOpen: { manila: true, cebu: true, davao: true } 
  },
  { 
    id: 'doc-head', 
    title: 'Documentations Head', 
    desc: 'Manage documentation processes and compliance records', 
    isOpen: { manila: false, cebu: false, davao: false } 
  },
];

const SelectPosition = () => {
  const navigate = useNavigate();
  const { branch } = useParams(); // e.g. "Manila"
  const [selectedRole, setSelectedRole] = useState(null);

  // Normalize branch key (lowercase for logic)
  const currentBranchKey = branch ? branch.toLowerCase() : 'manila';
  const displayBranch = branch ? branch.charAt(0).toUpperCase() + branch.slice(1) : 'Manila';

  const handleBack = () => {
    navigate('/apply/branch');
  };

  const handleRoleClick = (roleId, isAvailable) => {
    if (isAvailable) {
      setSelectedRole(roleId);
    }
  };

  const handleNext = () => {
    if (selectedRole) {
      navigate(`/apply/${branch}/${selectedRole}`);
    }
  };

  return (
    <div className="af-page-container">
      {/* --- SHARED NAVIGATION & PROGRESS BAR --- */}
      <div className="af-top-nav">
        <button className="af-back-btn" onClick={handleBack}>← Back to Branch Selection</button>
        <div className="af-progress-wrapper">
          <div className="af-progress-header-row">
            <span className="af-progress-text">Progress</span>
            <span className="af-progress-step">Step 1 of 5</span>
          </div>
          <div className="af-progress-bar">
            {/* 20% for Step 1 */}
            <div className="af-progress-fill" style={{ width: '20%' }}></div>
          </div>
        </div>
      </div>

      <div className="af-card">
        <div className="sp-header">
          <h1 className="af-title">Select Position</h1>
          <p className="af-subtitle">
            Applying for: <span style={{color: '#FFB81C', fontWeight: 'bold'}}>{displayBranch} Branch</span>
          </p>
          <p className="sp-desc">Choose the role you're interested in applying for</p>
        </div>

        <div className="sp-grid">
          {ROLES_DATA.map((role) => {
            // Check availability for specific branch
            const isAvailable = role.isOpen[currentBranchKey];

            return (
              <div 
                key={role.id} 
                className={`sp-role-card ${!isAvailable ? 'disabled' : ''} ${selectedRole === role.id ? 'selected' : ''}`}
                onClick={() => handleRoleClick(role.id, isAvailable)}
                style={{ 
                  border: selectedRole === role.id ? '2px solid #FFB81C' : '1px solid #e2e8f0',
                  backgroundColor: selectedRole === role.id ? '#FFFBEB' : (isAvailable ? 'white' : '#F8FAFC')
                }}
              >
                <div className="sp-card-header">
                  <h3 className="sp-role-title">{role.title}</h3>
                  {!isAvailable && <span className="sp-badge-closed">Not Accepting Applicants</span>}
                </div>
                <p className="sp-role-desc">{role.desc}</p>
              </div>
            );
          })}
        </div>
        
        {/* Next Button is Explicit here based on your previous code snippet */}
        <button 
          className="af-next-btn" 
          onClick={handleNext}
          disabled={!selectedRole}
          style={{ 
            opacity: selectedRole ? 1 : 0.5, 
            cursor: selectedRole ? 'pointer' : 'not-allowed',
            marginTop: '40px' 
          }}
        >
          Next: View Role Details →
        </button>
      </div>
    </div>
  );
};

export default SelectPosition;