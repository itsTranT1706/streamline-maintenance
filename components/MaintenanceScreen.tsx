import React, { useState } from 'react';
import { RefreshCcw, AlertOctagon, Laugh } from 'lucide-react';
import { Logo } from './Logo';

const DEFAULT_GIF = "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"; // Cat typing

// Danh sách các GIF dùng để troll
const TROLL_GIFS = [
  "https://media.giphy.com/media/Ju7l5y9osyymQ/giphy.gif", // Rick Roll
  "https://media.giphy.com/media/ltIFdjNAasOwVvKhhv/giphy.gif", // Laughing hard
  "https://media.giphy.com/media/13d2jHlSlxklVe/giphy.gif", // Train crash / chaos
  "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif", // Back to cat (rare chance)
  "https://media.giphy.com/media/10yXFkBJ0MwGQ0/giphy.gif", // Computer smash
];

export const MaintenanceScreen: React.FC = () => {
  const [currentGif, setCurrentGif] = useState(DEFAULT_GIF);
  const [trollCount, setTrollCount] = useState(0);
  const [isTrolling, setIsTrolling] = useState(false);

  const handleTrollClick = () => {
    // Tăng đếm số lần bấm
    const newCount = trollCount + 1;
    setTrollCount(newCount);
    setIsTrolling(true);

    // Chọn ngẫu nhiên một GIF khác GIF hiện tại
    let randomGif;
    do {
      randomGif = TROLL_GIFS[Math.floor(Math.random() * TROLL_GIFS.length)];
    } while (randomGif === currentGif && TROLL_GIFS.length > 1);

    setCurrentGif(randomGif);
  };

  return (
    <div className="flex flex-col items-center text-center max-w-4xl mx-auto w-full">
      <Logo />
      
      {/* Main Layout: Split or Stacked */}
      <div className="w-full flex flex-col md:flex-row items-center gap-10 md:gap-16">
        
        {/* Left: Content/Typography */}
        <div className="flex-1 text-left order-2 md:order-1">
            <div className={`inline-flex items-center gap-2 mb-4 px-3 py-1 border rounded-sm transition-colors duration-300 ${isTrolling ? 'bg-yellow-500/20 border-yellow-500' : 'bg-neutral-800/50 border-neutral-700'}`}>
                {isTrolling ? <Laugh className="w-3.5 h-3.5 text-yellow-500" /> : <AlertOctagon className="w-3.5 h-3.5 text-netflix-red" />}
                <span className={`text-[10px] md:text-xs font-bold uppercase tracking-widest ${isTrolling ? 'text-yellow-500' : 'text-neutral-300'}`}>
                    {isTrolling ? 'Bạn tin người vkl' : 'Sự cố kỹ thuật'}
                </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-[1.1]">
                {isTrolling ? (
                    <span>
                         Không có chuyện <br />
                         <span className="text-yellow-500">nó chạy đâu!</span>
                    </span>
                ) : (
                    <span>
                        Toang rồi <br />
                        <span className="text-netflix-red">ông giáo ạ!</span>
                    </span>
                )}
            </h1>

            <p className="text-lg md:text-xl text-neutral-300 font-normal mb-6 leading-relaxed">
                {isTrolling 
                    ? `Bạn đã thử bấm ${trollCount} lần. Kết quả vẫn thế thôi. Hãy đi pha mì gói đi.`
                    : "Mấy chú hamster chạy server đang đình công đòi tăng lương. Chúng tôi đang thương lượng gắt gao."
                }
            </p>
            
            <p className="text-sm text-neutral-500 font-mono mb-8 border-l-2 border-netflix-red pl-3 italic">
                {isTrolling 
                    ? `"User_Action: Tried_F5_${trollCount}_Times // Result: Hopeless"`
                    : `"System_Error: Hamster_Wheel_Broken"`
                }
            </p>

            <button 
                className={`group w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 text-white text-base md:text-lg font-bold rounded-md transition-all duration-300 active:scale-95 shadow-lg ${
                    isTrolling 
                    ? 'bg-neutral-700 hover:bg-neutral-600 cursor-help' 
                    : 'bg-netflix-red hover:bg-netflix-dark shadow-[0_4px_20px_rgba(229,9,20,0.4)]'
                }`}
                onClick={handleTrollClick}
            >
                <span>{isTrolling ? 'Vẫn cố bấm tiếp?' : 'Thử F5 nhân phẩm'}</span>
                <RefreshCcw className={`w-5 h-5 transition-transform duration-700 ${isTrolling ? 'group-hover:rotate-[360deg]' : 'group-hover:rotate-180'}`} />
            </button>
        </div>

        {/* Right: Visual/GIF */}
        <div className="flex-1 w-full max-w-md order-1 md:order-2 relative group">
            {/* Glow effect changes color when trolling */}
            <div className={`absolute -inset-1 bg-gradient-to-tr rounded-lg blur-xl opacity-40 group-hover:opacity-60 transition duration-1000 ${isTrolling ? 'from-yellow-500 to-orange-500' : 'from-netflix-red to-black'}`}></div>
            
            <div className="relative rounded-lg overflow-hidden border-2 border-neutral-800 bg-neutral-900 shadow-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500">
                {/* Netflix-style overlay gradient on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                
                <img 
                src={currentGif}
                alt="Status GIF"
                className="w-full aspect-video object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                />
                
                {/* "NETFLIX" style badge on image */}
                <div className="absolute top-3 left-3 z-20">
                     <div className="flex flex-col">
                        <span className="text-[8px] font-black text-white tracking-widest drop-shadow-md">NETFLIX SERIES</span>
                        <span className={`text-xs font-bold tracking-tighter drop-shadow-md ${isTrolling ? 'text-yellow-400' : 'text-white'}`}>
                            {isTrolling ? 'JUST_KIDDING' : 'OFFLINE'}
                        </span>
                     </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};