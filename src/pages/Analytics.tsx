import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { 
  TrendingUp, 
  TrendingDown, 
  MessageCircle, 
  Users, 
  Clock, 
  BarChart3,
  Calendar,
  Download
} from "lucide-react";

const mockAnalytics = {
  totalMessages: 2847,
  messageGrowth: 12.5,
  activeContacts: 156,
  contactGrowth: -2.3,
  avgResponseTime: "2m 30s",
  responseImprovement: 15.2,
  platformStats: [
    { name: "WhatsApp", count: 1243, percentage: 43.7, color: "whatsapp" },
    { name: "LinkedIn", count: 687, percentage: 24.1, color: "linkedin" },
    { name: "Email", count: 542, percentage: 19.0, color: "email" },
    { name: "Instagram", count: 234, percentage: 8.2, color: "instagram" },
    { name: "Telegram", count: 141, percentage: 5.0, color: "telegram" }
  ],
  weeklyData: [
    { day: "Mon", messages: 142 },
    { day: "Tue", messages: 186 },
    { day: "Wed", messages: 234 },
    { day: "Thu", messages: 198 },
    { day: "Fri", messages: 276 },
    { day: "Sat", messages: 89 },
    { day: "Sun", messages: 67 }
  ],
  topContacts: [
    { name: "Sarah Chen", messages: 48, platform: "LinkedIn", avatar: "" },
    { name: "Alex Johnson", messages: 42, platform: "WhatsApp", avatar: "" },
    { name: "Maria Lopez", messages: 38, platform: "Email", avatar: "" },
    { name: "David Kim", messages: 34, platform: "Instagram", avatar: "" },
    { name: "Emma Brown", messages: 29, platform: "Telegram", avatar: "" }
  ]
};

export default function Analytics() {
  const StatCard = ({ 
    title, 
    value, 
    change, 
    icon: Icon, 
    isPositive 
  }: {
    title: string;
    value: string | number;
    change: number;
    icon: any;
    isPositive: boolean;
  }) => (
    <Card className="glass hover-lift">
      <CardContent className="p-4 md:p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-1">{title}</p>
            <div className="flex items-center gap-2">
              <span className="text-2xl md:text-3xl font-bold">{value}</span>
              <Badge 
                variant="secondary" 
                className={`text-xs ${isPositive ? 'text-success bg-success/10' : 'text-destructive bg-destructive/10'}`}
              >
                {isPositive ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                {Math.abs(change)}%
              </Badge>
            </div>
          </div>
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <DashboardLayout title="Analytics">
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="p-4 md:p-6 border-b bg-surface/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Analytics Dashboard</h1>
              <p className="text-muted-foreground mt-1">
                Track your communication patterns and engagement metrics
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Calendar className="w-4 h-4" />
                <span className="hidden sm:inline">Last 30 days</span>
              </Button>
              <Button size="sm" className="gap-2">
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Export</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6 space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <StatCard
              title="Total Messages"
              value={mockAnalytics.totalMessages.toLocaleString()}
              change={mockAnalytics.messageGrowth}
              icon={MessageCircle}
              isPositive={mockAnalytics.messageGrowth > 0}
            />
            <StatCard
              title="Active Contacts"
              value={mockAnalytics.activeContacts}
              change={mockAnalytics.contactGrowth}
              icon={Users}
              isPositive={mockAnalytics.contactGrowth > 0}
            />
            <StatCard
              title="Avg Response Time"
              value={mockAnalytics.avgResponseTime}
              change={mockAnalytics.responseImprovement}
              icon={Clock}
              isPositive={mockAnalytics.responseImprovement > 0}
            />
          </div>

          {/* Platform Distribution & Weekly Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Platform Distribution */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Platform Distribution
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockAnalytics.platformStats.map((platform) => (
                  <div key={platform.name} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{platform.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">{platform.count}</span>
                        <span className="font-medium">{platform.percentage}%</span>
                      </div>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full platform-${platform.color.toLowerCase()}`}
                        style={{ width: `${platform.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Weekly Activity */}
            <Card className="glass">
              <CardHeader>
                <CardTitle>Weekly Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between h-40 gap-2">
                  {mockAnalytics.weeklyData.map((day) => (
                    <div key={day.day} className="flex flex-col items-center gap-2 flex-1">
                      <div className="text-xs text-muted-foreground font-medium">
                        {day.messages}
                      </div>
                      <div 
                        className="w-full bg-gradient-to-t from-primary to-primary-light rounded-t"
                        style={{ height: `${(day.messages / 300) * 100}%`, minHeight: '8px' }}
                      />
                      <div className="text-xs font-medium">{day.day}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Contacts */}
          <Card className="glass">
            <CardHeader>
              <CardTitle>Most Active Contacts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockAnalytics.topContacts.map((contact, index) => (
                  <div key={contact.name} className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface/50 transition-colors">
                    <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center font-semibold text-sm">
                      {contact.name[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium">{contact.name}</div>
                      <div className="text-sm text-muted-foreground">{contact.platform}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {contact.messages} msgs
                      </Badge>
                      <span className="text-2xl font-bold text-muted-foreground">
                        #{index + 1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}