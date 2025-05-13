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
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { Textarea } from "@/components/ui/textarea"
// import { toast } from "@/components/ui/use-toast"
//
// export default function UserSignup() {
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
//         title: "Account created successfully",
//         description: "You can now login with your email and password",
//       })
//       router.push("/login/user/signin")
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
//       <main className="flex-1 py-8 px-4">
//         <div className="max-w-2xl mx-auto">
//           <Card className="border-slate-200 shadow-lg">
//             <CardHeader className="text-center">
//               <CardTitle className="text-2xl">Create an Account</CardTitle>
//               <CardDescription>Fill in your details to register as a user</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="name">Full Name</Label>
//                     <Input id="name" placeholder="Enter your full name" required />
//                   </div>
//
//                   <div className="space-y-2">
//                     <Label htmlFor="fatherName">Father's Name</Label>
//                     <Input id="fatherName" placeholder="Enter your father's name" required />
//                   </div>
//
//                   <div className="space-y-2">
//                     <Label htmlFor="contactNo">Contact Number</Label>
//                     <Input id="contactNo" placeholder="Enter your contact number" required />
//                   </div>
//
//                   <div className="space-y-2">
//                     <Label htmlFor="dob">Date of Birth</Label>
//                     <Input id="dob" type="date" required />
//                   </div>
//
//                   <div className="space-y-2">
//                     <Label htmlFor="cnic">CNIC Number</Label>
//                     <Input id="cnic" placeholder="Enter your CNIC number" required />
//                   </div>
//
//                   <div className="space-y-2">
//                     <Label htmlFor="occupation">Occupation</Label>
//                     <Input id="occupation" placeholder="Enter your occupation" required />
//                   </div>
//
//                   <div className="space-y-2">
//                     <Label>Gender</Label>
//                     <RadioGroup defaultValue="male" className="flex space-x-4">
//                       <div className="flex items-center space-x-2">
//                         <RadioGroupItem value="male" id="male" />
//                         <Label htmlFor="male">Male</Label>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <RadioGroupItem value="female" id="female" />
//                         <Label htmlFor="female">Female</Label>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <RadioGroupItem value="other" id="other" />
//                         <Label htmlFor="other">Other</Label>
//                       </div>
//                     </RadioGroup>
//                   </div>
//
//                   <div className="space-y-2">
//                     <Label htmlFor="email">Email Address</Label>
//                     <Input id="email" type="email" placeholder="Enter your email address" required />
//                   </div>
//
//                   <div className="space-y-2 md:col-span-2">
//                     <Label htmlFor="address">Address</Label>
//                     <Textarea id="address" placeholder="Enter your full address" required />
//                   </div>
//
//                   <div className="space-y-2">
//                     <Label htmlFor="password">Password</Label>
//                     <Input id="password" type="password" placeholder="Create a password" required />
//                   </div>
//
//                   <div className="space-y-2">
//                     <Label htmlFor="confirmPassword">Confirm Password</Label>
//                     <Input id="confirmPassword" type="password" placeholder="Confirm your password" required />
//                   </div>
//                 </div>
//
//                 <div className="pt-4 border-t">
//                   <Button
//                     type="submit"
//                     className="w-full bg-yellow-500 text-slate-900 hover:bg-yellow-400"
//                     disabled={isLoading}
//                   >
//                     {isLoading ? "Creating Account..." : "Create Account"}
//                   </Button>
//                 </div>
//               </form>
//             </CardContent>
//             <CardFooter className="flex justify-center border-t pt-4">
//               <div className="text-sm text-center">
//                 Already have an account?{" "}
//                 <Link href="/login/user/signin" className="text-blue-600 hover:underline">
//                   Login here
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

"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import Link from "next/link"
import { toast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function UserSignup() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    midName: "",
    lastName: "",
    fatherName: "",
    contactNumber: "",
    dob: "",
    occupation: "",
    cnic: "",
    personId: 0,
    address: "",
    gender: "MALE",
    email: "",
    password: "",
    role: "VICTIM"
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   try {
  //     const response = await axios.post("http://localhost:8080/auth/user/signup", formData)
  //     toast({
  //       title: "Signup successful",
  //       description: "You can now log in.",
  //     })
  //     router.push("/login/user/signin")
  //   } catch (err: any) {
  //     toast({
  //       title: "Signup failed",
  //       description: err.response?.data || "An error occurred",
  //       variant: "destructive"
  //     })
  //   }
  // }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:8080/auth/user/signup", formData)

      // ✅ ADD THIS LINE TO LOG THE RESPONSE
      console.log("Signup Response", response.data)

      toast({
        title: "Signup successful",
        description: "You can now log in.",
      })

      router.push("/login/user/signin") // This should happen after a successful signup
    } catch (err: any) {
      console.error("Signup Error:", err.response?.data || err.message)

      toast({
        title: "Signup failed",
        description: err.response?.data || "An error occurred",
        variant: "destructive",
      })
    }
  }


  return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
        <div className="max-w-lg w-full">
          <Card className="border-slate-200 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">User Signup</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-3">
                {[
                  ["firstName", "First Name"],
                  ["midName", "Middle Name"],
                  ["lastName", "Last Name"],
                  ["fatherName", "Father's Name"],
                  ["contactNumber", "Contact Number"],
                  ["dob", "Date of Birth"],
                  ["occupation", "Occupation"],
                  ["cnic", "CNIC"],
                  // ["personId", "Person ID"],
                  ["address", "Address"],
                  ["email", "Email"],
                  ["password", "Password"]
                ].map(([name, label]) => (
                    <div key={name}>
                      <Label>{label}</Label>
                      <Input
                          name={name}
                          type={name === "dob" ? "date" : name === "password" ? "password" : "text"}
                          value={(formData as any)[name]}
                          onChange={handleChange}
                          required
                      />
                    </div>
                ))}

                <div>
                  <Label>Gender</Label>
                  <select name="gender" value={formData.gender} onChange={handleChange} className="w-full p-2 border rounded">
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                  </select>
                </div>

                <div>
                  <Label>Role</Label>
                  <select name="role" value={formData.role} onChange={handleChange} className="w-full p-2 border rounded">
                    <option value="VICTIM">Victim</option>
                    <option value="EYEWITNESS">Eyewitness</option>
                  </select>
                </div>

                <Button type="submit" className="w-full bg-yellow-500 text-slate-900 hover:bg-yellow-400">
                  Sign Up
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex justify-center border-t pt-4">
              <div className="text-sm text-center">
                Already have an account?{" "}
                <Link href="/login/user/signin" className="text-blue-600 hover:underline">
                  Login here
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
  )
}
