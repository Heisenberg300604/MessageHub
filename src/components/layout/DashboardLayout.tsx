import { ReactNode } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import MobileNav from "@/components/ui/mobile-nav";
import ThemeToggle from "@/components/ui/theme-toggle";

interface DashboardLayoutProps {
  children: ReactNode;
  title?: string;
}

export default function DashboardLayout({ children, title }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar isCollapsed={false} onToggle={() => {}} />
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between p-4 border-b bg-surface/30">
          <div className="flex items-center gap-3">
            <MobileNav />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">M</span>
              </div>
              <div>
                <h1 className="font-bold text-gradient">MessageHub</h1>
                {title && <p className="text-xs text-muted-foreground">{title}</p>}
              </div>
            </div>
          </div>
          <ThemeToggle />
        </header>
        
        {/* Page Content */}
        <main className="flex-1 overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}