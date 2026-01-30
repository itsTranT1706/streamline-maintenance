import React from 'react';

export const BackgroundDecoration: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Pure Black Base */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Subtle Grid - Very faint */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.07] bg-grid"></div>

      {/* Red Spotlight Effect - Top Center (Cinematic Light) */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-gradient-to-b from-netflix-red/20 to-transparent blur-[120px]"></div>
      
      {/* Bottom vignette */}
      <div className="absolute bottom-0 left-0 w-full h-[40vh] bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
    </div>
  );
};