import { Construction } from "lucide-react"

export default function MaintenanceOverlay() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-200/60 dark:bg-slate-900/60 backdrop-blur-lg p-4">
      <div className="bg-card/90 border border-border p-8 md:p-12 rounded-xl shadow-2xl text-center max-w-lg mx-auto">
        <div className="flex justify-center mb-6">
          <Construction className="h-16 w-16 text-primary" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Under Maintenance</h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-1">
          Our website is currently undergoing scheduled maintenance.
        </p>
        <p className="text-lg md:text-xl text-muted-foreground">We'll be back soon!</p>
      </div>
    </div>
  )
}
