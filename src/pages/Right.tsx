import React from 'react'
import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Work } from '@/components/Work'
import { Blog } from '@/components/Blog'

export default function Right() {
  return (
    <div className='Right'>
        <About />
        <Blog />
        <Work />
    </div>
  )
}
