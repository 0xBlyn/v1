"use client"

import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';
import { IconProps } from '@/utils/types';
import circlelion from '@/images/Group 103.png';

type NavItem = {
    name: string;
    icon?: FC<IconProps> | null;
    image?: StaticImageData | null;
    view: string;
};

const navItems: NavItem[] = [
    { name: 'Ref', view: 'friends' },
    { name: 'Rank', view: 'mine' },
    { name: 'Tasks', view: 'earn' },
    { name: 'Game', view: 'game' },
];

interface NavigationProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

export default function Navigation({ currentView, setCurrentView }: NavigationProps) {
    const handleViewChange = (view: string) => {
        if (typeof setCurrentView === 'function') {
            setCurrentView(view);
        }
    };

    return (
        <div className="fixed z-50 lg:max-w-[300px] bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-full flex justify-around items-center rounded-3xl text-xs">
            <div className='-mt-[22%] -ml-[1.5%] absolute flex w-full justify-center'>
                <Image className='z-[999999]' src={circlelion} width={130} height={50} alt='' />
            </div>
            {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleViewChange(item.view)}
                  className={`footer-btn flex-[0.245] ${currentView === item.view ? 'active' : ''}`}
                >
                    <div className={`flex flex-col items-center justify-center h-16`}>
                        <p className="mt-1 nav-text">{item.name}</p>
                    </div>
                </button>
            ))}
        </div>
    );
}