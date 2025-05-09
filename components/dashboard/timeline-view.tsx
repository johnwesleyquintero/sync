"use client"

import { Task } from "@/lib/types/task"
import { useThemeContext } from "@/lib/theme-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export function TimelineView({ tasks }: { tasks: Task[] }) {
  const { currentTheme } = useThemeContext()
  
  const ganttData = tasks.map(task => ({
    name: task.title,
    start: new Date(task.dueDate),
    end: new Date(new Date(task.dueDate).setDate(new Date(task.dueDate).getDate() + 3)),
    status: task.status
  }))

  return (
    <Card className="border-0 shadow-none">
      <CardHeader>
        <CardTitle>Project Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={ganttData}
              layout="vertical"
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={['dataMin', 'dataMax']} />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Bar 
                dataKey="start" 
                fill={`var(--theme-${currentTheme}-accent)`}
                stackId="a" 
              />
              <Bar 
                dataKey="end" 
                fill={`var(--theme-${currentTheme}-primary)`}
                stackId="a" 
              />
            </BarChart>
          </ResponsiveContainer>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}