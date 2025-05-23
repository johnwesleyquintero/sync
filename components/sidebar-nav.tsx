"use client"

import { usePathname } from "next/navigation"
import { Home, LayoutDashboard, Calendar, ListTodo, Users, BarChart, Settings, PlusCircle, Inbox } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { SidebarNavItem } from "./ui/SidebarNavItem"

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader className="border-b">
        <div className="flex items-center gap-2 px-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
            <span className="text-lg font-bold text-primary-foreground">S</span>
          </div>
          <span className="text-lg font-bold">Sync</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarNavItem href="/" icon={Home} label="Home" />
              <SidebarNavItem href="/dashboard" icon={LayoutDashboard} label="Dashboard" />
              <SidebarNavItem href="/tasks" icon={ListTodo} label="Tasks" />
              <SidebarNavItem href="/calendar" icon={Calendar} label="Calendar" />
              <SidebarNavItem href="/inbox" icon={Inbox} label="Inbox">
                <Badge className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground">
                  3
                </Badge>
              </SidebarNavItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarNavItem href="/projects/website-redesign" icon={() => <span className="h-2 w-2 rounded-full bg-blue-500" />} label="Website Redesign" />
              <SidebarNavItem href="/projects/mobile-app" icon={() => <span className="h-2 w-2 rounded-full bg-green-500" />} label="Mobile App" />
              <SidebarNavItem href="/projects/marketing-campaign" icon={() => <span className="h-2 w-2 rounded-full bg-purple-500" />} label="Marketing Campaign" />
              <SidebarMenuItem>
                <Button variant="ghost" className="w-full justify-start text-muted-foreground">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add Project
                </Button>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Team</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarNavItem href="/team" icon={Users} label="Members" />
              <SidebarNavItem href="/analytics" icon={BarChart} label="Analytics" />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="grid gap-0.5 text-xs">
              <div className="font-medium">John Doe</div>
              <div className="text-muted-foreground">john@example.com</div>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
            <span className="sr-only">Settings</span>
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
