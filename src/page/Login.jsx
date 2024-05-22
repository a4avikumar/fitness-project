
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginUser } from "@/lib/DB/makeUser";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

export const Login = () => {
    const [data, setData] = useState({ username: "", password: "" });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const processData = async () => {
        try {
            const result = await loginUser(data.username, data.password);

            if (result.success) {
                toast.success("Successfully logged in!");
                navigate('/home'); // Adjust the path as needed
            } else {
                setError(result.message);
            }
        } catch (error) {
            console.error("An error occurred during login:", error);
            setError("An error occurred during login. Please try again.");
        }
    };

    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <Card className="max-w-sm w-full">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>Get back to Lifting!!</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                    <Label>Username</Label>
                    <Input 
                        value={data.username} 
                        onChange={(e) => setData({ ...data, username: e.target.value })} 
                        placeholder="Username"
                    />
                    <Label>Password</Label>
                    <Input 
                        value={data.password} 
                        onChange={(e) => setData({ ...data, password: e.target.value })} 
                        type="password" 
                    />            
                </CardContent>
                {error && <p className="text-red-500">{error}</p>}
                <CardFooter className="flex flex-col gap-2">
                    <Button onClick={processData} className="w-full">Login</Button>
                    <div className="flex gap-2 items-center">
                        <p className="text-sm text-muted-foreground">Don't have an account?</p>
                        <Link className="hover:text-blue-400 underline" to="/Sign_page">Sign Up</Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
};
