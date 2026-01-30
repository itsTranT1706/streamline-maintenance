import React from 'react';
import { MaintenanceScreen } from './components/MaintenanceScreen';
import { BackgroundDecoration } from './components/BackgroundDecoration';

const App: React.FC = () => {
  return (
    <main className="relative w-screen h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden selection:bg-netflix-red selection:text-white">
      <BackgroundDecoration />
      
      {/* Top Left: System Status - Red accent */}
      <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20 hidden md:block">
        <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 tracking-widest uppercase">
          <span className="w-2 h-2 bg-netflix-red rounded-full animate-pulse shadow-[0_0_10px_#E50914]"></span>
          System_State: Offline
        </div>
      </div>

      {/* Top Right: Version */}
      <div className="absolute top-6 right-6 md:top-8 md:right-8 z-20 hidden md:block">
        <div className="font-mono text-xs text-neutral-600">
          PHEPHIM_V1.0.BETA
        </div>
      </div>

      {/* Main Content */}
      <div className="z-10 w-full px-6 relative flex flex-col items-center">
        <MaintenanceScreen />
      </div>

      {/* Bottom Right: Error Code */}
      <footer className="absolute bottom-6 w-full text-center z-20 pointer-events-none">
         <p className="font-mono text-[10px] md:text-xs text-neutral-600 uppercase tracking-widest">
           Error_Code: ID-10-T // Dev_Team_Is_Crying
         </p>
      </footer>
    </main>
  );
};

export default App;