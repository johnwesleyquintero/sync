"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Clock, Calendar } from "lucide-react"

export function ProjectOverview() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle>Project Overview</CardTitle>
          <Badge>Active</Badge>
        </div>
        <CardDescription>Website Redesign</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div className="text-muted-foreground">Progress</div>
              <div className="font-medium">68%</div>
            </div>
            <Progress value={68} className="h-2" />
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <div className="text-xs">
                <p className="text-muted-foreground">Time Spent</p>
                <p className="font-medium">42h 30m</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <div className="text-xs">
                <p className="text-muted-foreground">Due Date</p>
                <p className="font-medium">Oct 28, 2023</p>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <div className="text-sm font-medium">Recent Milestones</div>
            <ul className="mt-2 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span>Wireframes completed</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span>Design system created</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-amber-500" />
                <span>Frontend development</span>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
