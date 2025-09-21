import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar/sidebar" 
import DashboardNavbar from "@/components/sidebar/dashboardNavbar" // Fixed import path
import { SectionCards } from "@/components/section-cards"
import { DataTable } from "@/components/data-table"

import data from "./data.json"

export default function Dashboard() {
  return (
    <div>
      {/* Global dashboard navbar - spans full width  */}
     
       <DashboardNavbar />

   <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                <SectionCards />
              <DataTable data={data} />
              </div>
            </div>
          </div>

      {/* Sidebar + main content container   <SidebarProvider>
        <div className="flex min-h-[calc(100vh-4rem)]">
        
          <AppSidebar />
          
         
        </div>
      </SidebarProvider>
 */}

    
      
    </div>
  )
}