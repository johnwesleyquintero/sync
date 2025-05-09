"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PlusCircle, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Task {
  id: string
  title: string
  description: string
  priority: "low" | "medium" | "high"
  assignee: {
    name: string
    avatar: string
    initials: string
  }
  status: "todo" | "in-progress" | "review" | "done"
  dueDate: string
}

export function TaskBoard() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "task-1",
      title: "Design homepage wireframes",
      description: "Create wireframes for the new homepage design",
      priority: "high",
      assignee: {
        name: "Sarah Williams",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "SW",
      },
      status: "todo",
      dueDate: "Oct 25",
    },
    {
      id: "task-2",
      title: "Implement authentication",
      description: "Set up user authentication with Supabase",
      priority: "high",
      assignee: {
        name: "Michael Brown",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "MB",
      },
      status: "in-progress",
      dueDate: "Oct 27",
    },
    {
      id: "task-3",
      title: "Create component library",
      description: "Build reusable UI components with Shadcn",
      priority: "medium",
      assignee: {
        name: "Sarah Williams",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "SW",
      },
      status: "in-progress",
      dueDate: "Oct 30",
    },
    {
      id: "task-4",
      title: "API integration",
      description: "Connect frontend to backend services",
      priority: "medium",
      assignee: {
        name: "Michael Brown",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "MB",
      },
      status: "review",
      dueDate: "Nov 2",
    },
    {
      id: "task-5",
      title: "Write documentation",
      description: "Document API endpoints and usage",
      priority: "low",
      assignee: {
        name: "Emily Davis",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "ED",
      },
      status: "done",
      dueDate: "Oct 20",
    },
    {
      id: "task-6",
      title: "User testing",
      description: "Conduct user testing sessions",
      priority: "high",
      assignee: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "AJ",
      },
      status: "done",
      dueDate: "Oct 18",
    },
  ])

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
      case "medium":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
      case "low":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
      default:
        return "bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-400"
    }
  }

  const getStatusTasks = (status: string) => {
    return tasks.filter((task) => task.status === status)
  }

  return (
    <Card className="bg-white shadow-none border-0">
      <CardHeader className="pb-4 px-6 pt-6">
        <div className="flex items-center justify-between space-x-4">
          <div className="space-y-1">
            <CardTitle className="text-lg font-semibold text-gray-900">Task Board</CardTitle>
            <CardDescription className="text-sm text-gray-500">Manage and track your tasks</CardDescription>
          </div>
          <Button size="sm" variant="outline" className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Task
          </Button>
        </div>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        <Tabs defaultValue="board" className="w-full">
          <TabsList className="mb-6 bg-gray-50 p-1 rounded-lg">
            <TabsTrigger value="board" className="px-4 py-1.5 text-sm font-medium rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm">Board</TabsTrigger>
            <TabsTrigger value="list" className="px-4 py-1.5 text-sm font-medium rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm">List</TabsTrigger>
            <TabsTrigger value="timeline" className="px-4 py-1.5 text-sm font-medium rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm">Timeline</TabsTrigger>
          </TabsList>

          <TabsContent value="board" className="mt-0">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* To Do Column */}
              <div className="space-y-4">
                <div className="font-medium text-sm flex items-center">
                  <span className="mr-2 h-2 w-2 rounded-full bg-slate-400"></span>
                  To Do ({getStatusTasks("todo").length})
                </div>

                {getStatusTasks("todo").map((task) => (
                  <Card key={task.id} className="shadow-sm border border-gray-200">
                    <CardContent className="p-4">
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
                ))}
              </div>

              {/* In Progress Column */}
              <div className="space-y-4">
                <div className="font-medium text-sm flex items-center">
                  <span className="mr-2 h-2 w-2 rounded-full bg-amber-500"></span>
                  In Progress ({getStatusTasks("in-progress").length})
                </div>

                {getStatusTasks("in-progress").map((task) => (
                  <Card key={task.id} className="shadow-sm border border-gray-200">
                    <CardContent className="p-4">
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
                ))}
              </div>

              {/* Review Column */}
              <div className="space-y-4">
                <div className="font-medium text-sm flex items-center">
                  <span className="mr-2 h-2 w-2 rounded-full bg-purple-500"></span>
                  Review ({getStatusTasks("review").length})
                </div>

                {getStatusTasks("review").map((task) => (
                  <Card key={task.id} className="shadow-sm border border-gray-200">
                    <CardContent className="p-4">
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
                ))}
              </div>

              {/* Done Column */}
              <div className="space-y-4">
                <div className="font-medium text-sm flex items-center">
                  <span className="mr-2 h-2 w-2 rounded-full bg-green-500"></span>
                  Done ({getStatusTasks("done").length})
                </div>

                {getStatusTasks("done").map((task) => (
                  <Card key={task.id} className="shadow-sm border border-gray-200">
                    <CardContent className="p-4">
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
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="list" className="mt-0">
            <div className="rounded-md border">
              <div className="grid grid-cols-12 border-b p-3 text-sm font-medium">
                <div className="col-span-6">Task</div>
                <div className="col-span-2">Assignee</div>
                <div className="col-span-2">Priority</div>
                <div className="col-span-2">Due Date</div>
              </div>
              {tasks.map((task) => (
                <div key={task.id} className="grid grid-cols-12 items-center border-b p-3 text-sm last:border-0">
                  <div className="col-span-6">
                    <div className="font-medium">{task.title}</div>
                    <div className="text-xs text-muted-foreground">{task.description}</div>
                  </div>
                  <div className="col-span-2">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={task.assignee.avatar || "/placeholder.svg"} alt={task.assignee.name} />
                        <AvatarFallback>{task.assignee.initials}</AvatarFallback>
                      </Avatar>
                      <span className="text-xs">{task.assignee.name}</span>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <Badge className={getPriorityColor(task.priority)} variant="secondary">
                      {task.priority}
                    </Badge>
                  </div>
                  <div className="col-span-2 text-xs">{task.dueDate}</div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="timeline" className="mt-0">
            <div className="flex justify-center items-center p-8 text-center">
              <div className="max-w-md">
                <h3 className="text-lg font-medium">Timeline View Coming Soon</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  We're working on a Gantt chart timeline view for better project visualization. Stay tuned!
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
