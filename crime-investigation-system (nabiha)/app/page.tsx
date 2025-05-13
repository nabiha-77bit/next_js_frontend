import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  PhoneCall,
  Shield,
  User,
  AlertTriangle,
  FileText,
  BarChart3,
  Clock,
  CheckCircle2,
  Scale,
  FileSearch,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-slate-900 text-white py-4 border-b border-slate-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-yellow-500" />
            <span className="text-xl font-bold">National Crime Investigation Bureau</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login/user">
              <Button className="bg-yellow-500 text-slate-900 hover:bg-yellow-400">User Login</Button>
            </Link>
            <Link href="/login/investigator">
              <Button className="bg-yellow-500 text-slate-900 hover:bg-yellow-400">Investigator Login</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-slate-800 text-white py-16">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Serving Justice, <span className="text-yellow-500">Protecting Communities</span>
              </h1>
              <p className="text-lg text-slate-300 max-w-lg">
                Our mission is to protect citizens, investigate crimes, and bring perpetrators to justice through
                professional law enforcement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/login/user">
                  <Button size="lg" className="bg-yellow-500 text-slate-900 hover:bg-yellow-400">
                    Report a Crime
                  </Button>
                </Link>
                
              </div>
            </div>
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Crime Investigation Bureau"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Case Statistics Section */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">Case Statistics</h2>
              <p className="text-slate-600 mt-2">Real-time tracking of our investigation progress</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-slate-500">Cases Solved</p>
                      <h3 className="text-3xl font-bold mt-1">1,284</h3>
                    </div>
                    <CheckCircle2 className="h-8 w-8 text-green-500" />
                  </div>
                  <div className="mt-4 flex items-center text-sm text-green-500">
                    <span className="font-medium">+12.5%</span>
                    <span className="ml-1 text-slate-600">from last month</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-yellow-500">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-slate-500">Active Investigations</p>
                      <h3 className="text-3xl font-bold mt-1">328</h3>
                    </div>
                    <Clock className="h-8 w-8 text-yellow-500" />
                  </div>
                  <div className="mt-4 flex items-center text-sm text-yellow-500">
                    <span className="font-medium">+3.2%</span>
                    <span className="ml-1 text-slate-600">from last month</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-slate-500">New Reports</p>
                      <h3 className="text-3xl font-bold mt-1">94</h3>
                    </div>
                    <AlertTriangle className="h-8 w-8 text-red-500" />
                  </div>
                  <div className="mt-4 flex items-center text-sm text-red-500">
                    <span className="font-medium">-5.1%</span>
                    <span className="ml-1 text-slate-600">from last month</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-slate-500">Conviction Rate</p>
                      <h3 className="text-3xl font-bold mt-1">78.3%</h3>
                    </div>
                    <BarChart3 className="h-8 w-8 text-blue-500" />
                  </div>
                  <div className="mt-4 flex items-center text-sm text-blue-500">
                    <span className="font-medium">+2.7%</span>
                    <span className="ml-1 text-slate-600">from last year</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Emergency Helplines Section */}
        <section className="py-12 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">Emergency Helplines</h2>
              <p className="text-slate-600 mt-2">24/7 assistance available for emergencies and support</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="border-red-100 bg-red-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-700">
                    <AlertTriangle className="mr-2 h-5 w-5" />
                    Emergency Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3 text-lg font-semibold text-red-700">
                    <PhoneCall className="h-5 w-5" />
                    <span>911</span>
                  </div>
                  <p className="mt-2 text-slate-600 text-sm">For immediate emergency assistance</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-red-200 text-red-700 hover:bg-red-100">
                    Call Now
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-blue-100 bg-blue-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-700">
                    <Shield className="mr-2 h-5 w-5" />
                    Crime Reporting Hotline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3 text-lg font-semibold text-blue-700">
                    <PhoneCall className="h-5 w-5" />
                    <span>1-800-555-TIPS</span>
                  </div>
                  <p className="mt-2 text-slate-600 text-sm">Anonymous tip line for reporting crimes</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-blue-200 text-blue-700 hover:bg-blue-100">
                    Call Now
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-purple-100 bg-purple-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-700">
                    <User className="mr-2 h-5 w-5" />
                    Victim Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3 text-lg font-semibold text-purple-700">
                    <PhoneCall className="h-5 w-5" />
                    <span>1-800-555-HELP</span>
                  </div>
                  <p className="mt-2 text-slate-600 text-sm">Support services for crime victims</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-purple-200 text-purple-700 hover:bg-purple-100">
                    Call Now
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Link href="/helplines">
                <Button variant="link" className="text-slate-900">
                  View All Helplines
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Hall of Shame Section */}
        <section className="py-12 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-yellow-500">Hall of Shame</h2>
              <p className="text-slate-400 mt-2">Convicted criminals with outstanding warrants</p>
            </div>

            <Tabs defaultValue="most-wanted" className="w-full">
              <div className="flex justify-center mb-6">
                <TabsList className="bg-slate-800">
                  <TabsTrigger
                    value="most-wanted"
                    className="data-[state=active]:bg-yellow-500 data-[state=active]:text-slate-900"
                  >
                    Most Wanted
                  </TabsTrigger>
                  <TabsTrigger
                    value="recently-added"
                    className="data-[state=active]:bg-yellow-500 data-[state=active]:text-slate-900"
                  >
                    Recently Added
                  </TabsTrigger>
                  <TabsTrigger
                    value="captured"
                    className="data-[state=active]:bg-yellow-500 data-[state=active]:text-slate-900"
                  >
                    Captured
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="most-wanted">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <Card key={item} className="bg-slate-800 border-slate-700 overflow-hidden">
                      <div className="aspect-[4/3] relative">
                        <Image
                          src={`/placeholder.svg?height=300&width=400&text=Criminal%20${item}`}
                          alt={`Criminal ${item}`}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-red-600 hover:bg-red-700">Most Wanted</Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-white">John Doe #{item}</CardTitle>
                            <CardDescription className="text-slate-400">Wanted for multiple charges</CardDescription>
                          </div>
                          <Badge variant="outline" className="border-yellow-500 text-yellow-500">
                            Reward: $25,000
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="text-slate-300">
                        <div className="space-y-2 text-sm">
                          <div className="grid grid-cols-2 gap-1">
                            <span className="text-slate-400">Age:</span>
                            <span>35-40</span>
                          </div>
                          <div className="grid grid-cols-2 gap-1">
                            <span className="text-slate-400">Height:</span>
                            <span>5'10"</span>
                          </div>
                          <div className="grid grid-cols-2 gap-1">
                            <span className="text-slate-400">Weight:</span>
                            <span>180 lbs</span>
                          </div>
                          <div className="grid grid-cols-2 gap-1">
                            <span className="text-slate-400">Last seen:</span>
                            <span>Chicago, IL</span>
                          </div>
                          <div className="pt-2">
                            <span className="text-slate-400">Charges:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              <Badge variant="secondary" className="bg-slate-700">
                                Assault
                              </Badge>
                              <Badge variant="secondary" className="bg-slate-700">
                                Robbery
                              </Badge>
                              <Badge variant="secondary" className="bg-slate-700">
                                Fraud
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="border-t border-slate-700 bg-slate-800">
                        <Button className="w-full bg-yellow-500 text-slate-900 hover:bg-yellow-400">
                          View Full Profile
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <Link href="/hall-of-shame">
                    <Button variant="outline" className="border-slate-700 text-white hover:bg-slate-800">
                      View All Criminals
                    </Button>
                  </Link>
                </div>
              </TabsContent>

              <TabsContent value="recently-added">
                <div className="rounded-lg border border-slate-700 bg-slate-800 p-8 text-center">
                  <h3 className="text-lg font-medium">Recently Added Criminals</h3>
                  <p className="text-slate-400 mt-2">View the most recent additions to our wanted list</p>
                  <Button className="mt-4 bg-yellow-500 text-slate-900 hover:bg-yellow-400">View Recently Added</Button>
                </div>
              </TabsContent>

              <TabsContent value="captured">
                <div className="rounded-lg border border-slate-700 bg-slate-800 p-8 text-center">
                  <h3 className="text-lg font-medium">Captured Criminals</h3>
                  <p className="text-slate-400 mt-2">Criminals who have been successfully apprehended</p>
                  <Button className="mt-4 bg-yellow-500 text-slate-900 hover:bg-yellow-400">View Captured</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Laws and Punishments Preview */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">Laws & Punishments</h2>
              <p className="text-slate-600 mt-2">Learn about criminal laws and associated penalties</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Scale className="mr-2 h-5 w-5 text-slate-700" />
                    Criminal Code
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Access the complete criminal code with detailed explanations of offenses and legal procedures.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/laws/criminal-code" className="w-full">
                    <Button variant="outline" className="w-full">
                      View Criminal Code
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="mr-2 h-5 w-5 text-slate-700" />
                    Sentencing Guidelines
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Understand how sentences are determined based on the severity of crimes and other factors.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/laws/sentencing" className="w-full">
                    <Button variant="outline" className="w-full">
                      View Guidelines
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="mr-2 h-5 w-5 text-slate-700" />
                    Victim Rights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Learn about your rights as a victim of crime and the protections available to you.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/laws/victim-rights" className="w-full">
                    <Button variant="outline" className="w-full">
                      View Rights
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Link href="/laws">
                <Button>Browse All Laws & Punishments</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-yellow-500">About NCIB</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-slate-300 hover:text-white">
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-slate-300 hover:text-white">
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-slate-300 hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-slate-300 hover:text-white">
                    Press Releases
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-yellow-500">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-slate-300 hover:text-white">
                    Crime Statistics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-slate-300 hover:text-white">
                    Public Records
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-slate-300 hover:text-white">
                    Most Wanted
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-slate-300 hover:text-white">
                    Safety Tips
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-yellow-500">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-slate-300 hover:text-white">
                    Headquarters
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-slate-300 hover:text-white">
                    Field Offices
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-slate-300 hover:text-white">
                    Submit a Tip
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-slate-300 hover:text-white">
                    Report a Crime
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-yellow-500">Connect</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-slate-300 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-slate-300 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-slate-300 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-4.123v-.08c0-2.643.012-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C8.907 2.013 9.251 2 11.885 2h.43zm.315 5a3.417 3.417 0 00-3.414 3.414 3.417 3.417 0 003.414 3.414 3.417 3.417 0 003.414-3.414 3.417 3.417 0 00-3.414-3.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
              <div className="mt-6">
                <p className="text-sm text-slate-400">
                  © {new Date().getFullYear()} National Crime Investigation Bureau. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
