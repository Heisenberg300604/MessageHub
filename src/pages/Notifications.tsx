import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Star, Bell, Check } from "lucide-react";

interface Notification {
  id: string;
  type: 'priority' | 'other';
  sender: string;
  senderAvatar: string;
  senderInitials: string;
  message: string;
  timestamp: string;
  platform?: string;
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'priority',
    sender: 'Alex',
    senderAvatar: '',
    senderInitials: 'A',
    message: 'Hey, just checking in. Let\'s discuss the project proposal this afternoon. It\'s urgent.',
    timestamp: '10:00 AM',
    platform: 'WhatsApp'
  },
  {
    id: '2',
    type: 'priority',
    sender: 'Sarah',
    senderAvatar: '',
    senderInitials: 'S',
    message: 'IMPORTANT: The client meeting has been moved to 3 PM. Please confirm.',
    timestamp: '10:05 AM',
    platform: 'Email'
  },
  {
    id: '3',
    type: 'other',
    sender: 'Team Updates',
    senderAvatar: '',
    senderInitials: 'TU',
    message: 'Weekly team sync scheduled for tomorrow at 2 PM',
    timestamp: '9:45 AM',
    platform: 'Slack'
  },
  {
    id: '4',
    type: 'other',
    sender: 'David',
    senderAvatar: '',
    senderInitials: 'D',
    message: 'Thanks for the quick turnaround on the designs!',
    timestamp: '9:30 AM',
    platform: 'LinkedIn'
  },
  {
    id: '5',
    type: 'other',
    sender: 'Emily',
    senderAvatar: '',
    senderInitials: 'E',
    message: 'Looking forward to our coffee chat next week',
    timestamp: 'Yesterday',
    platform: 'Instagram'
  }
];

export default function Notifications() {
  const [notifications] = useState(mockNotifications);

  const priorityNotifications = notifications.filter(n => n.type === 'priority');
  const otherNotifications = notifications.filter(n => n.type === 'other');

  return (
    <DashboardLayout title="Notifications">
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="p-4 md:p-6 border-b bg-surface/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">Notifications</h1>
              <p className="text-muted-foreground mt-1">
                Stay updated with your important messages
              </p>
            </div>
            
            <Button variant="outline" className="gap-2 w-full md:w-auto">
              <Check className="w-4 h-4" />
              Mark All Read
            </Button>
          </div>
        </div>

        {/* Notifications Content */}
        <div className="p-4 md:p-6 space-y-6">
          {/* Priority Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-warning fill-warning" />
              <h2 className="text-lg font-semibold text-foreground">Priority</h2>
              <Badge variant="secondary" className="bg-warning/10 text-warning">
                {priorityNotifications.length}
              </Badge>
            </div>

            <div className="space-y-3">
              {priorityNotifications.map((notification) => (
                <Card key={notification.id} className="glass hover-lift cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Avatar className="h-10 w-10 flex-shrink-0">
                        <AvatarImage src={notification.senderAvatar} />
                        <AvatarFallback className="font-semibold bg-primary text-primary-foreground">
                          {notification.senderInitials}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-foreground">
                            New message from {notification.sender}
                          </h3>
                          <div className="flex items-center gap-2">
                            {notification.platform && (
                              <Badge variant="secondary" className="text-xs">
                                {notification.platform}
                              </Badge>
                            )}
                            <span className="text-xs text-muted-foreground flex-shrink-0">
                              {notification.timestamp}
                            </span>
                          </div>
                        </div>
                        
                        <div className="bg-warning/10 border border-warning/20 rounded-lg p-3">
                          <p className="text-sm text-foreground leading-relaxed">
                            {notification.message}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Other Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-lg font-semibold text-foreground">Other</h2>
              <Badge variant="secondary">
                {otherNotifications.length}
              </Badge>
            </div>
            
            <div className="space-y-3">
              {otherNotifications.map((notification) => (
                <Card key={notification.id} className="glass hover-lift cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Avatar className="h-10 w-10 flex-shrink-0">
                        <AvatarImage src={notification.senderAvatar} />
                        <AvatarFallback className="font-semibold bg-muted text-muted-foreground">
                          {notification.senderInitials}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-foreground">
                            New message from {notification.sender}
                          </h3>
                          <div className="flex items-center gap-2">
                            {notification.platform && (
                              <Badge variant="secondary" className="text-xs">
                                {notification.platform}
                              </Badge>
                            )}
                            <span className="text-xs text-muted-foreground flex-shrink-0">
                              {notification.timestamp}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-sm text-muted-foreground">
                          {notification.message}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Empty State */}
          {priorityNotifications.length === 0 && otherNotifications.length === 0 && (
            <Card className="glass">
              <CardContent className="p-8 text-center">
                <Bell className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">All caught up!</h3>
                <p className="text-muted-foreground">
                  You have no new notifications at the moment.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
