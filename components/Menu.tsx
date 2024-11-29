'use client'

import Link from 'next/link'
import User from '@/images/Layer_2.png'
import Award from '@/images/Layer_1 (1).png'
import FileText from '@/images/Layer_2 (1).png'
import MessageCircle from '@/images/Frame.png'
import HelpCircle from '@/images/Layer_2 (2).png'

interface MenuProps {
  isOpen: boolean
  onClose: () => void
}

export function Menu({ isOpen, onClose }: MenuProps) {
  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-[999999]"
      onClick={onClose}
    >
      <div 
        className="absolute top-16 right-4 w-50 p-4 z-50"
        style={{
          background: 'linear-gradient(338.21deg, #000F15 46.74%, #02354C 120.56%)',
          border: '3px solid transparent',
          borderImage: 'linear-gradient(92.78deg, #000F15 12.41%, #02354C 81.56%) 1',
          borderRadius: '5px'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <nav className="flex flex-col space-y-1">
          {[
            { href: '/profile', label: 'User Profile', icon: User },
            { href: '/ranks', label: 'Matara Ranks', icon: Award },
            { href: '/docs', label: 'Documentation', icon: FileText },
            { href: '/channel', label: 'Our TG Channel', icon: MessageCircle },
            { href: '/faq', label: 'FAQ', icon: HelpCircle },
          ].map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors hover:bg-white/5"
            >
              <img 
                src={icon.src}
                alt={label}
                className="w-6 h-6"
              />
              <span 
                className="font-['Montserrat'] text-base font-normal text-left bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(0deg, #8F7C64 0%, #FAEBD4 100%)',
                }}
              >
                {label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

