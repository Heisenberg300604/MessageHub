import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Send,
  Paperclip,
  Smile,
  Phone,
  Video,
  MoreVertical,
  Star,
  Archive,
  Trash2,
  Reply,
  Forward,
  ChevronDown
} from "lucide-react";

interface Message {
  id: string;
  content: string;
  timestamp: string;
  isFromUser: boolean;
  platform: 'whatsapp' | 'linkedin' | 'instagram' | 'telegram' | 'email';
  status: 'sent' | 'delivered' | 'read';
}

const mockConversation = {
  contact: {
    name: 'Sarah Johnson',
    avatar: '',
    initials: 'SJ',
    status: 'online',
    platform: 'whatsapp' as const
  },
  messages: [
    {
      id: '1',
      content: 'Hey! How are you doing? I wanted to discuss the project proposal we talked about last week.',
      timestamp: '10:30 AM',
      isFromUser: false,
      platform: 'whatsapp' as const,
      status: 'read' as const
    },
    {
      id: '2',
      content: 'Hi Sarah! I\'m doing well, thanks for asking. Yes, I\'ve been thinking about that proposal too.',
      timestamp: '10:32 AM',
      isFromUser: true,
      platform: 'whatsapp' as const,
      status: 'read' as const
    },
    {
      id: '3',
      content: 'Great! I have some new ideas that could really make this project stand out. Are you free for a quick call this afternoon?',
      timestamp: '10:35 AM',
      isFromUser: false,
      platform: 'whatsapp' as const,
      status: 'read' as const
    },
    {
      id: '4',
      content: 'Absolutely! I\'m free after 2 PM. Should we do a video call or just voice?',
      timestamp: '10:37 AM',
      isFromUser: true,
      platform: 'whatsapp' as const,
      status: 'delivered' as const
    }
  ]
};

const platformStyles = {
  whatsapp: 'platform-whatsapp',
  linkedin: 'platform-linkedin',
  instagram: 'platform-instagram',
  telegram: 'platform-telegram',
  email: 'platform-email'
};

const platformIcons = {
  whatsapp: '💬',
  linkedin: '💼',
  instagram: '📸',
  telegram: '✈️',
  email: '✉️'
};

export default function ConversationView() {
  const [newMessage, setNewMessage] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState<keyof typeof platformStyles>('whatsapp');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Here you would typically send the message
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Header */}
      <div className="p-4 border-b bg-surface/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Avatar className="h-10 w-10">
              <AvatarImage src={mockConversation.contact.avatar} alt={mockConversation.contact.name} />
              <AvatarFallback className="font-semibold">
                {mockConversation.contact.initials}
              </AvatarFallback>
            </Avatar>
            <div className={`absolute -bottom-0.5 -right-0.5 w-6 h-6 rounded-full ${platformStyles[mockConversation.contact.platform]} 
                           flex items-center justify-center text-xs shadow-lg`}>
              {platformIcons[mockConversation.contact.platform]}
            </div>
          </div>
          
          <div>
            <h2 className="font-semibold">{mockConversation.contact.name}</h2>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full" />
              <span className="text-xs text-muted-foreground">Online</span>
              <Badge variant="outline" className="text-xs px-2 py-0">
                WhatsApp
              </Badge>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <Phone className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Video className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Star className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <MoreVertical className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
        {mockConversation.messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isFromUser ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
              message.isFromUser
                ? 'bg-primary text-primary-foreground ml-12'
                : 'bg-muted mr-12'
            }`}>
              <p className="text-sm leading-relaxed">{message.content}</p>
              <div className={`flex items-center justify-between mt-2 text-xs ${
                message.isFromUser ? 'text-primary-foreground/70' : 'text-muted-foreground'
              }`}>
                <span>{message.timestamp}</span>
                {message.isFromUser && (
                  <div className="flex items-center gap-1">
                    {message.status === 'delivered' && <span>✓✓</span>}
                    {message.status === 'read' && <span className="text-primary-light">✓✓</span>}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="px-4 py-2 border-t bg-surface/30">
        <div className="flex items-center gap-2 text-xs">
          <Button variant="ghost" size="sm" className="h-8 px-3">
            <Reply className="w-3 h-3 mr-1" />
            Reply
          </Button>
          <Button variant="ghost" size="sm" className="h-8 px-3">
            <Forward className="w-3 h-3 mr-1" />
            Forward
          </Button>
          <Button variant="ghost" size="sm" className="h-8 px-3">
            <Archive className="w-3 h-3 mr-1" />
            Archive
          </Button>
          <div className="flex-1" />
          <Button variant="ghost" size="sm" className="h-8 px-3 text-destructive">
            <Trash2 className="w-3 h-3 mr-1" />
            Delete
          </Button>
        </div>
      </div>

      {/* Message Input */}
      <div className="p-4 border-t bg-background">
        {/* Platform Selector */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs text-muted-foreground">Reply via:</span>
          <div className="flex items-center gap-1 bg-surface rounded-lg p-1">
            {Object.entries(platformStyles).map(([platform, style]) => (
              <button
                key={platform}
                onClick={() => setSelectedPlatform(platform as keyof typeof platformStyles)}
                className={`w-8 h-8 rounded ${selectedPlatform === platform ? style : 'bg-muted'} 
                           flex items-center justify-center text-xs transition-all hover:scale-105`}
              >
                {platformIcons[platform as keyof typeof platformIcons]}
              </button>
            ))}
          </div>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </div>

        {/* Input Area */}
        <div className="flex items-end gap-3">
          <div className="flex-1 relative">
            <Input
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="pr-20 py-3 bg-surface border-none"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Paperclip className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Smile className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <Button 
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            className={`px-6 py-3 ${selectedPlatform !== 'email' ? platformStyles[selectedPlatform] : 'bg-primary'} 
                       text-white hover:opacity-90 transition-all`}
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}