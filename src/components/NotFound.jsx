import React from 'react';

const NotFound = () => (
   <div
      className="page not-found"
      style={{
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',
         justifyContent: 'center',
         minHeight: '60vh',
         background: '#f8f9fa',
         color: '#333',
         fontFamily: 'Segoe UI, Arial, sans-serif',
      }}
   >
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#d32f2f' }}>
         404 - Not Found
      </h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
         The page you are looking for does not exist.
      </p>

      <button type="button" onClick={() => window.location.href = '/'} className="btn btn-primary" id='home-button'>Home</button>
   </div>
);

export default NotFound;