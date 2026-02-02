import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { rolesData } from '../../data/RolesData';

function SelectPosition() {
  const [selectedRoleId, setSelectedRoleId] = useState(null);
  const navigate = useNavigate();
  
  // 1. Get branch from URL (e.g., "davao", "Manila")
  const { branch } = useParams();

  // 2. Process Branch Name
  // Default to 'Manila' ONLY if the URL parameter is completely missing
  const currentBranch = branch || 'Manila';
  
  // 3. Create Keys
  const displayBranch = currentBranch.charAt(0).toUpperCase() + currentBranch.slice(1).toLowerCase();
  const branchKey = currentBranch.toLowerCase(); // "manila", "cebu", "davao"

  const handleBack = () => {
    navigate('/apply/branch');
  };

  const handleRoleClick = (roleId, isAvailable) => {
    if (isAvailable) {
      setSelectedRoleId(roleId);
    }
  };

  const handleNext = () => {
    if (selectedRoleId) {
      navigate(`/apply/${currentBranch}/${selectedRoleId}`);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#EBF4FF',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <button 
        onClick={handleBack}
        style={{
          position: 'fixed',
          top: '32px',
          left: '32px',
          background: 'white',
          border: '1px solid #e2e8f0',
          padding: '12px 24px',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontWeight: '700',
          color: '#475569',
          cursor: 'pointer',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}
      >
        ← Back to Branch Selection
      </button>
      
      <div style={{
        background: 'white',
        width: '100%',
        maxWidth: '1100px',
        padding: '48px 64px',
        borderRadius: '40px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.05)'
      }}>
        
        {/* Progress Bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
          <div style={{ flex: 1, height: '8px', background: '#E2E8F0', borderRadius: '4px', marginRight: '20px', overflow: 'hidden' }}>
            <div style={{ width: '20%', height: '100%', background: '#FFB81C', borderRadius: '4px' }}></div>
          </div>
          <span style={{ fontSize: '14px', fontWeight: '600', color: '#64748b' }}>Step 1 of 5</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#1A242F', margin: '0 0 8px 0' }}>
            Select Position
          </h1>
          <p style={{ fontSize: '16px', color: '#64748b', marginBottom: '8px' }}>
            Applying for: <span style={{ color: '#FFB81C', fontWeight: 700 }}>{displayBranch} Branch</span>
          </p>
          <p style={{ fontSize: '16px', color: '#64748b' }}>
            Choose the role you're interested in applying for
          </p>
        </div>
        
        {/* Roles Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '24px',
          marginBottom: '64px'
        }}>
          {Object.values(rolesData).map((role) => {
            // CHECK AVAILABILITY
            // If the branch doesn't exist in the data (e.g. data error), default to FALSE
            const isAvailable = role.isOpen && role.isOpen[branchKey] === true;

            return (
              <div 
                key={role.id}
                onClick={() => handleRoleClick(role.id, isAvailable)}
                style={{
                  background: selectedRoleId === role.id ? '#FFFBEB' : (isAvailable ? 'white' : '#F8FAFC'),
                  border: `2px solid ${selectedRoleId === role.id ? '#FFB81C' : '#e2e8f0'}`,
                  borderRadius: '20px',
                  padding: '32px 28px',
                  cursor: isAvailable ? 'pointer' : 'not-allowed',
                  transition: 'all 0.2s ease',
                  opacity: isAvailable ? 1 : 0.7,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#1A242F', margin: 0, lineHeight: '1.4', flex: 1 }}>
                    {role.title}
                  </h3>
                  
                  {/* Badge */}
                  {!isAvailable && (
                    <span style={{
                      background: '#fee2e2',
                      color: '#ef4444',
                      fontSize: '11px',
                      fontWeight: '700',
                      padding: '4px 8px',
                      borderRadius: '6px',
                      whiteSpace: 'nowrap',
                      marginLeft: '12px'
                    }}>
                      Not Accepting Applicants
                    </span>
                  )}
                </div>

                <p style={{ fontSize: '14px', color: '#64748b', margin: 0, lineHeight: '1.5' }}>
                  {role.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <button 
          onClick={handleNext}
          disabled={!selectedRoleId}
          style={{
            backgroundColor: selectedRoleId ? '#FFB81C' : '#f1f5f9',
            color: selectedRoleId ? '#1A242F' : '#cbd5e1',
            fontSize: '18px',
            fontWeight: 800,
            padding: '18px 48px',
            borderRadius: '16px',
            border: 'none',
            cursor: selectedRoleId ? 'pointer' : 'not-allowed',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            margin: '0 auto',
            transition: 'background-color 0.2s'
          }}
        >
          Next: View Role Details →
        </button>
      </div>
    </div>
  );
}

export default SelectPosition;