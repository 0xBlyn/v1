"use client"

// import IceCubes from "@/icons/IceCubes";
// import Settings from "@/icons/Settings";
// import Snowflake from "@/icons/Snowflake";
import { useGameStore } from "@/utils/game-mechaincs";
// import { formatNumber } from "@/utils/ui";
import badge from '@/images/+Layer 1.png'
import dehaze from '@/images/Frame 2191 (1).png'
import Link from "next/link";
import Image from "next/image";

export default function TopInfoSection() {

    const { matAmount } = useGameStore();

    const {
        userTelegramName,
        profitPerHour
      } = useGameStore();

    return (
        <div className="px-4 lg:max-w-[500px] flex mt-4 justify-between items-center">
            <div className="flex items-center">
                <Link href='/clicker'>
                    <Image src={badge} width={40} height={40} alt='' />
                </Link>
                <div className="balance ml-[5%]">
                    {matAmount.toFixed(3)}<span className="ml-1">$MAT</span>
                </div>
            </div>
            <div className="flex">
                <button className="connect-btn rounded-sm mr-2">connect</button>
                <Image src={dehaze} alt="" height={50} width={40} />
            </div>
        </div>
    );
}