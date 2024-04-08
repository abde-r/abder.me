import React from 'react'
import { About } from '@/components/About'
import { Work } from '@/components/Work'
import { Writings } from '@/components/Writings'

export default function Right() {
  return (
    <div className='w-[50%] items-center overflow-y-auto'>
        <About />
        <Work />
        <Writings />
    </div>
  )
}
