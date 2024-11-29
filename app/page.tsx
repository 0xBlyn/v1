'use client'

import Image from 'next/image';
import { mainCharacter } from '@/images';
import Lion from '@/icons/Lion';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-[85vh]">
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
        
        <h1 className="font-['Gill_Sans',sans-serif] text-3xl font-bold">Welcome to{" "}<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD683] to-[#FFB948]">Matara</span>
        </h1>
        
        <p className="text-base mb-6">The game is on the <Link href="/clicker" className="underline">Clicker</Link> page.</p>
        
        <div className="flex items-center space-x-2">
          <Lion className="w-8 h-8 animate-pulse" />
          <Lion className="w-8 h-8 animate-pulse delay-100" />
          <Lion className="w-8 h-8 animate-pulse delay-200" />
        </div>
      </div>
    </div>
  );
}
