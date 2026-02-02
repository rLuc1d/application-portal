import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Central = lazy(() => import('./pages/Company/Central'));
const ApplyLanding = lazy(() => import('./pages/Apply/ApplyLanding'));
const SelectBranch = lazy(() => import('./pages/Apply/SelectBranch'));
const SelectPosition = lazy(() => import('./pages/Apply/SelectPosition'));
const ApplicationForm = lazy(() => import('./pages/Apply/ApplicationForm'));
const Confirmation = lazy(() => import('./pages/Apply/Confirmation'));
const Success = lazy(() => import('./pages/Apply/Success'));
const RoleDetails = lazy(() => import('./pages/Apply/RoleDetails'));
const StatusDashboard = lazy(() => import('./pages/Status/StatusDashboard')); // Add this

function App() {
  return (
    <Router>
      <Suspense fallback={<div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Central />} />
          <Route path="/apply" element={<ApplyLanding />} />
          <Route path="/apply/branch" element={<SelectBranch />} />
          <Route path="/apply/:branch" element={<SelectPosition />} />
          <Route path="/apply/select-position" element={<Navigate to="/apply/Manila" replace />} />
          <Route path="/apply/:branch/:roleId" element={<RoleDetails />} />
          <Route path="/apply/:branch/:roleId/form" element={<ApplicationForm />} />
          <Route path="/apply/form" element={<ApplicationForm />} />
          <Route path="/apply/confirmation" element={<Confirmation />} />
          <Route path="/apply/success" element={<Success />} />
          
          {/* Add this status route */}
          <Route path="/status/dashboard" element={<StatusDashboard />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;