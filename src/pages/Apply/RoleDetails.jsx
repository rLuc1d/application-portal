import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { rolesData } from '../../data/RolesData';

// Component para sa Blue Checkmark Icon
const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ minWidth: '20px', marginTop: '2px' }}>
    <circle cx="12" cy="12" r="10" stroke="#4A90E2" strokeWidth="2" />
    <path d="M8 12L11 15L16 9" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const RoleDetails = () => {
  const navigate = useNavigate();
  // Kinukuha natin ang branch at roleId galing sa URL
  const { branch, roleId } = useParams();
  
  // Hinahanap ang details ng role sa ating database file
  const role = rolesData[roleId];

  // Capitalize branch name para maganda tignan
  const displayBranch = branch ? branch.charAt(0).toUpperCase() + branch.slice(1) : 'Manila';

  // Safety Check: Kung walang role na mahanap (o mali ang URL), bumalik sa selection
  if (!role) {
    return (
      <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <h2>Role not found</h2>
        <button onClick={() => navigate('/apply/branch')} style={{ padding: '10px 20px', marginTop: '20px', cursor: 'pointer' }}>
          Go Back
        </button>
      </div>
    );
  }

  const handleBack = () => {
    navigate(`/apply/${branch}`);
  };

  const handleProceed = () => {
    // Pupunta na sa Application Form (Step 3)
    navigate(`/apply/${branch}/${roleId}/form`);
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
      {/* Back Button */}
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
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          zIndex: 100
        }}
      >
        ← Back to Role Selection
      </button>

      {/* Main Content Card */}
      <div style={{
        background: 'white',
        width: '100%',
        maxWidth: '900px', 
        borderRadius: '40px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.05)',
        overflow: 'hidden',
        position: 'relative'
      }}>
        
        {/* Header & Progress Bar */}
        <div style={{ padding: '48px 48px 24px 48px' }}>
          
          {/* Progress Bar Container */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
            <div style={{ flex: 1, height: '8px', background: '#E2E8F0', borderRadius: '4px', marginRight: '20px', overflow: 'hidden' }}>
              {/* Step 2 is 40% Width */}
              <div style={{ width: '40%', height: '100%', background: '#FFB81C', borderRadius: '4px' }}></div>
            </div>
            <span style={{ fontSize: '14px', fontWeight: '600', color: '#64748b' }}>Step 2 of 5</span>
          </div>

          {/* Role Title */}
          <h1 style={{ fontSize: '36px', fontWeight: 800, color: '#1A242F', margin: '0 0 16px 0', lineHeight: '1.2' }}>
            {role.title}
          </h1>
          <p style={{ fontSize: '16px', color: '#64748b', marginTop: '0', lineHeight: '1.6' }}>
            {role.description}
          </p>
        </div>

        {/* Scrollable List Sections */}
        <div style={{ padding: '0 48px 48px 48px' }}>
          
          {/* Section: Key Responsibilities */}
          {role.responsibilities && role.responsibilities.length > 0 && (
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1A242F', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#FFB81C' }}>•</span> Key Responsibilities
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {role.responsibilities.map((item, index) => (
                  <li key={index} style={{ display: 'flex', gap: '12px', marginBottom: '12px', fontSize: '15px', color: '#475569', lineHeight: '1.6' }}>
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Section: Qualifications */}
          {role.qualifications && role.qualifications.length > 0 && (
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1A242F', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#FFB81C' }}>•</span> Qualifications
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {role.qualifications.map((item, index) => (
                  <li key={index} style={{ display: 'flex', gap: '12px', marginBottom: '12px', fontSize: '15px', color: '#475569', lineHeight: '1.6' }}>
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Section: Benefits */}
          {role.benefits && role.benefits.length > 0 && (
            <div style={{ marginBottom: '48px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1A242F', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#FFB81C' }}>•</span> Benefits & Perks
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {role.benefits.map((item, index) => (
                  <li key={index} style={{ display: 'flex', gap: '12px', marginBottom: '12px', fontSize: '15px', color: '#475569', lineHeight: '1.6' }}>
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Footer Button */}
          <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '32px' }}>
            <button 
              onClick={handleProceed}
              style={{
                backgroundColor: '#FFB81C',
                color: '#1A242F',
                fontSize: '16px',
                fontWeight: 800,
                padding: '18px 32px',
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                width: '100%',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e6a518'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#FFB81C'}
            >
              Proceed to Application Form <span>→</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RoleDetails;