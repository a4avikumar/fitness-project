import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from '@/components/ui/avatar'
import { loginUser, logoutUser, signupUser } from '@/lib/DB/makeUser'
import { clearDB, getDB } from '@/lib/DB/initDB'
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {

    const navigate = useNavigate();

    const DB = getDB()

    return (
        <>
            <header className="flex sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 maxW-screen-2xl items-center">
                    <a class="mr-6 flex items-center space-x-2" href="/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="h-6 w-6"><rect width="256" height="256" fill="none"></rect><line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line></svg><span class="hidden font-bold sm:inline-block">F-i-t-X</span></a>
                    <nav class="flex items-center gap-4 text-sm lg:gap-6">
                        <Link class="transition-colors hover:text-foreground/80 text-foreground" to="/home">Home</Link>
                        <Link to='/Fitnotes' class="transition-colors hover:text-foreground/80 text-foreground/60">FitNotes</Link>
                        {/* <Link to='/Login_page' class="transition-colors hover:text-foreground/80 text-foreground/60" >Login</Link> */}
                        {/* <Link to='/Sign_page' class="transition-colors hover:text-foreground/80 text-foreground/60" >Signup</Link> */}
                        <Link to='/FormCheck' class="transition-colors hover:text-foreground/80 text-foreground/60" href="">Form Check</Link>
                    </nav>
                </div>
                <div className='flex gap-2 items-center'>
                    <Avatar className="m-2 mr-5">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>PF</AvatarFallback>
                    </Avatar>
                    <Button variant="outline" onClick={() => {
                        logoutUser();
                        navigate('/Login_page');
                    }}>
                        Logout
                    </Button>
                </div>
            </header>
        </>
    )
}
