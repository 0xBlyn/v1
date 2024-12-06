'use client'

import { useState } from 'react'
import { useGameStore } from "@/utils/game-mechaincs"
import badge from '@/images/+Layer 1.png'
import dehaze from '@/images/Frame 2191 (1).png'
import Link from "next/link"
import Image from "next/image"
import { Menu } from './Menu'

export default function TopInfoSection() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { matAmount, userTelegramName, profitPerHour } = useGameStore()

    return (
        <>
            <div className="px-4 fixed top-0 min-w-full lg:max-w-[500px] flex mt-4 justify-between items-center">
                <div className="flex items-center">
                    <Link href='/clicker'>
                        <Image src={badge} width={40} height={40} alt='Badge' />
                    </Link>
                    <span>
                        {userTelegramName}
                    </span>
                    <div className="balance ml-[5%]">
                        {matAmount.toFixed(3)}<span className="ml-1">$MAT</span>
                    </div>
                </div>
                <div className="flex">
                    <button className="connect-btn text-black rounded-sm mr-2">connect</button>
                    <button onClick={() => setIsMenuOpen(true)}>
                        <Image src={dehaze} alt="Menu" height={50} width={40} />
                    </button>
                </div>
            </div>
            <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    )
}

