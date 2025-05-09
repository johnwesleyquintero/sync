import { useState } from 'react'
import { type Task } from '@/types/task'

type DragResult = {
  source: { index: number; droppableId: string }
  destination: { index: number; droppableId: string } | null
}

export const useTaskBoard = (initialTasks: Task[]) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)

  const handleDragEnd = (result: DragResult) => {
    if (!result.destination) return

    const sourceIndex = result.source.index
    const destIndex = result.destination.index
    const sourceStatus = result.source.droppableId
    const destStatus = result.destination.droppableId

    const tasksCopy = Array.from(tasks)
    const [movedTask] = tasksCopy.splice(sourceIndex, 1)
    
    // Update task status if moved to different column
    if (sourceStatus !== destStatus) {
      movedTask.status = destStatus as Task['status']
    }

    tasksCopy.splice(destIndex, 0, movedTask)
    setTasks(tasksCopy)
  }

  const getStatusTasks = (status: string) => {
    return tasks.filter((task) => task.status === status)
  }

  return {
    tasks,
    setTasks,
    handleDragEnd,
    getStatusTasks,
  }
}