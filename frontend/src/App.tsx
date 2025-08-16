import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import { NotFound } from './pages/NotFound';

// Protected Route Component
interface ProtectedRouteProps {
  children: React.ReactNode;
  isAuthenticated: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, isAuthenticated }) => {
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};

function AdvancedApp() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  return (
    <Router>
      <Routes>
        {/* Layout route with nested routes */}
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} /> */}
          
          {/* Products with nested routes */}
          {/* <Route path="products">
            <Route index element={<Products />} />
            <Route path=":productId" element={<ProductDetail />} />
            <Route path="category/:categoryId" element={<Products />} />
          </Route> */}

          {/* Protected routes */}
{/*           <Route 
            path="profile" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="dashboard" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Dashboard />
              </ProtectedRoute>
            } 
          /> */}

          {/* Auth routes */}
          {/* <Route path="login" element={<Login setAuth={setIsAuthenticated} />} /> */}
          
          {/* Redirect old paths */}
          <Route path="old-about" element={<Navigate to="/about" replace />} />
        </Route>

        {/* 404 route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default AdvancedApp;