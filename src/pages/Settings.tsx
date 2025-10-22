import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ThemeToggle from "@/components/ui/theme-toggle";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { 
  User, 
  Bell, 
  Shield, 
  Smartphone, 
  Palette, 
  Database,
  Link,
  CheckCircle,
  AlertCircle,
  Settings as SettingsIcon,
  Save,
  Trash2
} from "lucide-react";

const connectedAccounts = [
  { 
    platform: 'WhatsApp', 
    status: 'connected', 
    email: '+1 (555) 123-4567',
    icon: '💬',
    color: 'whatsapp'
  },
  { 
    platform: 'LinkedIn', 
    status: 'connected', 
    email: 'john.doe@company.com',
    icon: '💼',
    color: 'linkedin'
  },
  { 
    platform: 'Email', 
    status: 'connected', 
    email: 'john.doe@gmail.com',
    icon: '📧',
    color: 'email'
  },
  { 
    platform: 'Instagram', 
    status: 'disconnected', 
    email: '@johndoe',
    icon: '📸',
    color: 'instagram'
  },
  { 
    platform: 'Telegram', 
    status: 'connected', 
    email: '@johndoe_tg',
    icon: '✈️',
    color: 'telegram'
  }
];

export default function Settings() {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@company.com',
    phone: '+1 (555) 123-4567',
    timezone: 'America/New_York'
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: true,
    priorityOnly: false,
    dailyDigest: true,
    weeklyReport: false,
    soundEnabled: true
  });

  const [privacy, setPrivacy] = useState({
    readReceipts: true,
    onlineStatus: true,
    profileVisibility: 'contacts',
    dataSharing: false,
    analyticsOptIn: true
  });

  const [preferences, setPreferences] = useState({
    language: 'en',
    dateFormat: 'MM/DD/YYYY',
    timeFormat: '12h',
    autoArchive: '30',
    defaultView: 'unified'
  });

  return (
    <DashboardLayout title="Settings">
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="p-4 md:p-6 border-b bg-surface/30">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Settings</h1>
              <p className="text-muted-foreground mt-1">
                Manage your account and application preferences
              </p>
            </div>
            
            <Button className="gap-2">
              <Save className="w-4 h-4" />
              <span className="hidden sm:inline">Save Changes</span>
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6 space-y-8">
          {/* Profile Settings */}
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Profile Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex flex-col items-center gap-4">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src="" />
                    <AvatarFallback className="text-xl font-semibold bg-primary text-primary-foreground">
                      {profile.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <Button variant="outline" size="sm">
                    Change Photo
                  </Button>
                </div>
                
                <div className="flex-1 w-full space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={profile.name}
                        onChange={(e) => setProfile({...profile, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profile.email}
                        onChange={(e) => setProfile({...profile, email: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={profile.phone}
                        onChange={(e) => setProfile({...profile, phone: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timezone">Timezone</Label>
                      <Select value={profile.timezone} onValueChange={(value) => setProfile({...profile, timezone: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="America/New_York">Eastern Time (ET)</SelectItem>
                          <SelectItem value="America/Chicago">Central Time (CT)</SelectItem>
                          <SelectItem value="America/Denver">Mountain Time (MT)</SelectItem>
                          <SelectItem value="America/Los_Angeles">Pacific Time (PT)</SelectItem>
                          <SelectItem value="Europe/London">London (GMT)</SelectItem>
                          <SelectItem value="Europe/Paris">Central Europe (CET)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Connected Accounts */}
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Link className="w-5 h-5" />
                Connected Accounts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {connectedAccounts.map((account) => (
                <div key={account.platform} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-xl">
                      {account.icon}
                    </div>
                    <div>
                      <div className="font-medium">{account.platform}</div>
                      <div className="text-sm text-muted-foreground">{account.email}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge 
                      variant={account.status === 'connected' ? 'default' : 'secondary'}
                      className={`${account.status === 'connected' ? 'bg-success text-success-foreground' : ''}`}
                    >
                      {account.status === 'connected' ? (
                        <><CheckCircle className="w-3 h-3 mr-1" /> Connected</>
                      ) : (
                        <><AlertCircle className="w-3 h-3 mr-1" /> Disconnected</>
                      )}
                    </Badge>
                    <Button 
                      variant={account.status === 'connected' ? 'outline' : 'default'}
                      size="sm"
                    >
                      {account.status === 'connected' ? 'Disconnect' : 'Connect'}
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium">General Notifications</h4>
                  {[
                    { key: 'emailNotifications', label: 'Email Notifications', description: 'Receive notifications via email' },
                    { key: 'pushNotifications', label: 'Push Notifications', description: 'Browser and mobile notifications' },
                    { key: 'priorityOnly', label: 'Priority Messages Only', description: 'Only notify for priority contacts' }
                  ].map((item) => (
                    <div key={item.key} className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label htmlFor={item.key}>{item.label}</Label>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <Switch
                        id={item.key}
                        checked={notifications[item.key as keyof typeof notifications] as boolean}
                        onCheckedChange={(checked) => 
                          setNotifications({...notifications, [item.key]: checked})
                        }
                      />
                    </div>
                  ))}
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium">Reports & Digests</h4>
                  {[
                    { key: 'dailyDigest', label: 'Daily Digest', description: 'Summary of daily activity' },
                    { key: 'weeklyReport', label: 'Weekly Report', description: 'Detailed weekly analytics' },
                    { key: 'soundEnabled', label: 'Notification Sounds', description: 'Play sounds for new messages' }
                  ].map((item) => (
                    <div key={item.key} className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label htmlFor={item.key}>{item.label}</Label>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <Switch
                        id={item.key}
                        checked={notifications[item.key as keyof typeof notifications] as boolean}
                        onCheckedChange={(checked) => 
                          setNotifications({...notifications, [item.key]: checked})
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Appearance */}
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5" />
                Appearance & Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="theme">Theme</Label>
                  <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <span className="text-sm text-muted-foreground">System, Light, or Dark</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <Select value={preferences.language} onValueChange={(value) => setPreferences({...preferences, language: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                      <SelectItem value="ja">Japanese</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="dateFormat">Date Format</Label>
                  <Select value={preferences.dateFormat} onValueChange={(value) => setPreferences({...preferences, dateFormat: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                      <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                      <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="timeFormat">Time Format</Label>
                  <Select value={preferences.timeFormat} onValueChange={(value) => setPreferences({...preferences, timeFormat: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="12h">12 Hour (AM/PM)</SelectItem>
                      <SelectItem value="24h">24 Hour</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="autoArchive">Auto Archive</Label>
                  <Select value={preferences.autoArchive} onValueChange={(value) => setPreferences({...preferences, autoArchive: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="never">Never</SelectItem>
                      <SelectItem value="7">After 7 days</SelectItem>
                      <SelectItem value="30">After 30 days</SelectItem>
                      <SelectItem value="90">After 90 days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="defaultView">Default View</Label>
                  <Select value={preferences.defaultView} onValueChange={(value) => setPreferences({...preferences, defaultView: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="unified">Unified Inbox</SelectItem>
                      <SelectItem value="priority">Priority Messages</SelectItem>
                      <SelectItem value="recent">Recent Activity</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Privacy & Security */}
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Privacy & Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Privacy Settings</h4>
                  {[
                    { key: 'readReceipts', label: 'Read Receipts', description: 'Let others know when you\'ve read their messages' },
                    { key: 'onlineStatus', label: 'Online Status', description: 'Show when you\'re active on MessageHub' },
                    { key: 'dataSharing', label: 'Data Sharing', description: 'Share anonymized usage data to improve the service' }
                  ].map((item) => (
                    <div key={item.key} className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label htmlFor={item.key}>{item.label}</Label>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <Switch
                        id={item.key}
                        checked={privacy[item.key as keyof typeof privacy] as boolean}
                        onCheckedChange={(checked) => 
                          setPrivacy({...privacy, [item.key]: checked})
                        }
                      />
                    </div>
                  ))}
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium">Data & Analytics</h4>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="analyticsOptIn">Analytics Opt-in</Label>
                      <p className="text-sm text-muted-foreground">Help improve MessageHub with usage analytics</p>
                    </div>
                    <Switch
                      id="analyticsOptIn"
                      checked={privacy.analyticsOptIn}
                      onCheckedChange={(checked) => 
                        setPrivacy({...privacy, analyticsOptIn: checked})
                      }
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <Database className="w-4 h-4" />
                      Export My Data
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2 text-destructive hover:text-destructive">
                      <Trash2 className="w-4 h-4" />
                      Delete Account
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}