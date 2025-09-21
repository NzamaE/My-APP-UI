// src/pages/Dashboard.jsx
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar/sidebar" 
import DashboardNavbar from "@/components/sidebar/dashboardNavbar"
import { SectionCards } from "@/components/section-cards"
import { DataTable } from "@/components/data-table"

export default function Dashboard() {
  const handleAddActivity = () => {
    // This will be handled by the navbar button
    console.log("Add activity triggered from table")
  }

  const handleEditActivity = (activity) => {
    // Handle editing activity
    console.log("Edit activity:", activity)
  }

  return (
    <div>
      <DashboardNavbar />

      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <SectionCards />
            <DataTable 
              onAddActivity={handleAddActivity}
              onEditActivity={handleEditActivity}
            />
          </div>
        </div>
      </div>
    </div>
  )
}