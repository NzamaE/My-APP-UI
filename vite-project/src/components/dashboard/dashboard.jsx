// src/components/Dashboard/dashboard.jsx
import { Button } from "@/components/ui/button"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar/sidebar" // adjust path if needed

export default function Dashboard() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main content */}
        <div className="flex-1 bg-muted/20 p-6">
          {/* Top bar with trigger */}
          <header className="flex items-center justify-between border-b pb-4 mb-6">
            <div className="flex items-center gap-2">
              <SidebarTrigger /> {/* 👈 toggle button */}
              <h1 className="text-2xl font-bold">Dashboard</h1>
            </div>
            <Button variant="outline">Settings</Button>
          </header>

          {/* Content grid */}
          <main className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <p className="text-muted-foreground">Empty Widget</p>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
