import React from 'react';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-start mb-10 w-full max-w-4xl">
      {/* Netflix style wordmark: Bold, Red, Uppercase */}
      <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-netflix-red uppercase drop-shadow-lg transform -skew-x-6">
        PHEPHIM
      </h1>
    </div>
  );
};