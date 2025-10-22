import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  MessageCircle,
  Users,
  Settings,
  Bell,
  Star,
  Filter,
  Menu,
  X,
  Zap,
  BarChart3,
  Search
} from "lucide-react";

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

const navigationItems = [
  { 
    title: 'Unified Inbox', 
    href: '/dashboard', 
    icon: MessageCircle, 
    badge: 12,
    description: 'All conversations'
  },
  { 
    title: 'Priority Contacts', 
    href: '/contacts', 
    icon: Star, 
    badge: 3,
    description: 'Important people'
  },
  { 
    title: 'Smart Filters', 
    href: '/filters', 
    icon: Filter, 
    badge: null,
    description: 'Custom rules'
  },
  { 
    title: 'Analytics', 
    href: '/analytics', 
    icon: BarChart3, 
    badge: null,
    description: 'Message insights'
  },
  { 
    title: 'Notifications', 
    href: '/notifications', 
    icon: Bell, 
    badge: 2,
    description: 'Alert settings'
  },
  { 
    title: 'Settings', 
    href: '/settings', 
    icon: Settings, 
    badge: null,
    description: 'Preferences'
  }
];

const priorityContacts = [
  { name: 'Sarah Johnson', avatar: '', initials: 'SJ', status: 'online' },
  { name: 'Alex Chen', avatar: '', initials: 'AC', status: 'away' },  
  { name: 'Emma Rodriguez', avatar: '', initials: 'ER', status: 'offline' },
  { name: 'Michael Brown', avatar: '', initials: 'MB', status: 'online' }
];

const platformStats = [
  { platform: 'WhatsApp', count: 5, color: 'bg-whatsapp' },
  { platform: 'LinkedIn', count: 3, color: 'bg-linkedin' },
  { platform: 'Email', count: 2, color: 'bg-email' },
  { platform: 'Telegram', count: 1, color: 'bg-telegram' },
  { platform: 'Instagram', count: 1, color: 'bg-instagram' }
];

export default function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
  const location = useLocation();
  const [quickSearch, setQuickSearch] = useState('');

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className={`h-screen bg-surface border-r flex flex-col transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-80'
    }`}>
      {/* Header */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-lg text-gradient">MessageHub</h1>
                <p className="text-xs text-muted-foreground">Unified Communication</p>
              </div>
            </div>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggle}
            className="h-8 w-8 p-0"
          >
            {isCollapsed ? <Menu className="w-4 h-4" /> : <X className="w-4 h-4" />}
          </Button>
        </div>
      </div>

      {/* Quick Search - Only when expanded */}
      {!isCollapsed && (
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              type="text"
              placeholder="Quick search..."
              value={quickSearch}
              onChange={(e) => setQuickSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-background border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto scrollbar-thin">
        <nav className="p-4 space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            
            return (
              <NavLink
                key={item.href}
                to={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all group relative ${
                  active 
                    ? 'bg-primary text-primary-foreground shadow-lg' 
                    : 'hover:bg-background text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon className={`w-5 h-5 flex-shrink-0 ${active ? 'text-primary-foreground' : ''}`} />
                
                {!isCollapsed && (
                  <>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">{item.title}</div>
                      <div className="text-xs opacity-75 truncate">{item.description}</div>
                    </div>
                    
                    {item.badge && (
                      <Badge 
                        variant={active ? "secondary" : "default"}
                        className="ml-auto flex-shrink-0 min-w-[1.5rem] h-6 px-2 text-xs"
                      >
                        {item.badge}
                      </Badge>
                    )}
                  </>
                )}

                {/* Tooltip for collapsed state */}
                {isCollapsed && (
                  <div className="absolute left-16 bg-popover text-popover-foreground px-2 py-1 rounded shadow-lg 
                                text-sm opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50">
                    {item.title}
                  </div>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Platform Stats - Only when expanded */}
        {!isCollapsed && (
          <div className="p-4 border-t">
            <h3 className="text-sm font-semibold text-muted-foreground mb-3 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Platform Activity
            </h3>
            <div className="space-y-2">
              {platformStats.map((stat) => (
                <div key={stat.platform} className="flex items-center justify-between py-1">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${stat.color}`} />
                    <span className="text-sm">{stat.platform}</span>
                  </div>
                  <Badge variant="outline" className="h-5 px-2 text-xs">
                    {stat.count}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Priority Contacts - Only when expanded */}
        {!isCollapsed && (
          <div className="p-4 border-t">
            <h3 className="text-sm font-semibold text-muted-foreground mb-3 flex items-center gap-2">
              <Star className="w-4 h-4" />
              Priority Contacts
            </h3>
            <div className="space-y-2">
              {priorityContacts.slice(0, 4).map((contact) => (
                <div key={contact.name} className="flex items-center gap-2 p-2 rounded-lg hover:bg-background cursor-pointer">
                  <div className="relative">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={contact.avatar} alt={contact.name} />
                      <AvatarFallback className="text-xs font-semibold">
                        {contact.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-surface ${
                      contact.status === 'online' ? 'bg-success' : 
                      contact.status === 'away' ? 'bg-warning' : 'bg-muted'
                    }`} />
                  </div>
                  <span className="text-sm font-medium truncate">{contact.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* User Profile - Only when expanded */}
      {!isCollapsed && (
        <div className="p-4 border-t">
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-background cursor-pointer">
            <Avatar className="h-10 w-10">
              <AvatarImage src="" alt="You" />
              <AvatarFallback className="font-semibold bg-gradient-to-br from-primary to-secondary text-white">
                You
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="font-medium truncate">Your Account</div>
              <div className="text-xs text-muted-foreground truncate">Premium Plan</div>
            </div>
            <Settings className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>
      )}
    </div>
  );
}