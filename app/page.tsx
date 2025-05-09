import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { ProjectOverview } from "@/components/dashboard/project-overview"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { TeamMembers } from "@/components/dashboard/team-members"
import { TaskBoard } from "@/components/dashboard/task-board"
import { ProjectMetrics } from "@/components/dashboard/project-metrics"

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard" text="Welcome back to Sync. Here's an overview of your projects." />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ProjectOverview />
        <ProjectMetrics />
        <TeamMembers />
      </div>
      <div className="mt-6">
        <TaskBoard />
      </div>
      <div className="mt-6">
        <RecentActivity />
      </div>
    </DashboardShell>
  )
}
