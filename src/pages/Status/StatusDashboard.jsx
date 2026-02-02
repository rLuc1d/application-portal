import React from 'react';
import { Link } from 'react-router-dom';

const StatusDashboard = () => {
  return (
    <div style={{
      minHeight: '100vh',
      padding: '20px',
      background: '#f8fafc'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '30px'
        }}>
          <h1 style={{ color: '#003366' }}>Application Status</h1>
          <Link 
            to="/"
            style={{
              color: '#0066cc',
              textDecoration: 'none'
            }}
          >
            ← Back to Home
          </Link>
        </div>

        <div style={{
          background: 'white',
          padding: '30px',
          borderRadius: '15px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
          marginBottom: '30px'
        }}>
          <h2 style={{ color: '#003366', marginBottom: '20px' }}>Track your recruitment progress</h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginBottom: '30px'
          }}>
            <div>
              <p style={{ color: '#666', fontSize: '14px' }}>Applicant Number</p>
              <p style={{ fontWeight: '600', color: '#333' }}>APP-2026-001234</p>
            </div>
            <div>
              <p style={{ color: '#666', fontSize: '14px' }}>Name</p>
              <p style={{ fontWeight: '600', color: '#333' }}>Juan Dela Cruz</p>
            </div>
            <div>
              <p style={{ color: '#666', fontSize: '14px' }}>Applied</p>
              <p style={{ fontWeight: '600', color: '#333' }}>January 20, 2026</p>
            </div>
          </div>

          <h3 style={{ color: '#003366', marginBottom: '20px' }}>Recruitment Progress</h3>
          
          {/* Progress Timeline */}
          <div style={{
            borderLeft: '3px solid #0066cc',
            paddingLeft: '20px',
            marginLeft: '10px'
          }}>
            {[
              { title: 'Online Application Form', status: 'Approved', date: 'Jan 20, 2026', color: '#10b981' },
              { title: 'Document Review', status: 'In Progress', date: 'Current', color: '#f59e0b' },
              { title: 'Interview', status: 'Pending', date: 'Upcoming', color: '#6b7280' },
              { title: 'Final Decision', status: 'Pending', date: 'Upcoming', color: '#6b7280' }
            ].map((step, index) => (
              <div key={index} style={{ marginBottom: '30px', position: 'relative' }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  background: step.color,
                  borderRadius: '50%',
                  position: 'absolute',
                  left: '-31px',
                  top: '0'
                }} />
                <h4 style={{ color: '#333', marginBottom: '5px' }}>{step.title}</h4>
                <div style={{
                  display: 'flex',
                  gap: '20px',
                  marginBottom: '10px'
                }}>
                  <span style={{
                    background: step.color + '20',
                    color: step.color,
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}>
                    {step.status}
                  </span>
                  <span style={{ color: '#666', fontSize: '14px' }}>{step.date}</span>
                </div>
                {step.status === 'Approved' && (
                  <p style={{
                    background: '#f0f8ff',
                    padding: '10px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    color: '#666'
                  }}>
                    Your application has been reviewed and approved. You will be contacted for the next step.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusDashboard;