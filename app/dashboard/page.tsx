"use client"

import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { ProjectOverview } from "@/components/dashboard/project-overview"
import { TaskBoard } from "@/components/dashboard/task-board"
import { DashboardSettings } from "@/components/dashboard/dashboard-settings"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const DashboardPage = () => {
  return (
    <DashboardShell>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Dashboard</CardTitle>
              <DashboardSettings />
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="overview" className="space-y-4">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="tasks">Tasks</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4">
                <ProjectOverview />
              </TabsContent>
              <TabsContent value="tasks">
                <TaskBoard />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}

export default DashboardPage;
