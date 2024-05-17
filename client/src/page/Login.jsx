import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from './api';

export const Login = () => {

    const [data, setData] = 
    useState({
        username: "",
        password: ""
    })

    const navigate = useNavigate(); // to redirect after successful login

    const processData = async () => {
        try {
            const result = await loginUser({
                username: data.username,
                password: data.password
            });

            if (result.message === 'Login successful') {
                // Redirect to home page or dashboard
                navigate('/'); // Adjust the path as needed
                console.log("succesfull login")
                console.log(data)
            } else {
                // Handle errors (e.g., display error message)
                console.error(result.message);
            }
        } catch (error) {
            console.error("An error occurred during login:", error);
        }
    };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
        <Card className="max-w-sm w-full">
            <CardHeader>
                <CardTitle>
                    Login
                </CardTitle>
                <CardDescription>
                    Get back to Lifting!!
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
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
                <Button onClick={processData} className="w-full">Login</Button>
                <div className="flex gap-2 items-center">
                    <p className="text-sm text-muted-foreground">Don't have an account?</p>
                    <Link className="hover:text-blue-400 underline" to={"/Signup"}>Sign Up.</Link>
                </div>
            </CardFooter>
        </Card>
    </div>
  )
}
