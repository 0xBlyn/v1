'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import copyicon from '@/images/Group 116.png'
// import Hamster from '@/icons/Hamster';
// import Settings from '@/icons/Settings';
// import { binanceLogo } from '@/images';
// import IceCubes from '@/icons/IceCubes';
import { calculateMineUpgradeCost, calculateProfitPerHour, useGameStore } from '@/utils/game-mechaincs';
// import Snowflake from '@/icons/Snowflake';
// import TopInfoSection from '@/components/TopInfoSection';
// import { mineUpgradeBaseBenefit, mineUpgradeBasePrice, mineUpgradeBenefitCoefficient, mineUpgradeCostCoefficient } from '@/utils/consts';
import { formatNumber, showErrorMessage, showSuccessMessage } from '@/utils/ui';
import TopInfoSection from './TopInfoSection';

export default function Mine() {
    const {
        userTelegramInitData,
        pointsBalance,
        profitPerHour,
        mineLevelIndex,
        upgradeMineLevelIndex
    } = useGameStore();
    const [isLoading, setIsLoading] = useState(false);

    const upgradeCost = calculateMineUpgradeCost(mineLevelIndex);
    const upgradeIncrease = calculateProfitPerHour(mineLevelIndex + 1) - calculateProfitPerHour(mineLevelIndex);

    const handleUpgrade = async () => {
        if (pointsBalance >= upgradeCost && !isLoading) {
            setIsLoading(true);
            try {
                const response = await fetch('/api/upgrade/mine', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        initData: userTelegramInitData,
                    }),
                });

                if (!response.ok) {
                    throw new Error('Failed to upgrade mine');
                }

                const result = await response.json();

                console.log("Result from server:", result);

                // Update local state with the new values
                upgradeMineLevelIndex();

                showSuccessMessage('Mine Upgrade Successful!');
            } catch (error) {
                console.error('Error upgrading mine:', error);
                showErrorMessage('Failed to upgrade mine. Please try again.');
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <div>
            <TopInfoSection />
            <div className="flex flex-col justify-center top-20 fixed">
            <div className='flex flex-col items-center w-full pt-7'>
                <h1 className='heading mb-4'>Ranking</h1>
                <h3 className='text-white text-[14px] font-medium text-center max-w-[70%]'>Strive to be among Top 100,000 members to be eligible for Matara Community Airdrop.</h3>
                <Link href="/ranks">
                    <div className="balance pages mt-4">
                     See all Ranks <span className='ml-2'><Image src={copyicon} width={50} height={20} alt='' /> </span>
                    </div>
                </Link>
            </div>
            <div className="w-full px-[5%] flex items-center justify-center flex-col pt-[8%]">
                <div className="grid grid-cols-3 gap-14 w-full mb-2 text-left border-gradient pb-3">
                <div className="headtext">User Name</div>
                <div className="headtext">Rank</div>
                <div className="headtext">Earnings</div>
            </div>
            <div className="text-center text-gray-400 mt-4">
                No active users yet
              </div>
        </div>
        </div>
        </div>
        
    );
}            
                                
                            
                                {/* <p>Current ice per hour:</p>
                                <p className="text-[#f3ba2f]">{formatNumber(profitPerHour)}</p>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <p>Upgrade cost:</p>
                                <p className="text-[#f3ba2f]">{formatNumber(upgradeCost)}</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p>Ice per hour increase:</p>
                                <p className="text-[#f3ba2f]">+{formatNumber(upgradeIncrease)}</p>
                            </div>
                        </div>

                        <button
                            onClick={handleUpgrade}
                            disabled={pointsBalance < upgradeCost || isLoading}
                            className={`w-full mt-6 py-3 rounded-lg text-center text-white font-bold ${pointsBalance >= upgradeCost && !isLoading ? 'bg-[#f3ba2f]' : 'bg-gray-500 cursor-not-allowed'
                                } relative`}
                        >
                            {isLoading ? (
                                <div className="flex justify-center items-center">
                                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                                </div>
                            ) : (
                                'Upgrade'
                            )}
                        </button>
                    </div>
                </div>
            </div> */}
