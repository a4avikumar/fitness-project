import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { Link } from "react-router-dom"

export const Signup = () => {

    const [data, setData] = 
    useState({
        fullName: "",
        username: "",
        password: ""
    })

    const processData = () => {
        console.log({data})
    }

  return (
    <div className="h-screen w-screen flex justify-center items-center">
        <Card className="max-w-sm w-full">
            <CardHeader>
                <CardTitle>
                    Sign Up
                </CardTitle>
                <CardDescription>
                    Get back to Lifting!!
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
                <Label>Full Name</Label>
                <Input 
                value={data.fullName} 
                onChange={(e) => setData(d => ({...d, fullName: e.target.value}))} 
                placeholder='Full Name'/>
                <Label>Username</Label>
                <Input 
                value={data.username} 
                onChange={(e) => setData(d => ({...d, username: e.target.value}))} 
                placeholder='Username'/>
                <Label>Password</Label>
                <Input 
                value={data.password} 
                onChange={(e) => setData(d => ({...d, password: e.target.value}))}
                type='password' />            
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
                <Button onClick={processData} className="w-full">Sign up</Button>
                <div className="flex gap-2 items-center">
                    <p className="text-sm text-muted-foreground">Already have an account?</p>
                    <Link className="hover:text-blue-400 underline" to={"/Login"}>Login.</Link>
                </div>
            </CardFooter>
        </Card>
    </div>
  )
}
