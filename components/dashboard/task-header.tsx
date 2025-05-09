"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { type ProjectType } from "@/lib/theme-config"

type TaskHeaderProps = {
  selectedTheme: ProjectType
  onThemeChange: (theme: ProjectType) => void
}

export function TaskHeader({ selectedTheme, onThemeChange }: TaskHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-xl font-semibold">Task Board</h2>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm">
            Theme
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => onThemeChange('default')}>
            Default
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onThemeChange('development')}>
            Development
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onThemeChange('design')}>
            Design
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onThemeChange('marketing')}>
            Marketing
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}