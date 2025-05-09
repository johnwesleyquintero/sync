"use client"

import { Task } from "@/lib/types/task"
import { TaskCard } from "./task-card"

type TaskListProps = {
  tasks: Task[]
}

export function TaskList({ tasks }: TaskListProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} provided={undefined} snapshot={undefined} />
      ))}
    </div>
  )
}