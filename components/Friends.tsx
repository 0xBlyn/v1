'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useGameStore } from '@/utils/game-mechaincs'
import { showErrorMessage, showSuccessMessage } from '@/utils/ui'
import copyicon from '@/images/Layer_1.png'
import gradeffect from '@/images/Group 103 (4).png'

interface Referral {
  username: string
  earnings: string
}

export default function Friends() {
  const { userTelegramInitData } = useGameStore()
  const [isLoading, setIsLoading] = useState(false)
  const [buttonText, setButtonText] = useState("Share Story")
  const [referrals, setReferrals] = useState<Referral[]>([])
  const [referralCount, setReferralCount] = useState(0)
  const [isLoadingReferrals, setIsLoadingReferrals] = useState(true)

  const formatNumber = (num: number) => {
    if (num >= 1000000000) return `${(num / 1000000000).toFixed(2)}B`
    if (num >= 1000000) return `${(num / 1000000).toFixed(2)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(2)}K`
    return num.toString()
  }

  const fetchReferrals = useCallback(async () => {
    setIsLoadingReferrals(true)
    try {
      const response = await fetch(`/api/user/referrals?initData=${encodeURIComponent(userTelegramInitData)}`)
      if (!response.ok) {
        throw new Error('Failed to fetch referrals')
      }
      const data = await response.json()
      setReferrals(data.referrals)
      setReferralCount(data.referralCount)
    } catch (error) {
      console.error('Error fetching referrals:', error)
      showErrorMessage('Failed to fetch referrals. Please try again later.')
    } finally {
      setIsLoadingReferrals(false)
    }
  }, [userTelegramInitData])

  useEffect(() => {
    fetchReferrals()
  }, [fetchReferrals])

  const handleInvite = (type: 'regular' | 'premium') => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      toast.success(`Invitation ${type === 'premium' ? 'with Telegram Premium ' : ''}sent!`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
      })
    }, 1000)
  }

  const handleInviteButtonClick = useCallback(() => {
    navigator.clipboard.writeText(`https://t.me/your_bot_username/start?startapp=kentId`)
      .then(() => {
        setButtonText("Link copied")
        showSuccessMessage("Invite link copied to clipboard!")

        setTimeout(() => {
          setButtonText("Share Story")
        }, 2000)
      })
      .catch(err => {
        console.error('Failed to copy text: ', err)
        showErrorMessage("Failed to copy link. Please try again.")
      })
  }, [])

  return (
    <div>
      <div className='flex flex-col items-center w-full pt-7'>
        <h1 className='heading mb-6'>Referrals</h1>
        <div className="balance pages font-['Gill_Sans',sans-serif] text-lg">
          Invite Friends <span className='ml-2'><Image src={copyicon} width={20} height={20} alt='' /> </span>
        </div>
        <button
      className="relative inline-flex items-center justify-center px-5 py-3 min-w-[60%] text-black text-lg font-extrabold font-['Gill_Sans'] leading-[18px] rounded-lg before:absolute before:inset-0 before:rounded-lg before:p-[3px] before:bg-gradient-to-r before:from-[#FFD683] before:to-[#FFB948] before:-z-10 after:absolute after:inset-[3px] after:rounded-[5px] after:bg-gradient-to-r after:from-[#FFB939] after:to-[#FFD683] after:-z-10 shadow-[0px_0px_40px_0px_#FFC36940] hover:opacity-90 transition-opacity my-3" onClick={handleInviteButtonClick}>Share Story</button>
        <h3 className='text-white text-[14px] font-medium text-center'>Share story to earn more Matara<br/> Tokens ($MAT)</h3>
      </div>
        <div className="w-full px-[5%] pt-7">
          <div className="flex justify-between items-center border-b border-gray-600 text-[15px] pb-4 mb-2 px-4">
            <div className="text-white font-semibold">User Name</div>
            <div className="text-white font-semibold">Earnings</div>
          </div>
          <div className="h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
            {isLoadingReferrals ? (
              <div className="space-y-3 animate-pulse">
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="flex justify-between items-center bg-gray-800 p-3 rounded">
                    <div className="h-4 bg-gray-700 rounded w-1/3"></div>
                    <div className="h-4 bg-gray-700 rounded w-1/4"></div>
                  </div>
                ))}
              </div>
            ) : referrals.length > 0 ? (
              <div className="space-y-3">
                {referrals.map((referral, index) => (
                  <div key={index} className="flex justify-between items-center bg-gray-800 p-3 rounded">
                    <div className="text-white">{referral.username}</div>
                    <div className="text-[#f3ba2f]">{referral.earnings}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-400 mt-4">
                You have not invited anyone yet
              </div>
            )}
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
            onClick={fetchReferrals}
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Refresh Referrals
          </button>
        </div>
        <Image className='fixed bottom-0 left-0 right-0 mx-auto' src={gradeffect} width={400} height={100} alt='Gradient effect' />
      </div>
  )
}

