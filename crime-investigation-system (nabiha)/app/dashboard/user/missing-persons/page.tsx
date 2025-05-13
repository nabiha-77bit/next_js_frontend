"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Bell, ChevronLeft, Filter, HelpCircle, LogOut, Search, Settings, Shield, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for missing persons
const missingPersons = [
  {
    id: 1,
    name: "Sarah Johnson",
    age: 24,
    lastSeen: "2023-05-15",
    location: "Downtown, Central City",
    description: "Last seen wearing a blue jacket and jeans. Has a small scar on her right cheek.",
    contact: "555-0123",
    status: "Active",
  },
  {
    id: 2,
    name: "Michael Chen",
    age: 17,
    lastSeen: "2023-06-02",
    location: "Westside Mall, Central City",
    description: "Last seen wearing a red t-shirt and black shorts. Has a tattoo on his left arm.",
    contact: "555-0124",
    status: "Active",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    age: 32,
    lastSeen: "2023-05-28",
    location: "North Park, Central City",
    description: "Last seen wearing a green dress. Has long brown hair and glasses.",
    contact: "555-0125",
    status: "Active",
  },
  {
    id: 4,
    name: "David Wilson",
    age: 19,
    lastSeen: "2023-06-05",
    location: "University Campus, Central City",
    description: "Last seen wearing a gray hoodie and jeans. Has a beard and short black hair.",
    contact: "555-0126",
    status: "Active",
  },
  {
    id: 5,
    name: "Sophia Martinez",
    age: 28,
    lastSeen: "2023-05-20",
    location: "East Side, Central City",
    description: "Last seen wearing a yellow blouse and white pants. Has a butterfly tattoo on her wrist.",
    contact: "555-0127",
    status: "Active",
  },
  {
    id: 6,
    name: "James Thompson",
    age: 42,
    lastSeen: "2023-06-01",
    location: "Central Train Station, Central City",
    description: "Last seen wearing a black suit. Has a scar on his forehead and walks with a slight limp.",
    contact: "555-0128",
    status: "Active",
  },
]

export default function MissingPersons() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPersons = missingPersons.filter(
    (person) =>
      person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.location.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <header className="bg-slate-900 text-white py-3 border-b border-slate-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="h-7 w-7 text-yellow-500" />
            <span className="text-lg font-bold">National Crime Investigation Bureau</span>
          </Link>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Bell className="h-5 w-5 text-slate-300 hover:text-white cursor-pointer" />
              <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center bg-red-500 text-[10px]">
                3
              </Badge>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Image
                    src="/placeholder.svg?height=32&width=32&text=U"
                    alt="User"
                    width={32}
                    height={32}
                    className="rounded-full bg-slate-700"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">John Doe</p>
                    <p className="text-xs leading-none text-muted-foreground">john.doe@example.com</p>
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
          <div className="mb-6 flex items-center">
            <Button variant="ghost" className="mr-2" onClick={() => router.push("/dashboard/user")}>
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Dashboard
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Missing Persons</h1>
              <p className="text-slate-600">Help us find these missing individuals</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-6 items-start md:items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search by name or location"
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex gap-2 w-full md:w-auto">
              <Select defaultValue="all">
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="found">Found</SelectItem>
                  <SelectItem value="closed">Case Closed</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" className="flex items-center gap-1">
                <Filter className="h-4 w-4" />
                <span className="hidden md:inline">More Filters</span>
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPersons.map((person) => (
              <Card
                key={person.id}
                className="overflow-hidden border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-[4/3] relative bg-slate-100">
                  <Image
                    src={`/placeholder.svg?height=300&width=400&text=${person.name}`}
                    alt={person.name}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-2 right-2 bg-red-600 hover:bg-red-700">{person.status}</Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-1">
                    {person.name}, {person.age}
                  </h3>
                  <div className="space-y-2 text-sm text-slate-600">
                    <div>
                      <span className="font-medium">Last seen:</span> {new Date(person.lastSeen).toLocaleDateString()}{" "}
                      at {person.location}
                    </div>
                    <div>
                      <span className="font-medium">Description:</span> {person.description}
                    </div>
                    <div>
                      <span className="font-medium">Contact:</span> {person.contact}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t p-4 pt-3">
                  <Button className="bg-yellow-500 text-slate-900 hover:bg-yellow-400">
                    <HelpCircle className="h-4 w-4 mr-1" />
                    Provide Info
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredPersons.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="h-12 w-12 mx-auto text-slate-400" />
              <h3 className="mt-4 text-lg font-medium">No results found</h3>
              <p className="mt-1 text-slate-500">Try adjusting your search or filters</p>
              <Button variant="outline" className="mt-4" onClick={() => setSearchQuery("")}>
                Clear Search
              </Button>
            </div>
          )}

          {filteredPersons.length > 0 && (
            <div className="mt-8 flex justify-center">
              <Button variant="outline" className="text-slate-700">
                Load More
              </Button>
            </div>
          )}
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
