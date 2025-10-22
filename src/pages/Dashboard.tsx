import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import UnifiedInbox from "@/components/dashboard/UnifiedInbox";
import ConversationView from "@/components/dashboard/ConversationView";

export default function Dashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <Sidebar 
        isCollapsed={sidebarCollapsed} 
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} 
      />
      
      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Inbox List */}
        <div className={`${selectedConversation ? 'hidden lg:block' : 'block'} ${sidebarCollapsed ? 'w-full lg:w-96' : 'w-full lg:w-80'} border-r`}>
          <UnifiedInbox />
        </div>
        
        {/* Conversation View */}
        <div className={`${selectedConversation ? 'block' : 'hidden lg:block'} flex-1`}>
          {selectedConversation ? (
            <ConversationView />
          ) : (
            <div className="flex items-center justify-center h-full bg-surface/30">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Select a conversation</h3>
                <p className="text-muted-foreground max-w-sm">
                  Choose a conversation from the inbox to start messaging across all your platforms.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import { MessageCircle } from "lucide-react";