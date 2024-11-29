'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { mainCharacter } from '@/images';
import Lion from '@/icons/Lion';

interface LoadingProps {
  setIsInitialized: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentView: (view: string) => void;
}

export default function Loading({ setIsInitialized, setCurrentView }: LoadingProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to transition to the game after 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
      setCurrentView('game'); // Transition to the game view
      setIsInitialized(true); // Mark initialization as complete
    }, 2000); // 2000 milliseconds = 2 seconds

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, [setCurrentView, setIsInitialized]);

  return (
    <div 
    className="flex justify-center items-center h-screen"
    >
      <div className="flex justify-center w-full items-center h-screen">
        <div className="w-full max-w-xl text-white flex flex-col items-center">
          <div className="w-64 h-64 rounded-full circle-outer p-2 mb-8">
            <div className="w-full h-full rounded-full circle-inner overflow-hidden relative">
              <Image
                src={mainCharacter}
                alt="Main Character"
                fill
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                  transform: 'scale(1.25) translateY(10%)'
                }}
              />
            </div>
          </div>
          <h1 className="text-3xl font-['Gill_Sans',sans-serif] pb-4 font-bold">Loading{" "}<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD683] to-[#FFB948]">Matara</span>
        </h1>
          <div className="flex items-center space-x-2">
            <Lion className="w-8 h-8 animate-pulse" />
            <Lion className="w-8 h-8 animate-pulse delay-100" />
            <Lion className="w-8 h-8 animate-pulse delay-200" />
          </div>
        </div>
     </div>
    </div>
  );
}