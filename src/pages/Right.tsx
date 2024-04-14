import React from 'react'
import { About } from '@/components/About'
import { Work } from '@/components/Work'
import { Writings } from '@/components/Writings'

export default function Right() {
  return (
    <div className='w-[50%] max-md:w-[98%] items-center overflow-y-auto'>
        {/* <About /> */}
        {/* <Work /> */}
        <h5 className="text-gray-400 align-start mx-5 font-fira font-semibold underline text-sm md:hidden">Writings</h5>

        <Writings />
    </div>
  )
}
