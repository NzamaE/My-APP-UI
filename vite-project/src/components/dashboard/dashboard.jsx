import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar/sidebar" 
import DashboardNavbar from "@/components/sidebar/dashboardNavbar" // Fixed import path

export default function Dashboard() {
  return (
    <div className="min-h-screen w-full">
      {/* Global dashboard navbar - spans full width */}
      <DashboardNavbar />
      
      {/* Sidebar + main content container */}
      <SidebarProvider>
        <div className="flex min-h-[calc(100vh-4rem)]">
          {/* Sidebar */}
          <AppSidebar />
          
         
        </div>
      </SidebarProvider>

      
    </div>
  )
}