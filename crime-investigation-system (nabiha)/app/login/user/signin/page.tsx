// "use client"
//
// import type React from "react"
//
// import { useState } from "react"
// import Link from "next/link"
// import { useRouter } from "next/navigation"
// import { Shield } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { toast } from "@/components/ui/use-toast"
//
// export default function UserSignin() {
//   const router = useRouter()
//   const [isLoading, setIsLoading] = useState(false)
//
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     setIsLoading(true)
//
//     // Simulate API call
//     setTimeout(() => {
//       setIsLoading(false)
//       toast({
//         title: "Login successful",
//         description: "Welcome back to the National Crime Investigation Bureau",
//       })
//       router.push("/dashboard/user")
//     }, 1500)
//   }
//
//   return (
//     <div className="min-h-screen bg-slate-100 flex flex-col">
//       <header className="bg-slate-900 text-white py-4 border-b border-slate-800 sticky top-0 z-50">
//         <div className="container mx-auto px-4 flex items-center justify-between">
//           <Link href="/" className="flex items-center space-x-2">
//             <Shield className="h-8 w-8 text-yellow-500" />
//             <span className="text-xl font-bold">National Crime Investigation Bureau</span>
//           </Link>
//         </div>
//       </header>
//
//       <main className="flex-1 flex items-center justify-center p-4">
//         <div className="max-w-md w-full">
//           <Card className="border-slate-200 shadow-lg">
//             <CardHeader className="text-center">
//               <CardTitle className="text-2xl">User Login</CardTitle>
//               <CardDescription>Enter your credentials to access your account</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div className="space-y-2">
//                   <Label htmlFor="email">Email Address</Label>
//                   <Input id="email" type="email" placeholder="Enter your email address" required />
//                 </div>
//                 <div className="space-y-2">
//                   <div className="flex items-center justify-between">
//                     <Label htmlFor="password">Password</Label>
//                     <Link href="/forgot-password" className="text-xs text-blue-600 hover:underline">
//                       Forgot password?
//                     </Link>
//                   </div>
//                   <Input id="password" type="password" placeholder="Enter your password" required />
//                 </div>
//                 <div className="pt-4">
//                   <Button
//                     type="submit"
//                     className="w-full bg-yellow-500 text-slate-900 hover:bg-yellow-400"
//                     disabled={isLoading}
//                   >
//                     {isLoading ? "Logging in..." : "Login"}
//                   </Button>
//                 </div>
//               </form>
//             </CardContent>
//             <CardFooter className="flex justify-center border-t pt-4">
//               <div className="text-sm text-center">
//                 Don't have an account?{" "}
//                 <Link href="/login/user/signup" className="text-blue-600 hover:underline">
//                   Sign up here
//                 </Link>
//               </div>
//             </CardFooter>
//           </Card>
//         </div>
//       </main>
//
//       <footer className="bg-slate-900 text-white py-4">
//         <div className="container mx-auto px-4 text-center text-sm text-slate-400">
//           © {new Date().getFullYear()} National Crime Investigation Bureau. All rights reserved.
//         </div>
//       </footer>
//     </div>
//   )
// }
// "use client"
//
// import type React from "react"
// import { useState } from "react"
// import Link from "next/link"
// import { useRouter } from "next/navigation"
// import { Shield } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { toast } from "@/components/ui/use-toast"
// import axios from "axios"
//
// export default function UserSignin() {
//   const router = useRouter()
//   const [isLoading, setIsLoading] = useState(false)
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     setIsLoading(true)
//
//     try {
//       const response = await axios.post("http://localhost:8080/auth/user/login", null, {
//         params: {
//           email,
//           password,
//         },
//       })
//
//       // You may want to store the user info or token here
//       toast({
//         title: "Login successful",
//         description: "Welcome back to the National Crime Investigation Bureau",
//       })
//
//       router.push("/dashboard/user")
//     } catch (error: any) {
//       toast({
//         title: "Login failed",
//         description: error.response?.data || "Invalid credentials",
//         variant: "destructive",
//       })
//     } finally {
//       setIsLoading(false)
//     }
//   }
//
//   return (
//       <div className="min-h-screen bg-slate-100 flex flex-col">
//         <header className="bg-slate-900 text-white py-4 border-b border-slate-800 sticky top-0 z-50">
//           <div className="container mx-auto px-4 flex items-center justify-between">
//             <Link href="/" className="flex items-center space-x-2">
//               <Shield className="h-8 w-8 text-yellow-500" />
//               <span className="text-xl font-bold">National Crime Investigation Bureau</span>
//             </Link>
//           </div>
//         </header>
//
//         <main className="flex-1 flex items-center justify-center p-4">
//           <div className="max-w-md w-full">
//             <Card className="border-slate-200 shadow-lg">
//               <CardHeader className="text-center">
//                 <CardTitle className="text-2xl">User Login</CardTitle>
//                 <CardDescription>Enter your credentials to access your account</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="email">Email Address</Label>
//                     <Input
//                         id="email"
//                         type="email"
//                         placeholder="Enter your email address"
//                         required
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <div className="flex items-center justify-between">
//                       <Label htmlFor="password">Password</Label>
//                       <Link href="/forgot-password" className="text-xs text-blue-600 hover:underline">
//                         Forgot password?
//                       </Link>
//                     </div>
//                     <Input
//                         id="password"
//                         type="password"
//                         placeholder="Enter your password"
//                         required
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                   </div>
//                   <div className="pt-4">
//                     <Button
//                         type="submit"
//                         className="w-full bg-yellow-500 text-slate-900 hover:bg-yellow-400"
//                         disabled={isLoading}
//                     >
//                       {isLoading ? "Logging in..." : "Login"}
//                     </Button>
//                   </div>
//                 </form>
//               </CardContent>
//               <CardFooter className="flex justify-center border-t pt-4">
//                 <div className="text-sm text-center">
//                   Don't have an account?{" "}
//                   <Link href="/login/user/signup" className="text-blue-600 hover:underline">
//                     Sign up here
//                   </Link>
//                 </div>
//               </CardFooter>
//             </Card>
//           </div>
//         </main>
//
//         <footer className="bg-slate-900 text-white py-4">
//           <div className="container mx-auto px-4 text-center text-sm text-slate-400">
//             © {new Date().getFullYear()} National Crime Investigation Bureau. All rights reserved.
//           </div>
//         </footer>
//       </div>
//   )
// }
"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import axios from "axios"

