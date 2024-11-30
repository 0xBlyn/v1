'use client'

import { useState } from 'react'
import Image from 'next/image'
import ArrowDown from '@/images/+Layer 1.png'
import TopSection from './TopSection'
import user from '@/images/User.png'
import btn from '@/images/15.png'

interface TaskEntry {
  title: string
  completed: boolean
}

export default function Profile() {
  const [tasks, setTasks] = useState<TaskEntry[]>([
    { title: 'Complete Task 1', completed: true },
    { title: 'Complete Task 2', completed: false },
    { title: 'Complete Task 3', completed: true },
    { title: 'Complete Task 4', completed: true },
    { title: 'Complete Task 5', completed: false },
  ])

  const completedTasksCount = tasks.filter(task => task.completed).length

  return (
    <>
      <TopSection />
      <div className="fixed top-20 min-w-full p-4 text-white flex justify-center flex-col">
      {/* Profile Header */}
      <div className="flex flex-col justify-center items-center pt-3 gap-3 mb-6">
        <Image
          src={user}
          alt="Profile"
          width={270}
          height={300}
        />
        <Image
          src={btn}
          alt="Profile"
          width={300}
          height={300}
          className='mt-2'
        />
        {/* <div className="flex-1">
          <h1 className="text-xl font-bold mb-1">Chris John</h1>
          <p className="text-gray-400 text-sm">@thechrisjohn</p>
        </div> */}
      </div>

      {/* Completed Tasks Count */}
      {/* <div className="flex items-center gap-2 mb-8">
        <div className="flex items-center gap-2 bg-[#0A1F2C] rounded-full px-4 py-1.5">
          <span className="text-sm font-medium">{completedTasksCount} Tasks Completed</span>
          <Image src={ArrowDown} width={30} height={30} alt="" />
        </div>
      </div> */}

      {/* Tasks List */}
      <div className="w-full px-[5%] pt-3">
      <h2 className="text-[#FFB948] pb-3 text-center font-semibold mb-4">My Earnings</h2>
        <div className='flex justify-between items-center border-b border-gray-600 text-[15px] pb-4 mb-2 px-4'>
            <div className="headtext">Task Details</div>
            <div className="headtext">Earnings</div>
        </div>
        <div className="h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
        <div className="text-center text-gray-400 mt-4">
                You have nothing here
        </div>
          {/* {tasks.map((task, index) => (
            <div key={index} className="flex justify-between text-sm">
              <div>{task.title}</div>
              <div className={task.completed ? 'text-[#44F58E]' : 'text-gray-400'}>
                {task.completed ? 'Completed' : 'Pending'}
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
    </>
    
  )
}

