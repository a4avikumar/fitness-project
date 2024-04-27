import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import React from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from '@/components/ui/avatar'

export const Home = () => {
    return (
        <>
           <Navbar></Navbar>
           <Button>Testing</Button>
        </>
    )
}
