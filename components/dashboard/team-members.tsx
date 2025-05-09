"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function TeamMembers() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Project Manager",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "AJ",
      status: "online",
    },
    {
      name: "Sarah Williams",
      role: "UI Designer",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "SW",
      status: "online",
    },
    {
      name: "Michael Brown",
      role: "Developer",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MB",
      status: "offline",
    },
    {
      name: "Emily Davis",
      role: "Content Writer",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "ED",
      status: "online",
    },
  ]

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Team Members</CardTitle>
        <CardDescription>Active members on this project</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                  <AvatarFallback>{member.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{member.name}</div>
                  <div className="text-xs text-muted-foreground">{member.role}</div>
                </div>
              </div>
              <Badge variant={member.status === "online" ? "default" : "outline"} className="px-2 py-0 text-xs">
                {member.status === "online" ? "Online" : "Offline"}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
