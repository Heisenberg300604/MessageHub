import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Smartphone, Zap, Users, Bell } from "lucide-react";
import heroImage from "@/assets/hero-unified-messages.jpeg";

const PlatformLogo = ({ platform, delay }: { platform: string; delay: number }) => {
  const platformStyles = {
    whatsapp: "platform-whatsapp",
    linkedin: "platform-linkedin", 
    instagram: "platform-instagram",
    telegram: "platform-telegram",
    email: "platform-email"
  };

  const platformIcons = {
    whatsapp: "💬",
    linkedin: "💼",
    instagram: "📸", 
    telegram: "✈️",
    email: "✉️"
  };

  return (
    <div 
      className={`w-12 h-12 rounded-xl ${platformStyles[platform as keyof typeof platformStyles]} 
                 flex items-center justify-center text-lg font-bold shadow-lg animate-float hover-lift`}
      style={{ animationDelay: `${delay}s` }}
    >
      {platformIcons[platform as keyof typeof platformIcons]}
    </div>
  );
};

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-surface to-primary/5">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8 animate-slide-up">
            {/* Platform Logos Row */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <PlatformLogo platform="whatsapp" delay={0} />
              <PlatformLogo platform="linkedin" delay={0.2} />
              <PlatformLogo platform="instagram" delay={0.4} />
              <PlatformLogo platform="telegram" delay={0.6} />
              <PlatformLogo platform="email" delay={0.8} />
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Never miss{" "}
                <span className="text-gradient">important conversations</span>{" "}
                in a world of{" "}
                <span className="text-gradient-secondary">communication overload</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl">
                MessageHub unifies WhatsApp, LinkedIn, Instagram, Telegram, and email into one intelligent platform. 
                Focus on what matters most with AI-powered priority filtering.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-2 gap-4 py-6">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-primary" />
                </div>
                <span>Unified Inbox</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-secondary" />
                </div>
                <span>Smart Filtering</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-success" />
                </div>
                <span>Priority Contacts</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-warning/10 rounded-lg flex items-center justify-center">
                  <Bell className="w-4 h-4 text-warning" />
                </div>
                <span>Smart Notifications</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary 
                          text-primary-foreground px-8 py-6 text-lg font-semibold shadow-xl hover-glow transition-all"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Smartphone className="w-5 h-5 mr-2" />
                Get Started Free
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-6 text-lg border-2 hover:bg-surface glass-subtle"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                <span>5M+ Messages Processed</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="MessageHub Unified Communication Interface"
                className="w-full h-auto rounded-2xl shadow-2xl hover-lift glass"
              />
              
              {/* Floating Notification Cards */}
              <div className="absolute -top-4 -left-4 glass p-3 rounded-xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-whatsapp rounded-full" />
                  <span className="text-xs font-medium">3 new messages</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 glass p-3 rounded-xl animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-linkedin rounded-full" />
                  <span className="text-xs font-medium">Connection request</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}