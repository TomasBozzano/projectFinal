import React from 'react'
import { NavBar } from '../home/components'

export function NotFoundPage() {
  return (
    <>
      <NavBar />
      <section className="p-10">
        <div className='m-auto flex justify-center items-center size-72 rounded font-bold text-3xl border border-gray-500 shadow-lg'>404 - not Found</div>
      </section>
    </>
  )
}