export default function UserSignin() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await axios.post("http://localhost:8080/auth/user/login",{
          email,
          password
      });

      toast({
        title: "Login successful",
        description: "Welcome back to the National Crime Investigation Bureau",
      })

      localStorage.setItem("userEmail", email);

      // Redirect to user dashboard
      router.push("/dashboard/user")
      console.log("hello");
    } catch (error: any) {
      toast({
        title: "Login failed",
        description: error.response?.data || "Invalid credentials",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
      <div className="min-h-screen bg-slate-100 flex flex-col">
        <header className="bg-slate-900 text-white py-4 border-b border-slate-800 sticky top-0 z-50">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-yellow-500" />
              <span className="text-xl font-bold">National Crime Investigation Bureau</span>
            </Link>
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center p-4">
          <div className="max-w-md w-full">
            <Card className="border-slate-200 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">User Login</CardTitle>
                <CardDescription>Enter your credentials to access your account</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Link href="/forgot-password" className="text-xs text-blue-600 hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="pt-4">
                    <Button
                        type="submit"
                        className="w-full bg-yellow-500 text-slate-900 hover:bg-yellow-400"
                        disabled={isLoading}
                    >
                      {isLoading ? "Logging in..." : "Login"}
                    </Button>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-center border-t pt-4">
                <div className="text-sm text-center">
                  Don't have an account?{" "}
                  <Link href="/login/user/signup" className="text-blue-600 hover:underline">
                    Sign up here
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </div>
        </main>

        <footer className="bg-slate-900 text-white py-4">
          <div className="container mx-auto px-4 text-center text-sm text-slate-400">
            © {new Date().getFullYear()} National Crime Investigation Bureau. All rights reserved.
          </div>
        </footer>
      </div>
  )
}
