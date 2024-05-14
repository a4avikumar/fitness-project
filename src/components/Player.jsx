import React from 'react'
import YouTube from 'react-youtube'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'

export const ExcersizeCard = ({src, name, description}) => {

    return (
  <Card className="w-[19.5rem] rounded-sm p-4 flex flex-col gap-2 transition duration-300 ease-in-out transform hover:bg-neutral-900">
  <div className="max-w-xs overflow-hidden relative text-white rounded-lg group">
    {/* Video */}
    <div className="relative">
    <img src={src} alt="gif " />
    </div>
    
    {/* Exercise Info */}
    <div className="p-2">
      <h3 className="text-xl  text-orange-500 font-semibold mb-2">{name}</h3>
      <p className="text-brown h-16">{`${description}`}</p>
    </div>
    
    <a className='hidden hover:scale-105 hover:underline absolute bottom-0 right-0 w-fit justify-end group-hover:flex gap-0.5 cursor-pointer'>
      Fitnotes
    <svg className='size-6 text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-double-right</title><path d="M5.59,7.41L7,6L13,12L7,18L5.59,16.59L10.17,12L5.59,7.41M11.59,7.41L13,6L19,12L13,18L11.59,16.59L16.17,12L11.59,7.41Z" fill='currentColor'/></svg>
    </a>
  </div>
</Card>

    )
}
