"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Clock, AlertCircle } from "lucide-react"

export function ProjectMetrics() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Project Metrics</CardTitle>
        <CardDescription>Task completion status</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex items-center gap-4 rounded-lg border p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <div className="text-xl font-bold">24</div>
              <div className="text-sm text-muted-foreground">Completed Tasks</div>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-lg border p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
              <Clock className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <div className="text-xl font-bold">18</div>
              <div className="text-sm text-muted-foreground">In Progress</div>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-lg border p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
              <AlertCircle className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <div className="text-xl font-bold">7</div>
              <div className="text-sm text-muted-foreground">Overdue Tasks</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
