export interface Task {
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