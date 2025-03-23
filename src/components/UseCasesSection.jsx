import React from 'react'
import AIToolCard from './AiToolCard'
import StatsCard from './StatsCard'

const UseCasesSection = () => {
  return (
    <div className='p-10'>
       <p className='text-[26px] text-[#303030] font-semibold mb-4'>Most Popular AIs by Use Cases</p>
       <div className='flex gap-1 w-full'>
         <div className='w-1/5'>
         <ul className="flex flex-col gap-3 text-[#2487CE] font-[400] text-[18px] font-[Calibri] leading-[22px] py-2">
            <li className='text-white bg-[#2487CE] rounded-2xl px-2 py-1 pl-3'>Image & Art Creation</li>
            <li>Content Generation</li>
            <li>Image & Art Creation</li>
            <li>Content Generation</li>
            <li>Image & Art Creation</li>
            <li>Content Generation</li>
            <li>Image & Art Creation</li>
          </ul>
         </div>
         <div className="grid grid-cols-3 gap-6 w-4/5">
            {Array.from({ length: 6 }).map((_, index) => (
                <StatsCard key={index} />
            ))}
            </div>

       </div>
    </div>
  )
}

export default UseCasesSection