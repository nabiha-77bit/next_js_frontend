// "use client"
// import Link from "next/link"
// import Image from "next/image"
// import { useRouter } from "next/navigation"
// import {
//   Bell,
//   FileSearch,
//   FileText,
//   HelpCircle,
//   LogOut,
//   MessageSquarePlus,
//   Search,
//   Settings,
//   Shield,
//   User,
// } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { Badge } from "@/components/ui/badge"
//
// export default function UserDashboard() {
//   const router = useRouter()
//
//   return (
//     <div className="min-h-screen bg-slate-100 flex flex-col">
//       <header className="bg-slate-900 text-white py-3 border-b border-slate-800 sticky top-0 z-50">
//         <div className="container mx-auto px-4 flex items-center justify-between">
//           <Link href="/" className="flex items-center space-x-2">
//             <Shield className="h-7 w-7 text-yellow-500" />
//             <span className="text-lg font-bold">National Crime Investigation Bureau</span>
//           </Link>
//
//           <div className="flex items-center space-x-4">
//             <div className="relative">
//               <Bell className="h-5 w-5 text-slate-300 hover:text-white cursor-pointer" />
//               <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center bg-red-500 text-[10px]">
//                 3
//               </Badge>
//             </div>
//
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="ghost" className="relative h-8 w-8 rounded-full">
//                   <Image
//                     src="/placeholder.svg?height=32&width=32&text=U"
//                     alt="User"
//                     width={32}
//                     height={32}
//                     className="rounded-full bg-slate-700"
//                   />
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent className="w-56" align="end" forceMount>
//                 <DropdownMenuLabel className="font-normal">
//                   <div className="flex flex-col space-y-1">
//                     <p className="text-sm font-medium leading-none">John Doe</p>
//                     <p className="text-xs leading-none text-muted-foreground">john.doe@example.com</p>
//                   </div>
//                 </DropdownMenuLabel>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem>
//                   <User className="mr-2 h-4 w-4" />
//                   <span>Profile</span>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>
//                   <Settings className="mr-2 h-4 w-4" />
//                   <span>Settings</span>
//                 </DropdownMenuItem>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem onClick={() => router.push("/")}>
//                   <LogOut className="mr-2 h-4 w-4" />
//                   <span>Log out</span>
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </div>
//         </div>
//       </header>
//
//       <main className="flex-1 py-8 px-4">
//         <div className="container mx-auto">
//           <div className="mb-8">
//             <h1 className="text-2xl font-bold text-slate-900">Welcome, John Doe</h1>
//             <p className="text-slate-600">Access your citizen services and track your cases</p>
//           </div>
//
//           <div className="grid md:grid-cols-3 gap-6">
//             <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
//               <CardHeader className="pb-2">
//                 <CardTitle className="text-lg flex items-center">
//                   <FileSearch className="mr-2 h-5 w-5 text-blue-600" />
//                   Track a Case
//                 </CardTitle>
//                 <CardDescription>Check the status of your reported cases</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-4">
//                   <div className="relative">
//                     <Search className="absolute left-2 top-2.5 h-4 w-4 text-slate-400" />
//                     <Input placeholder="Enter case number" className="pl-8" />
//                   </div>
//                   <Button className="w-full">Track Case</Button>
//                 </div>
//               </CardContent>
//               <CardFooter className="pt-0 text-xs text-slate-500">
//                 You can find your case number in the confirmation email
//               </CardFooter>
//             </Card>
//
//             <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
//               <CardHeader className="pb-2">
//                 <CardTitle className="text-lg flex items-center">
//                   <MessageSquarePlus className="mr-2 h-5 w-5 text-green-600" />
//                   Submit a Tip
//                 </CardTitle>
//                 <CardDescription>Provide anonymous information about a crime</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-2">
//                 <p className="text-sm text-slate-600">
//                   Your identity will remain confidential when submitting tips about criminal activity.
//                 </p>
//                 <Button className="w-full">Submit Anonymous Tip</Button>
//               </CardContent>
//               <CardFooter className="pt-0 text-xs text-slate-500">
//                 All tips are reviewed by our investigation team
//               </CardFooter>
//             </Card>
//
//             <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
//               <CardHeader className="pb-2">
//                 <CardTitle className="text-lg flex items-center">
//                   <HelpCircle className="mr-2 h-5 w-5 text-purple-600" />
//                   Help Find Missing Persons
//                 </CardTitle>
//                 <CardDescription>View and help locate missing individuals</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-2">
//                 <p className="text-sm text-slate-600">
//                   Browse through the list of missing persons and provide information if you have any leads.
//                 </p>
//                 <Button className="w-full" onClick={() => router.push("/dashboard/user/missing-persons")}>
//                   View Missing Persons
//                 </Button>
//               </CardContent>
//               <CardFooter className="pt-0 text-xs text-slate-500">
//                 Updated daily with the latest missing person reports
//               </CardFooter>
//             </Card>
//           </div>
//
//           <div className="mt-8">
//             <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
//             <Card>
//               <CardContent className="p-0">
//                 <div className="divide-y">
//                   {[1, 2, 3].map((item) => (
//                     <div key={item} className="p-4 flex items-start space-x-4">
//                       <div className="bg-blue-100 rounded-full p-2 mt-1">
//                         <FileText className="h-5 w-5 text-blue-600" />
//                       </div>
//                       <div className="flex-1">
//                         <div className="flex justify-between">
//                           <h3 className="font-medium">Case #{1000 + item} Updated</h3>
//                           <span className="text-xs text-slate-500">
//                             {new Date(Date.now() - item * 24 * 60 * 60 * 1000).toLocaleDateString()}
//                           </span>
//                         </div>
//                         <p className="text-sm text-slate-600 mt-1">
//                           Your case status has been updated to "Under Investigation"
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//               <CardFooter className="border-t">
//                 <Button variant="ghost" className="w-full text-blue-600">
//                   View All Activity
//                 </Button>
//               </CardFooter>
//             </Card>
//           </div>
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
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import axios from "axios"
import {
  Bell,
  FileSearch,
  FileText,
  HelpCircle,
  LogOut,
  MessageSquarePlus,
  Search,
  Settings,
  Shield,
  User,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function UserDashboard() {
  const router = useRouter()
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");

// Fetch user email and name
  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
      setUserEmail(storedEmail);

      // Fetch user's full name from backend
      axios.get(`http://localhost:8080/user/first_lastname/${storedEmail}`)
          .then((response) => {
            setUserName(response.data);
          })
          .catch((error) => {
            console.error("Failed to fetch user name:", error);
            setUserName("User"); // fallback
          });
    }
  }, []);

  return (
      <div className="min-h-screen bg-slate-100 flex flex-col">
        <header className="bg-slate-900 text-white py-3 border-b border-slate-800 sticky top-0 z-50">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-7 w-7 text-yellow-500" />
              <span className="text-lg font-bold">National Crime Investigation Bureau</span>
            </Link>

            <div className="flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full bg-slate-700">
                    <Image
                        src="/placeholder.svg?height=32&width=32&text=U"
                        alt="User"
                        width={32}
                        height={32}
                        className="rounded-full"
                    />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{userName}</p>
                      <p className="text-xs leading-none text-muted-foreground">{userEmail}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => router.push("/")}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        <main className="flex-1 py-8 px-4">
          <div className="container mx-auto">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-slate-900">Welcome, {userName}</h1>
              <p className="text-slate-600">Access your citizen services and track your cases</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <FileSearch className="mr-2 h-5 w-5 text-blue-600" />
                    Track a Case
                  </CardTitle>
                  <CardDescription>Check the status of your reported cases</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="relative">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-slate-400" />
                      <Input placeholder="Enter case number" className="pl-8" />
                    </div>
                    <Link href="/track-case">
                      <Button className="w-full">Track Case</Button>
                    </Link>
                  </div>
                </CardContent>
                <CardFooter className="pt-0 text-xs text-slate-500">
                  You can find your case number in the confirmation email
                </CardFooter>
              </Card>

              <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <MessageSquarePlus className="mr-2 h-5 w-5 text-green-600" />
                    Submit a Tip
                  </CardTitle>
                  <CardDescription>Provide anonymous information about a crime</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-slate-600">
                    Your identity will remain confidential when submitting tips about criminal activity.
                  </p>
                  <Link href="/feedback?type=tip">
                    <Button className="w-full">Submit Anonymous Tip</Button>
                  </Link>
                </CardContent>
                <CardFooter className="pt-0 text-xs text-slate-500">
                  All tips are reviewed by our investigation team
                </CardFooter>
              </Card>

              <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <HelpCircle className="mr-2 h-5 w-5 text-purple-600" />
                    Help Find Missing Persons
                  </CardTitle>
                  <CardDescription>View and help locate missing individuals</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-slate-600">
                    Browse through the list of missing persons and provide information if you have any leads.
                  </p>
                  <Link href="/dashboard/user/missing-persons">
                    <Button className="w-full" onClick={() => router.push("/dashboard/user/missing-persons")}>
                      View Missing Persons
                    </Button>
                  </Link>
                </CardContent>
                <CardFooter className="pt-0 text-xs text-slate-500">
                  Updated daily with the latest missing person reports
                </CardFooter>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <FileText className="mr-2 h-5 w-5 text-yellow-500" />
                    Report a Crime
                  </CardTitle>
                  <CardDescription>File an official crime report</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-slate-600">
                    Report incidents such as theft, vandalism, assault, or other criminal activities.
                  </p>
                  <Link href="/report-crime">
                    <Button className="w-full bg-yellow-500 text-slate-900 hover:bg-yellow-400">Report Crime</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Bell className="mr-2 h-5 w-5 text-red-500" />
                    AMBER Alerts
                  </CardTitle>
                  <CardDescription>Missing children alerts in your area</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-slate-600">
                    Stay informed about missing children alerts and help bring them home safely.
                  </p>
                  <Link href="/amber-alerts">
                    <Button className="w-full bg-red-500 hover:bg-red-600">View AMBER Alerts</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
              <Card>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="p-4 flex items-start space-x-4">
                          <div className="bg-blue-100 rounded-full p-2 mt-1">
                            <FileText className="h-5 w-5 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <h3 className="font-medium">Case #{1000 + item} Updated</h3>
                              <span className="text-xs text-slate-500">
                            {new Date(Date.now() - item * 24 * 60 * 60 * 1000).toLocaleDateString()}
                          </span>
                            </div>
                            <p className="text-sm text-slate-600 mt-1">
                              Your case status has been updated to "Under Investigation"
                            </p>
                          </div>
                        </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t">
                  <Button variant="ghost" className="w-full text-blue-600">
                    View All Activity
                  </Button>
                </CardFooter>
              </Card>
            </div>
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
