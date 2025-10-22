import HeroSection from "@/components/landing/HeroSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  MessageCircle,
  Zap,
  Shield,
  Users,
  BarChart3,
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  Smartphone,
  Globe
} from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Unified Inbox",
    description: "All your conversations from WhatsApp, LinkedIn, Instagram, Telegram, and email in one place.",
    color: "text-primary"
  },
  {
    icon: Zap,
    title: "Smart Filtering",
    description: "AI-powered priority detection ensures you never miss important conversations.",
    color: "text-secondary"
  },
  {
    icon: Users,
    title: "Priority Contacts",
    description: "Mark important contacts and get instant notifications for their messages.",
    color: "text-success"
  },
  {
    icon: BarChart3,
    title: "Message Analytics",
    description: "Understand your communication patterns with detailed insights and reports.",
    color: "text-warning"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and security protocols protect your conversations.",
    color: "text-destructive"
  },
  {
    icon: Clock,
    title: "Real-time Sync",
    description: "Messages sync instantly across all platforms and devices.",
    color: "text-primary"
  }
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "TechCorp",
    avatar: "SC",
    content: "MessageHub has completely transformed how I manage client communications. I save 2+ hours daily!",
    rating: 5
  },
  {
    name: "Alex Rodriguez",
    role: "Sales Manager", 
    company: "SalesForce Pro",
    avatar: "AR",
    content: "Never miss a hot lead again. The priority filtering is a game-changer for sales teams.",
    rating: 5
  },
  {
    name: "Emma Thompson",
    role: "CEO",
    company: "StartupXYZ",
    avatar: "ET",
    content: "As a busy CEO, MessageHub helps me stay connected without the communication chaos.",
    rating: 5
  }
];

const pricingPlans = [
  {
    name: "Personal",
    price: "Free",
    description: "Perfect for individuals",
    features: [
      "Up to 3 platforms",
      "100 messages/month",
      "Basic filtering",
      "Mobile app"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$15/month",
    description: "For professionals & freelancers",
    features: [
      "All platforms",
      "Unlimited messages",
      "AI-powered filtering",
      "Priority contacts",
      "Analytics dashboard",
      "Email support"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For teams & organizations",
    features: [
      "Everything in Professional",
      "Team collaboration",
      "Advanced analytics",
      "Custom integrations",
      "Dedicated support"
    ],
    popular: false
  }
];

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">MessageHub</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
              <Button variant="outline" asChild>
                <Link to="/login">Sign In</Link>
              </Button>
              <Button asChild>
                <Link to="/login">Get Started</Link>
              </Button>
            </div>
            
            <div className="flex items-center gap-2 md:hidden">
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section id="features" className="py-20 bg-surface/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Features</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Everything you need for{" "}
              <span className="text-gradient">unified communication</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              MessageHub brings all your conversations together with intelligent features that help you stay organized and never miss important messages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="glass hover-lift group">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-lg bg-background flex items-center justify-center mb-4 ${feature.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Loved by <span className="text-gradient">professionals</span> worldwide
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands of professionals who have transformed their communication workflow with MessageHub.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-warning fill-warning" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role} at {testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-surface/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Pricing</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Simple, <span className="text-gradient">transparent pricing</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Start free and upgrade as you grow. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-primary scale-105' : ''} glass hover-lift`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold mb-2">
                      {plan.price}
                      {plan.price !== "Free" && plan.price !== "Custom" && <span className="text-lg text-muted-foreground">/month</span>}
                    </div>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-success" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                    variant={plan.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link to="/onboarding">
                      {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to unify your communications?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have already transformed their workflow with MessageHub.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-6 text-lg" asChild>
              <Link to="/onboarding">
                <Smartphone className="w-5 h-5 mr-2" />
                Start Free Trial
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-primary">
              <Globe className="w-5 h-5 mr-2" />
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">MessageHub</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Unifying communications for professionals worldwide.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}