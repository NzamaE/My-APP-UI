// src/components/Dashboard/DashboardNavbar.jsx

import {
  CompassIcon,
  FeatherIcon,
  HouseIcon,
  PlusIcon,
  SearchIcon,
} from "lucide-react"

import NotificationMenu from "@/components/notification-menu"
//Side bar
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar/sidebar"


import TeamSwitcher from "@/components/team-switcher"
import UserMenu from "@/components/user-menu"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const teams = ["Acme Inc.", "Origin UI", "Junon"]

const navigationLinks = [
  { href: "#", label: "Dashboard", icon: HouseIcon },
  { href: "#", label: "Explore", icon: CompassIcon },
  { href: "#", label: "Write", icon: FeatherIcon },
  { href: "#", label: "Search", icon: SearchIcon },
]

export default function DashboardNavbar() {
  return (
    <header  className="sticky top-0 z-100 border-b px-4 md:px-2 bg-background">
      <div className="flex h-12 items-left justify-between gap-5">
      
        {/* Left side */}
        <SidebarProvider>
        <div className="flex min-h-[calc(100vh-4rem)]">
          <AppSidebar />
        </div>
      </SidebarProvider>


       
        {/* Middle area */}
        <NavigationMenu className="max-md:hidden">
          <NavigationMenuList className="gap-2">
            {navigationLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    href={link.href}
                    className="flex size-8 items-center justify-center p-1.5"
                    title={link.label}
                  >
                    <Icon aria-hidden="true" />
                    <span className="sr-only">{link.label}</span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side */}
        <div className="flex flex-1 items-center justify-end gap-4">
          <Button size="sm" className="text-sm max-sm:aspect-square max-sm:p-0">
            <PlusIcon
              className="opacity-60 sm:-ms-1"
              size={16}
              aria-hidden="true"
            />
            <span className="max-sm:sr-only">Log Actvity</span>
          </Button>
          <NotificationMenu />
          <UserMenu />
        </div>
      </div>
    </header>
  )
}
