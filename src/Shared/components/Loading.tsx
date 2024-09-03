import React, { useEffect } from 'react';
import 'ldrs'; // Import the ldrs library
import { reuleaux } from 'ldrs';

const Loading: React.FC = () => {
  // Ensure the reuleaux loader is registered
  useEffect(() => {
    reuleaux.register();
  }, []);

  return (
    <div style={containerStyle}>
      <l-reuleaux
        size="60"
        stroke="5"
        stroke-length="0.15"
        bg-opacity="0.2"
        speed="1.2"
        color="#061C2B"
      ></l-reuleaux>
    </div>
  );
};

// Define the styles using React.CSSProperties
const containerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100vw',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 9999,
  backgroundColor: 'rgba(255, 255, 255, 0.2)', // Light, semi-transparent white for glass effect
  backdropFilter: 'blur(10px)', // Blurring effect for glass-like appearance
  WebkitBackdropFilter: 'blur(10px)', // Safari support
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
};

export default Loading;
