// "use client"
//
// import type React from "react"
//
// import { useState, useEffect } from "react"
// import Link from "next/link"
// import { useRouter } from "next/navigation"
// import { AlertTriangle, Calendar, MapPin, Shield } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { toast } from "@/components/ui/use-toast"
// import { Checkbox } from "@/components/ui/checkbox"
// import CrimeService, { type CrimeType } from "@/lib/crime-service"
//
// export default function ReportCrime() {
//     const router = useRouter()
//     const [isLoading, setIsLoading] = useState(false)
//     const [isLoadingTypes, setIsLoadingTypes] = useState(true)
//     const [userId, setUserId] = useState<string | null>(null)
//     const [crimeTypes, setCrimeTypes] = useState<CrimeType[]>([])
//
//     // Form state
//     const [dateTime, setDateTime] = useState("")
//     const [location, setLocation] = useState("")
//     const [description, setDescription] = useState("")
//     const [cctvPresence, setCctvPresence] = useState<boolean>(false)
//     const [weaponsUsed, setWeaponsUsed] = useState("")
//     const [injuryDetails, setInjuryDetails] = useState("")
//     const [motive, setMotive] = useState("")
//     const [crimeTypeId, setCrimeTypeId] = useState<string>("")
//
//     // Get user ID and crime types on component mount
//     useEffect(() => {
//         const storedUserId = localStorage.getItem("userId")
//         if (storedUserId) {
//             setUserId(storedUserId)
//         } else {
//             // Redirect to login if no user ID is found
//             toast({
//                 title: "Authentication required",
//                 description: "Please login to report a crime",
//                 variant: "destructive",
//             })
//             router.push("/login/user")
//         }
//
//         // Fetch crime types
//         const fetchCrimeTypes = async () => {
//             try {
//                 const types = await CrimeService.getCrimeTypes()
//                 setCrimeTypes(types)
//             } catch (error) {
//                 console.error("Failed to fetch crime types:", error)
//                 toast({
//                     title: "Failed to load crime types",
//                     description: "Please try again later",
//                     variant: "destructive",
//                 })
//                 // Fallback to mock data if API fails
//                 setCrimeTypes([
//                     { id: 1, name: "Theft" },
//                     { id: 2, name: "Assault" },
//                     { id: 3, name: "Fraud" },
//                     { id: 4, name: "Vandalism" },
//                     { id: 5, name: "Other" },
//                 ])
//             } finally {
//                 setIsLoadingTypes(false)
//             }
//         }
//
//         fetchCrimeTypes()
//     }, [router])
//
//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault()
//
//         if (!userId) {
//             toast({
//                 title: "Authentication required",
//                 description: "Please login to report a crime",
//                 variant: "destructive",
//             })
//             router.push("/login/user")
//             return
//         }
//
//         if (!dateTime || !location || !crimeTypeId) {
//             toast({
//                 title: "Missing required fields",
//                 description: "Please fill in all required fields",
//                 variant: "destructive",
//             })
//             return
//         }
//
//         setIsLoading(true)
//
//         // Prepare data for API
//         const crimeData = {
//             dateTime,
//             location,
//             description,
//             cctvPresence,
//             weaponsUsed: weaponsUsed || null,
//             injuryDetails: injuryDetails || null,
//             motive: motive || null,
//             userId,
//             crimeTypeId: Number.parseInt(crimeTypeId),
//         }
//
//         try {
//             const result = await CrimeService.reportCrime(crimeData)
//
//             toast({
//                 title: "Crime report submitted",
//                 description: `Your report has been submitted successfully. Case number: ${result.caseId || "CR-" + Math.floor(Math.random() * 10000)}`,
//             })
//
//             router.push("/dashboard/user")
//         } catch (error) {
//             console.error("Failed to submit report:", error)
//             toast({
//                 title: "Failed to submit report",
//                 description: error instanceof Error ? error.message : "An unknown error occurred",
//                 variant: "destructive",
//             })
//         } finally {
//             setIsLoading(false)
//         }
//     }
//
//     return (
//         <div className="min-h-screen bg-slate-100 flex flex-col">
//         <header className="bg-slate-900 text-white py-4 border-b border-slate-800 sticky top-0 z-50">
//         <div className="container mx-auto px-4 flex items-center justify-between">
//         <Link href="/" className="flex items-center space-x-2">
//     <Shield className="h-8 w-8 text-yellow-500" />
//     <span className="text-xl font-bold">National Crime Investigation Bureau</span>
//     </Link>
//     </div>
//     </header>
//
//     <main className="flex-1 py-8 px-4">
//     <div className="max-w-3xl mx-auto">
//     <Card className="border-slate-200 shadow-lg">
//     <CardHeader>
//         <CardTitle className="text-2xl flex items-center gap-2">
//     <AlertTriangle className="h-6 w-6 text-red-500" />
//         Report a Crime
//     </CardTitle>
//     <CardDescription>
//     Please provide as much detail as possible about the incident. All information will be kept confidential.
//     </CardDescription>
//     </CardHeader>
//     <CardContent>
//     <form onSubmit={handleSubmit} className="space-y-6">
//     <div className="grid md:grid-cols-2 gap-4">
//     <div className="space-y-2">
//     <Label htmlFor="dateTime" className="after:content-['*'] after:ml-0.5 after:text-red-500">
//         Date and Time of Incident
//     </Label>
//     <div className="relative">
//     <Calendar className="absolute left-2 top-2.5 h-4 w-4 text-slate-400" />
//     <Input
//         id="dateTime"
//     type="datetime-local"
//     className="pl-8"
//     value={dateTime}
//     onChange={(e) => setDateTime(e.target.value)}
//     required
//     />
//     </div>
//     </div>
//
//     <div className="space-y-2">
//     <Label htmlFor="crimeType" className="after:content-['*'] after:ml-0.5 after:text-red-500">
//         Type of Crime
//     </Label>
//     <Select value={crimeTypeId} onValueChange={setCrimeTypeId} disabled={isLoadingTypes} required>
//     <SelectTrigger id="crimeType">
//     <SelectValue placeholder={isLoadingTypes ? "Loading..." : "Select crime type"} />
//     </SelectTrigger>
//     <SelectContent>
//     {crimeTypes.map((type) => (
//             <SelectItem key={type.id} value={type.id.toString()}>
//         {type.name}
//         </SelectItem>
// ))}
//     </SelectContent>
//     </Select>
//     </div>
//     </div>
//
//     <div className="space-y-2">
//     <Label htmlFor="location" className="after:content-['*'] after:ml-0.5 after:text-red-500">
//         Location of Incident
//     </Label>
//     <div className="relative">
//     <MapPin className="absolute left-2 top-2.5 h-4 w-4 text-slate-400" />
//     <Input
//         id="location"
//     placeholder="Enter location"
//     className="pl-8"
//     value={location}
//     onChange={(e) => setLocation(e.target.value)}
//     required
//     />
//     </div>
//     </div>
//
//     <div className="space-y-2">
//     <Label htmlFor="description">Description of Incident</Label>
//     <Textarea
//     id="description"
//     placeholder="Please provide a detailed description of what happened"
//     className="min-h-[120px]"
//     value={description}
//     onChange={(e) => setDescription(e.target.value)}
//     />
//     </div>
//
//     <div className="space-y-2">
//     <div className="flex items-center space-x-2">
//     <Checkbox
//         id="cctvPresence"
//     checked={cctvPresence}
//     onCheckedChange={(checked) => setCctvPresence(!!checked)}
//     />
//     <Label htmlFor="cctvPresence" className="after:content-['*'] after:ml-0.5 after:text-red-500">
//         CCTV Present at the Scene
//     </Label>
//     </div>
//     </div>
//
//     <div className="space-y-2">
//     <Label htmlFor="weaponsUsed">Weapons Used (if any)</Label>
//     <Input
//     id="weaponsUsed"
//     placeholder="Describe any weapons used"
//     value={weaponsUsed}
//     onChange={(e) => setWeaponsUsed(e.target.value)}
//     />
//     </div>
//
//     <div className="space-y-2">
//     <Label htmlFor="injuryDetails">Injury Details (if any)</Label>
//     <Input
//     id="injuryDetails"
//     placeholder="Describe any injuries"
//     value={injuryDetails}
//     onChange={(e) => setInjuryDetails(e.target.value)}
//     />
//     </div>
//
//     <div className="space-y-2">
//     <Label htmlFor="motive">Possible Motive</Label>
//     <Textarea
//     id="motive"
//     placeholder="Describe any possible motives for the crime"
//     className="min-h-[100px]"
//     value={motive}
//     onChange={(e) => setMotive(e.target.value)}
//     />
//     </div>
//
//     <div className="border-t pt-4">
//     <div className="flex items-center space-x-2">
//     <Checkbox id="terms" required />
//     <label
//         htmlFor="terms"
//     className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//         >
//         I confirm that the information provided is true and accurate to the best of my knowledge.
//     </label>
//     </div>
//     </div>
//
//     <div className="flex gap-4">
//     <Button
//         type="submit"
//     className="flex-1 bg-yellow-500 text-slate-900 hover:bg-yellow-400"
//     disabled={isLoading}
//         >
//         {isLoading ? "Submitting..." : "Submit Report"}
//         </Button>
//         <Button type="button" variant="outline" className="flex-1" onClick={() => router.back()}>
//     Cancel
//     </Button>
//     </div>
//     </form>
//     </CardContent>
//     <CardFooter className="border-t pt-4 text-sm text-slate-500">
//         Filing a false police report is a criminal offense and may result in prosecution.
//     </CardFooter>
//     </Card>
//     </div>
//     </main>
//
//     <footer className="bg-slate-900 text-white py-4">
//     <div className="container mx-auto px-4 text-center text-sm text-slate-400">
//           © {new Date().getFullYear()} National Crime Investigation Bureau. All rights reserved.
//     </div>
//     </footer>
//     </div>
// )
// }
