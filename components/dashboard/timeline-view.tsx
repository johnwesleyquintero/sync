"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

interface TimelineItem {
  id: string
  title: string
  description: string
  startDate: string
  endDate: string
  status: "planned" | "in-progress" | "completed"
  assignee: {
    name: string
    avatar: string
    initials: string
  }
}

export function TimelineView() {
  const [timelineItems] = useState<TimelineItem[]>([
    {
      id: "1",
      title: "Research & Planning",
      description: "Initial project research and planning phase",
      startDate: "2023-10-01",
      endDate: "2023-10-15",
      status: "completed",
      assignee: {
        name: "Sarah Williams",
        avatar: "/placeholder.svg",
        initials: "SW"
      }
    },
    {
      id: "2",
      title: "Design Phase",
      description: "UI/UX design and prototyping",
      startDate: "2023-10-16",
      endDate: "2023-10-31",
      status: "in-progress",
      assignee: {
        name: "Michael Brown",
        avatar: "/placeholder.svg",
        initials: "MB"
      }
    },
    {
      id: "3",
      title: "Development",
      description: "Frontend and backend implementation",
      startDate: "2023-11-01",
      endDate: "2023-11-30",
      status: "planned",
      assignee: {
        name: "Emily Davis",
        avatar: "/placeholder.svg",
        initials: "ED"
      }
    }
  ])

  const getStatusColor = (status: TimelineItem['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500'
      case 'in-progress':
        return 'bg-blue-500'
      default:
        return 'bg-gray-300'
    }
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Project Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[500px] pr-4">
          <div className="space-y-8">
            {timelineItems.map((item, index) => (
              <div key={item.id} className="relative flex gap-6">
                <div className="flex flex-col items-center">
                  <div className={`h-3 w-3 rounded-full ${getStatusColor(item.status)}`} />
                  {index !== timelineItems.length - 1 && (
                    <div className="h-full w-px bg-border" />
                  )}
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium leading-none">{item.title}</h4>
                      <Badge
                        variant="secondary"
                        className={`${item.status === 'completed' ? 'bg-green-100 text-green-800' : 
                          item.status === 'in-progress' ? 'bg-blue-100 text-blue-800' : 
                          'bg-gray-100 text-gray-800'}`}
                      >
                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={item.assignee.avatar} alt={item.assignee.name} />
                        <AvatarFallback>{item.assignee.initials}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-muted-foreground">{item.assignee.name}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span>Start: {new Date(item.startDate).toLocaleDateString()}</span>
                    <span>End: {new Date(item.endDate).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}