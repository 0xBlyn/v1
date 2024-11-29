'use client'

import { useState } from 'react'
import Image from 'next/image'
import ArrowDown from '@/images/+Layer 1.png'

interface EarningEntry {
  type: 'repost' | 'referral'
  amount: number
}

export default function Profile() {
  const [earnings, setEarnings] = useState<EarningEntry[]>([
    { type: 'repost', amount: 0.02 },
    { type: 'repost', amount: 0.02 },
    { type: 'referral', amount: 2.5 },
    { type: 'referral', amount: 2.5 },
    { type: 'referral', amount: 2.5 },
    { type: 'repost', amount: 0.02 },
    { type: 'referral', amount: 2.5 },
    { type: 'repost', amount: 0.02 },
    { type: 'repost', amount: 0.02 },
    { type: 'referral', amount: 2.5 },
  ])

  return (
    <div className="bg-[#000F15] min-h-screen p-4 text-white">
      {/* Profile Header */}
      <div className="flex items-start gap-3 mb-6">
        <Image
          src="/placeholder.svg"
          alt="Profile"
          width={48}
          height={48}
          className="rounded-full"
        />
        <div className="flex-1">
          <h1 className="text-xl font-bold mb-1">Chris John</h1>
          <p className="text-gray-400 text-sm">@thechrisjohn</p>
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-2 mb-8">
        <div className="flex items-center gap-2 bg-[#0A1F2C] rounded-full px-4 py-1.5">
          <span className="text-sm font-medium">2,500 $MAT</span>
          <Image src={ArrowDown} width={30} height={30} alt="" />
        </div>
        <div className="bg-[#0A1F2C] rounded-full px-4 py-1.5">
          <span className="text-sm font-medium">WARRIOR</span>
        </div>
      </div>

      {/* Earnings List */}
      <div className="bg-[#0A1F2C] rounded-xl p-4">
        <h2 className="text-[#FFB948] font-semibold mb-4">My Earnings</h2>
        <div className="grid grid-cols-2 gap-4 text-sm mb-3">
          <div className="text-gray-400">Task Details</div>
          <div className="text-gray-400 text-right">Earnings</div>
        </div>
        <div className="space-y-3">
          {earnings.map((entry, index) => (
            <div key={index} className="grid grid-cols-2 gap-4 text-sm">
              <div>
                {entry.type === 'repost' 
                  ? 'Completed X Repost Task'
                  : 'New Referral'
                }
              </div>
              <div className="text-right">
                <span className="text-[#44F58E]">
                  {entry.type === 'referral' ? '+' : ''}
                  {entry.amount} $MAT
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

