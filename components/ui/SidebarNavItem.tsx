"use client"

import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import Link from "next/link"

interface SidebarNavItemProps {
  href: string
  icon: React.ComponentType<{ className?: string }>
  label: string
  children?: React.ReactNode
}

export function SidebarNavItem({ href, icon: Icon, label, children }: SidebarNavItemProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild isActive={isActive}>
        <Link href={href}>
          <Icon className="h-4 w-4" />
          <span>{label}</span>
          {children}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}