import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Work } from '@/components/Work'
import React from 'react'

export default function Right() {
  return (
    <div className='Right'>
      <About />
      <Work />
      <Contact />
    </div>
  )
}
