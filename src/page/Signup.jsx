// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { signupUser } from "@/lib/DB/makeUser"
// import { useState } from "react"

// import { Link, useNavigate } from "react-router-dom";

// export const Signup = () => {

//     const [data, setData] = 
//     useState({
//         fullName: "",
//         username: "",
//         password: ""
//     })
    

//     // const processData = () => {
//     //     console.log({data})
//     // }
//     const navigate = useNavigate(); // to redirect after successful signup

//     const processData = async () => {
//         try {
//             const result = await registerUser({
//                 fullname: data.fullName,
//                 username: data.username,
//                 password: data.password
//             });

//             if (result.message === 'User registered successfully') {
//                 // Redirect to login page or home page
//                 navigate('/Login');
//             } else {
//                 // Handle errors (e.g., display error message)
//                 console.error(result.message);
//             }
//         } catch (error) {
//             console.error("An error occurred during registration:", error);
//         }
//     };


//   return (
//     <div className="h-screen w-screen flex justify-center items-center">
//         <Card className="max-w-sm w-full">
//             <CardHeader>
//                 <CardTitle>
//                     Sign Up
//                 </CardTitle>
//                 <CardDescription>
//                     Get back to Lifting!!
//                 </CardDescription>
//             </CardHeader>
//             <CardContent className="flex flex-col gap-2">
//                 <Label>Full Name</Label>
//                 <Input 
//                 value={data.fullName} 
//                 onChange={(e) => setData(d => ({...d, fullName: e.target.value}))} 
//                 placeholder='Full Name'/>
//                 <Label>Username</Label>
//                 <Input 
//                 value={data.username} 
//                 onChange={(e) => setData(d => ({...d, username: e.target.value}))} 
//                 placeholder='Username'/>
//                 <Label>Password</Label>
//                 <Input 
//                 value={data.password} 
//                 onChange={(e) => setData(d => ({...d, password: e.target.value}))}
//                 type='password' />            
//             </CardContent>
//             <CardFooter className="flex flex-col gap-2">
//                 <Button onClick={() => signupUser(data.username, data.fullName, data.password)} className="w-full">Sign up</Button>
//                 <div className="flex gap-2 items-center">
//                     <p className="text-sm text-muted-foreground">Already have an account?</p>
//                     <Link className="hover:text-blue-400 underline" to={"/Login_page"}>Login.</Link>
//                 </div>
//             </CardFooter>
//         </Card>
//     </div>
//   )
// }
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signupUser } from "@/lib/DB/makeUser";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

export const Signup = () => {
    const [data, setData] = useState({ username: "", fullname: "", password: "" });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            const result = await signupUser(data.username, data.fullname, data.password);

            if (result.success) {
                toast.success("Successfully Registered!");
                navigate('/home'); // Adjust the path as needed
                setSuccess(result.message);
            } else {
                setError(result.message);
            }
        } catch (error) {
            console.error("An error occurred during signup:", error);
            setError("An error occurred during signup. Please try again.");
        }
    };

    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <Card className="max-w-sm w-full">
                <CardHeader>
                    <CardTitle>Signup</CardTitle>
                    <CardDescription>Join us and start your journey!</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                    <Label>Username</Label>
                    <Input 
                        value={data.username} 
                        onChange={(e) => setData({ ...data, username: e.target.value })} 
                        placeholder="Username"
                    />
                    <Label>Full Name</Label>
                    <Input 
                        value={data.fullname} 
                        onChange={(e) => setData({ ...data, fullname: e.target.value })} 
                        placeholder="Full Name"
                    />
                    <Label>Password</Label>
                    <Input 
                        value={data.password} 
                        onChange={(e) => setData({ ...data, password: e.target.value })} 
                        type="password" 
                    />            
                </CardContent>
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}
                <CardFooter className="flex flex-col gap-2">
                    <Button onClick={handleSignup} className="w-full">Signup</Button>
                    <div className="flex gap-2 items-center">
                        <p className="text-sm text-muted-foreground">Already have an account?</p>
                        <Link className="hover:text-blue-400 underline" to="/Login_page">Login</Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
};
