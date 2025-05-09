"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { motion } from "framer-motion"
import { Task } from "@/lib/types/task"

interface TaskCardProps {
  task: Task
  provided: any
  snapshot: any
}

import { themeColors } from '@/lib/theme-config';

export function TaskCard({ task, provided, snapshot }: TaskCardProps) {

const getPriorityColor = (priority: string, theme: keyof typeof themeColors) => {
  const colors = themeColors[theme];
  switch (priority) {
    case "high":
      return `bg-${colors.accent}-100 text-${colors.accent}-800 dark:bg-${colors.accent}-900/30 dark:text-${colors.accent}-400`
    case "medium":
      return `bg-${colors.secondary}-100 text-${colors.secondary}-800 dark:bg-${colors.secondary}-900/30 dark:text-${colors.secondary}-400`
    case "low":
      return `bg-${colors.primary}-100 text-${colors.primary}-800 dark:bg-${colors.primary}-900/30 dark:text-${colors.primary}-400`
    default:
      return `bg-${colors.primary}-100 text-${colors.primary}-800 dark:bg-${colors.primary}-900/30 dark:text-${colors.primary}-400`
  }
}

  return (
    <motion.div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      style={provided.draggableProps.style}
      animate={{
        scale: snapshot.isDragging ? 1.05 : 1,
        boxShadow: snapshot.isDragging
          ? "0 8px 16px rgba(0,0,0,0.1)"
          : "none",
      }}
    >
      <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
        <CardContent className="p-3">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Badge className={getPriorityColor(task.priority)} variant="secondary">
                {task.priority}
              </Badge>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Move</DropdownMenuItem>
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div>
              <h3 className="font-medium">{task.title}</h3>
              <p className="text-sm text-muted-foreground">{task.description}</p>
            </div>
            <div className="flex items-center justify-between">
              <Avatar className="h-6 w-6">
                <AvatarImage src={task.assignee.avatar || "/placeholder.svg"} alt={task.assignee.name} />
                <AvatarFallback>{task.assignee.initials}</AvatarFallback>
              </Avatar>
              <span className="text-xs text-muted-foreground">Due {task.dueDate}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}