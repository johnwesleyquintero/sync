"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Settings2 } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

interface DashboardSettings {
  showProjectOverview: boolean
  showTaskBoard: boolean
  showRecentActivity: boolean
  showTeamMembers: boolean
}

export function DashboardSettings() {
  const [settings, setSettings] = useState<DashboardSettings>({
    showProjectOverview: true,
    showTaskBoard: true,
    showRecentActivity: true,
    showTeamMembers: true,
  })

  const handleSettingChange = (setting: keyof DashboardSettings) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting],
    }))
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Settings2 className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Dashboard Settings</SheetTitle>
          <SheetDescription>
            Customize your dashboard layout and visible components.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center space-x-4">
            <Switch
              id="project-overview"
              checked={settings.showProjectOverview}
              onCheckedChange={() => handleSettingChange("showProjectOverview")}
            />
            <Label htmlFor="project-overview">Show Project Overview</Label>
          </div>
          <div className="flex items-center space-x-4">
            <Switch
              id="task-board"
              checked={settings.showTaskBoard}
              onCheckedChange={() => handleSettingChange("showTaskBoard")}
            />
            <Label htmlFor="task-board">Show Task Board</Label>
          </div>
          <div className="flex items-center space-x-4">
            <Switch
              id="recent-activity"
              checked={settings.showRecentActivity}
              onCheckedChange={() => handleSettingChange("showRecentActivity")}
            />
            <Label htmlFor="recent-activity">Show Recent Activity</Label>
          </div>
          <div className="flex items-center space-x-4">
            <Switch
              id="team-members"
              checked={settings.showTeamMembers}
              onCheckedChange={() => handleSettingChange("showTeamMembers")}
            />
            <Label htmlFor="team-members">Show Team Members</Label>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}