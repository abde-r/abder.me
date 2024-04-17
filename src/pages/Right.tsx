import React from 'react'
import { Writings } from '@/components/Writings'

export default function Right() {
  return (
    <div className='flex w-[50%] h-[100%] items-center max-md:w-[98%] max-md:flex-col max-md:pb-20'>
        <h5 className="text-secondary items-start m-5 mt-10 font-fira font-semibold underline text-sm md:hidden">Writings</h5>
        <div className='w-[70%] h-[40%] max-h-[40vh] overflow-y-auto'>
          <Writings />
        </div>
    </div>
  )
}
