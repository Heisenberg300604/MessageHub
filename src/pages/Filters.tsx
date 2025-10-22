import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { 
  Filter, 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Star, 
  Clock,
  MessageCircle,
  Users,
  Settings
} from "lucide-react";

interface SmartFilter {
  id: string;
  name: string;
  description: string;
  criteria: string;
  platform: string;
  isActive: boolean;
  messagesMatched: number;
  lastTriggered: string;
}

const mockFilters: SmartFilter[] = [
  {
    id: '1',
    name: 'Priority Clients',
    description: 'Messages from top-tier clients and VIP contacts',
    criteria: 'Contact in "VIP" list OR message contains "urgent"',
    platform: 'All',
    isActive: true,
    messagesMatched: 47,
    lastTriggered: '2 hours ago'
  },
  {
    id: '2',
    name: 'Project Updates',
    description: 'Messages containing project-related keywords',
    criteria: 'Message contains "project", "deadline", "update", or "milestone"',
    platform: 'LinkedIn',
    isActive: true,
    messagesMatched: 23,
    lastTriggered: '5 hours ago'
  },
  {
    id: '3',
    name: 'Meeting Requests',
    description: 'Automatically detect meeting and call requests',
    criteria: 'Message contains "meeting", "call", "schedule", or "appointment"',
    platform: 'All',
    isActive: false,
    messagesMatched: 12,
    lastTriggered: '1 day ago'
  },
  {
    id: '4',
    name: 'Sales Inquiries',
    description: 'Potential sales leads and business inquiries',
    criteria: 'Message contains "price", "quote", "purchase", or "interested"',
    platform: 'WhatsApp',
    isActive: true,
    messagesMatched: 18,
    lastTriggered: '3 hours ago'
  }
];

const filterTemplates = [
  { name: 'Priority Messages', description: 'Messages marked as high priority' },
  { name: 'Unread Messages', description: 'All unread messages across platforms' },
  { name: 'Recent Contacts', description: 'Messages from recently added contacts' },
  { name: 'Media Messages', description: 'Messages containing images or files' },
  { name: 'Group Messages', description: 'Messages from group conversations' }
];

export default function Filters() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState(mockFilters);

  const filteredFilters = filters.filter(filter =>
    filter.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    filter.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFilter = (id: string) => {
    setFilters(filters.map(filter => 
      filter.id === id ? { ...filter, isActive: !filter.isActive } : filter
    ));
  };

  const getPlatformColor = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'whatsapp': return 'platform-whatsapp';
      case 'linkedin': return 'platform-linkedin';
      case 'instagram': return 'platform-instagram';
      case 'telegram': return 'platform-telegram';
      case 'email': return 'platform-email';
      default: return 'bg-muted';
    }
  };

  return (
    <DashboardLayout title="Smart Filters">
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="p-4 md:p-6 border-b bg-surface/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Smart Filters</h1>
              <p className="text-muted-foreground mt-1">
                Automatically organize and prioritize your messages
              </p>
            </div>
            
            <Button className="gap-2 w-full md:w-auto">
              <Plus className="w-4 h-4" />
              Create Filter
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6 space-y-6">
          {/* Search and Controls */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search filters..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-full md:w-[140px]">
                  <SelectValue placeholder="Platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Platforms</SelectItem>
                  <SelectItem value="whatsapp">WhatsApp</SelectItem>
                  <SelectItem value="linkedin">LinkedIn</SelectItem>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="telegram">Telegram</SelectItem>
                </SelectContent>
              </Select>
              
              <Select defaultValue="active">
                <SelectTrigger className="w-full md:w-[120px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Filters</SelectItem>
                  <SelectItem value="active">Active Only</SelectItem>
                  <SelectItem value="inactive">Inactive Only</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Filter Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="glass">
              <CardContent className="p-4 text-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Filter className="w-5 h-5 text-primary" />
                </div>
                <div className="text-2xl font-bold">{filters.length}</div>
                <div className="text-sm text-muted-foreground">Total Filters</div>
              </CardContent>
            </Card>
            
            <Card className="glass">
              <CardContent className="p-4 text-center">
                <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Star className="w-5 h-5 text-success" />
                </div>
                <div className="text-2xl font-bold">{filters.filter(f => f.isActive).length}</div>
                <div className="text-sm text-muted-foreground">Active</div>
              </CardContent>
            </Card>
            
            <Card className="glass">
              <CardContent className="p-4 text-center">
                <div className="w-10 h-10 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <MessageCircle className="w-5 h-5 text-warning" />
                </div>
                <div className="text-2xl font-bold">
                  {filters.reduce((sum, f) => sum + f.messagesMatched, 0)}
                </div>
                <div className="text-sm text-muted-foreground">Messages Filtered</div>
              </CardContent>
            </Card>
            
            <Card className="glass">
              <CardContent className="p-4 text-center">
                <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Clock className="w-5 h-5 text-secondary" />
                </div>
                <div className="text-2xl font-bold">2.5h</div>
                <div className="text-sm text-muted-foreground">Time Saved</div>
              </CardContent>
            </Card>
          </div>

          {/* Active Filters */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Your Filters</h2>
            
            {filteredFilters.length === 0 ? (
              <Card className="glass">
                <CardContent className="p-8 text-center">
                  <Filter className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No filters found</h3>
                  <p className="text-muted-foreground mb-4">
                    Create your first smart filter to automatically organize your messages.
                  </p>
                  <Button className="gap-2">
                    <Plus className="w-4 h-4" />
                    Create Filter
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {filteredFilters.map((filter) => (
                  <Card key={filter.id} className="glass hover-lift">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold text-lg">{filter.name}</h3>
                            <Badge 
                              variant="secondary" 
                              className={`text-xs ${getPlatformColor(filter.platform)}`}
                            >
                              {filter.platform}
                            </Badge>
                            <Badge 
                              variant={filter.isActive ? "default" : "secondary"}
                              className="text-xs"
                            >
                              {filter.isActive ? "Active" : "Inactive"}
                            </Badge>
                          </div>
                          
                          <p className="text-muted-foreground mb-3">{filter.description}</p>
                          
                          <div className="text-sm text-muted-foreground mb-3">
                            <strong>Criteria:</strong> {filter.criteria}
                          </div>
                          
                          <div className="flex items-center gap-4 text-sm">
                            <span className="flex items-center gap-1">
                              <MessageCircle className="w-4 h-4" />
                              {filter.messagesMatched} matched
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {filter.lastTriggered}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <Switch
                            checked={filter.isActive}
                            onCheckedChange={() => toggleFilter(filter.id)}
                          />
                          <Button variant="ghost" size="icon">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Quick Templates */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Quick Templates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filterTemplates.map((template) => (
                <Card key={template.name} className="glass hover-lift cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Settings className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{template.name}</h3>
                        <p className="text-sm text-muted-foreground">{template.description}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full gap-2 mt-3">
                      <Plus className="w-4 h-4" />
                      Use Template
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}