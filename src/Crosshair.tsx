import React from 'react';

interface CrosshairProps {
  size?: number;
  color?: string;
  thickness?: number;
}

const Crosshair: React.FC<CrosshairProps> = ({ 
  size = 20, 
  color = '#ffffff', 
  thickness = 2 
}) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 1000,
      }}
    >
      {/* Horizontal line */}
      <div
        style={{
          position: 'absolute',
          width: size,
          height: thickness,
          backgroundColor: color,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          boxShadow: `0 0 4px rgba(0,0,0,0.8)`,
        }}
      />
      
      {/* Vertical line */}
      <div
        style={{
          position: 'absolute',
          width: thickness,
          height: size,
          backgroundColor: color,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          boxShadow: `0 0 4px rgba(0,0,0,0.8)`,
        }}
      />
      
      {/* Center dot */}
      <div
        style={{
          position: 'absolute',
          width: 4,
          height: 4,
          backgroundColor: color,
          borderRadius: '50%',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          boxShadow: `0 0 4px rgba(0,0,0,0.8)`,
        }}
      />
      
      {/* Outer ring */}
      <div
        style={{
          position: 'absolute',
          width: size * 1.5,
          height: size * 1.5,
          border: `1px solid ${color}`,
          borderRadius: '50%',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.6,
          boxShadow: `0 0 4px rgba(0,0,0,0.8)`,
        }}
      />
    </div>
  );
};

export default Crosshair;