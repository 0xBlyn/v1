'use client'

import React from 'react';
import Image from 'next/image';
import lionImage from '@/images/+Layer 1.png';

interface LionProps {
  className?: string; // Optional className prop
}

const Lion: React.FC<LionProps> = ({ className }) => {
  return (
    <Image
      src={lionImage}
      alt="Lion Icon"
      width={24} // Set appropriate width
      height={24} // Set appropriate height
      className={className} // Apply any additional classes
    />
  );
};

export default Lion;