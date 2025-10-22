import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Search, 
  Filter, 
  Star, 
  MoreVertical, 
  MessageCircle,
  Clock,
  Pin
} from "lucide-react";

interface Message {
  id: string;
  contact: {
    name: string;
    avatar: string;
    initials: string;
  };
  platform: 'whatsapp' | 'linkedin' | 'instagram' | 'telegram' | 'email';
  preview: string;
  timestamp: string;
  unread: boolean;
  priority: boolean;
  pinned?: boolean;
}

const mockMessages: Message[] = [
  {
    id: '1',
    contact: { name: 'Sarah Johnson', avatar: '', initials: 'SJ' },
    platform: 'whatsapp',
    preview: 'Hey! Can we discuss the project proposal? I have some ideas...',
    timestamp: '2m ago',
    unread: true,
    priority: true,
    pinned: true
  },
  {
    id: '2',
    contact: { name: 'Alex Chen', avatar: '', initials: 'AC' },
    platform: 'linkedin',
    preview: 'Great connecting with you at the conference. Let\'s schedule a call.',
    timestamp: '15m ago',
    unread: true,
    priority: false
  },
  {
    id: '3',
    contact: { name: 'Marketing Team', avatar: '', initials: 'MT' },
    platform: 'email',
    preview: 'Weekly newsletter draft ready for review - please check ASAP',
    timestamp: '1h ago',
    unread: false,
    priority: true
  },
  {
    id: '4',
    contact: { name: 'Emma Rodriguez', avatar: '', initials: 'ER' },
    platform: 'telegram',
    preview: 'The files are ready for download. Link expires in 24 hours.',
    timestamp: '2h ago',
    unread: true,
    priority: false
  },
  {
    id: '5',
    contact: { name: 'Design Studio', avatar: '', initials: 'DS' },
    platform: 'instagram',
    preview: 'Loved your latest post! Let\'s collaborate on something similar.',
    timestamp: '4h ago',
    unread: false,
    priority: false
  }
];

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

export default function UnifiedInbox() {
  const [selectedMessage, setSelectedMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMessages = mockMessages.filter(message =>
    message.contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    message.preview.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-6 border-b bg-surface/50">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Unified Inbox</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search conversations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-background"
          />
        </div>
      </div>

      {/* Platform Stats */}
      <div className="p-4 border-b bg-background">
        <div className="flex items-center gap-4 overflow-x-auto scrollbar-thin">
          <Badge variant="secondary" className="flex items-center gap-2 px-3 py-2 whitespace-nowrap">
            <MessageCircle className="w-4 h-4" />
            All Messages
            <span className="ml-1 px-2 py-0.5 bg-primary text-primary-foreground rounded-full text-xs">
              {filteredMessages.filter(m => m.unread).length}
            </span>
          </Badge>
          
          {Object.entries(platformStyles).map(([platform, style]) => {
            const count = filteredMessages.filter(m => m.platform === platform && m.unread).length;
            return count > 0 && (
              <Badge key={platform} variant="outline" className="flex items-center gap-2 px-3 py-2 whitespace-nowrap">
                <span className={`w-4 h-4 rounded ${style} flex items-center justify-center text-xs`}>
                  {platformIcons[platform as keyof typeof platformIcons]}
                </span>
                {platform.charAt(0).toUpperCase() + platform.slice(1)}
                <span className="ml-1 px-2 py-0.5 bg-muted rounded-full text-xs">{count}</span>
              </Badge>
            );
          })}
        </div>
      </div>

      {/* Message List */}
      <div className="flex-1 overflow-y-auto scrollbar-thin">
        <div className="divide-y">
          {filteredMessages.map((message) => (
            <div
              key={message.id}
              className={`p-4 hover:bg-surface/50 cursor-pointer transition-colors relative ${
                selectedMessage === message.id ? 'bg-primary/5 border-l-4 border-l-primary' : ''
              }`}
              onClick={() => setSelectedMessage(message.id)}
            >
              <div className="flex items-start gap-3">
                {/* Avatar with Platform Indicator */}
                <div className="relative">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={message.contact.avatar} alt={message.contact.name} />
                    <AvatarFallback className="font-semibold">
                      {message.contact.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full ${platformStyles[message.platform]} 
                                 flex items-center justify-center text-xs shadow-lg`}>
                    {platformIcons[message.platform]}
                  </div>
                </div>

                {/* Message Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <h3 className={`font-semibold truncate ${message.unread ? 'text-foreground' : 'text-muted-foreground'}`}>
                        {message.contact.name}
                      </h3>
                      {message.priority && (
                        <Star className="w-4 h-4 text-warning fill-warning" />
                      )}
                      {message.pinned && (
                        <Pin className="w-4 h-4 text-primary" />
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {message.timestamp}
                      </span>
                    </div>
                  </div>
                  
                  <p className={`text-sm truncate ${message.unread ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {message.preview}
                  </p>
                </div>

                {/* Unread Indicator */}
                {message.unread && (
                  <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0 mt-2" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Empty State */}
      {filteredMessages.length === 0 && (
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="text-center">
            <MessageCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No messages found</h3>
            <p className="text-muted-foreground">Try adjusting your search query</p>
          </div>
        </div>
      )}
    </div>
  );
}