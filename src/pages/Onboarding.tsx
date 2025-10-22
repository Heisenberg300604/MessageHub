import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, HelpCircle } from "lucide-react";

interface Platform {
  id: string;
  name: string;
  icon: string;
  connected: boolean;
  color: string;
}

export default function Onboarding() {
  const navigate = useNavigate();
  const [platforms, setPlatforms] = useState<Platform[]>([
    { id: 'whatsapp', name: 'WhatsApp', icon: '💬', connected: true, color: 'bg-green-500' },
    { id: 'gmail', name: 'Gmail', icon: '✉️', connected: true, color: 'bg-red-500' },
    { id: 'linkedin', name: 'LinkedIn', icon: '💼', connected: true, color: 'bg-blue-600' },
    { id: 'slack', name: 'Slack', icon: '💬', connected: false, color: 'bg-purple-500' },
    { id: 'instagram', name: 'Instagram', icon: '📸', connected: false, color: 'bg-pink-500' }
  ]);

  const handlePlatformToggle = (platformId: string) => {
    setPlatforms(prev => prev.map(p => 
      p.id === platformId ? { ...p, connected: !p.connected } : p
    ));
  };

  const handleContinue = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-surface/30 to-background">
      {/* Header */}
      <header className="p-4 border-b bg-surface/50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-xl font-bold">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">M</span>
            </div>
            MessageHub
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground">Home</a>
            <a href="#" className="text-muted-foreground hover:text-foreground">Messages</a>
            <a href="#" className="text-muted-foreground hover:text-foreground">Contacts</a>
            <a href="#" className="text-muted-foreground hover:text-foreground">Settings</a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              <HelpCircle className="w-4 h-4" />
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto p-6 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Connect your accounts</h1>
          <p className="text-muted-foreground">
            Complete the steps to get your all-in-one inbox ready.
          </p>
        </div>

        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="space-y-4">
              {platforms.map((platform) => (
                <div
                  key={platform.id}
                  className="flex items-center justify-between p-4 rounded-lg border hover:bg-surface/50 transition-colors cursor-pointer"
                  onClick={() => handlePlatformToggle(platform.id)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${platform.color} rounded-lg flex items-center justify-center text-white text-xl`}>
                      {platform.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{platform.name}</h3>
                      <p className={`text-sm ${platform.connected ? 'text-success' : 'text-destructive'}`}>
                        {platform.connected ? 'Connected' : 'Disconnected'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    {platform.connected ? (
                      <CheckCircle className="w-6 h-6 text-success" />
                    ) : (
                      <XCircle className="w-6 h-6 text-destructive" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t">
              <Button 
                onClick={handleContinue}
                className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
              >
                Continue
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}