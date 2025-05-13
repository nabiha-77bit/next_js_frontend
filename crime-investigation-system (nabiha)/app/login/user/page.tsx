import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield } from "lucide-react"

export default function UserLoginOptions() {
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
              <CardTitle className="text-2xl">User Portal</CardTitle>
              <CardDescription>Choose an option to continue</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Link href="/login/user/signin" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full h-32 flex flex-col items-center justify-center gap-2 border-slate-300"
                  >
                    <Image
                      src="/placeholder.svg?height=40&width=40&text=Login"
                      alt="Login"
                      width={40}
                      height={40}
                      className="mb-2"
                    />
                    <span className="text-lg font-medium">Login</span>
                    <span className="text-xs text-slate-500">Existing users</span>
                  </Button>
                </Link>
                <Link href="/login/user/signup" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full h-32 flex flex-col items-center justify-center gap-2 border-slate-300"
                  >
                    <Image
                      src="/placeholder.svg?height=40&width=40&text=Signup"
                      alt="Signup"
                      width={40}
                      height={40}
                      className="mb-2"
                    />
                    <span className="text-lg font-medium">Sign Up</span>
                    <span className="text-xs text-slate-500">New users</span>
                  </Button>
                </Link>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center border-t pt-4">
              <Link href="/">
                <Button variant="ghost" className="text-slate-600">
                  Back to Home
                </Button>
              </Link>
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
// "use client"
//
// import { useState } from "react"
// import { useRouter } from "next/navigation"
// import axios from "axios"
// import Link from "next/link"
// import { toast } from "@/components/ui/use-toast"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
//
// export default function UserSignup() {
//   const router = useRouter()
//   const [formData, setFormData] = useState({
//     firstName: "",
//     midName: "",
//     lastName: "",
//     fatherName: "",
//     contactNumber: "",
//     dob: "",
//     occupation: "",
//     cnic: "",
//     personId: 0,
//     address: "",
//     gender: "MALE",
//     email: "",
//     password: "",
//     role: "VICTIM"
//   })
//
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target
//     setFormData({ ...formData, [name]: value })
//   }
//
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     try {
//       const response = await axios.post("http://localhost:8080/auth/user/signup", formData)
//       toast({
//         title: "Signup successful",
//         description: "You can now log in.",
//       })
//       router.push("/login/user/signin")
//     } catch (err: any) {
//       toast({
//         title: "Signup failed",
//         description: err.response?.data || "An error occurred",
//         variant: "destructive"
//       })
//     }
//   }
//
//   return (
//       <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
//         <div className="max-w-lg w-full">
//           <Card className="border-slate-200 shadow-lg">
//             <CardHeader className="text-center">
//               <CardTitle className="text-2xl">User Signup</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <form onSubmit={handleSubmit} className="space-y-3">
//                 {[
//                   ["firstName", "First Name"],
//                   ["midName", "Middle Name"],
//                   ["lastName", "Last Name"],
//                   ["fatherName", "Father's Name"],
//                   ["contactNumber", "Contact Number"],
//                   ["dob", "Date of Birth"],
//                   ["occupation", "Occupation"],
//                   ["cnic", "CNIC"],
//                   ["personId", "Person ID"],
//                   ["address", "Address"],
//                   ["email", "Email"],
//                   ["password", "Password"]
//                 ].map(([name, label]) => (
//                     <div key={name}>
//                       <Label>{label}</Label>
//                       <Input
//                           name={name}
//                           type={name === "dob" ? "date" : name === "password" ? "password" : "text"}
//                           value={(formData as any)[name]}
//                           onChange={handleChange}
//                           required
//                       />
//                     </div>
//                 ))}
//
//                 <div>
//                   <Label>Gender</Label>
//                   <select name="gender" value={formData.gender} onChange={handleChange} className="w-full p-2 border rounded">
//                     <option value="MALE">Male</option>
//                     <option value="FEMALE">Female</option>
//                   </select>
//                 </div>
//
//                 <div>
//                   <Label>Role</Label>
//                   <select name="role" value={formData.role} onChange={handleChange} className="w-full p-2 border rounded">
//                     <option value="VICTIM">Victim</option>
//                     <option value="EYEWITNESS">Eyewitness</option>
//                   </select>
//                 </div>
//
//                 <Button type="submit" className="w-full bg-yellow-500 text-slate-900 hover:bg-yellow-400">
//                   Sign Up
//                 </Button>
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
//       </div>
//   )
// }
