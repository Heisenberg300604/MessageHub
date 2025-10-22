import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Search, Plus, Edit, CheckCircle } from "lucide-react";

interface Contact {
  id: string;
  name: string;
  platform: string;
  priority: string;
  syncStatus: 'synced' | 'pending';
}

const mockContacts: Contact[] = [
  { id: '1', name: 'Ethan Harper', platform: 'Email', priority: 'Top 100', syncStatus: 'synced' },
  { id: '2', name: 'Olivia Bennett', platform: 'Messaging App', priority: 'Top 200', syncStatus: 'synced' },
  { id: '3', name: 'Noah Carter', platform: 'Email', priority: 'Top 100', syncStatus: 'synced' },
  { id: '4', name: 'Ava Davis', platform: 'Messaging App', priority: 'Top 200', syncStatus: 'synced' },
  { id: '5', name: 'Liam Evans', platform: 'Email', priority: 'Top 100', syncStatus: 'synced' },
  { id: '6', name: 'Sophia Foster', platform: 'Messaging App', priority: 'Top 200', syncStatus: 'synced' },
  { id: '7', name: 'Jackson Green', platform: 'Email', priority: 'Top 100', syncStatus: 'synced' },
  { id: '8', name: 'Isabella Hayes', platform: 'Messaging App', priority: 'Top 200', syncStatus: 'synced' },
  { id: '9', name: 'Lucas Ingram', platform: 'Email', priority: 'Top 100', syncStatus: 'synced' },
  { id: '10', name: 'Mia Jenkins', platform: 'Messaging App', priority: 'Top 200', syncStatus: 'synced' }
];

export default function Contacts() {
  const [searchQuery, setSearchQuery] = useState('');
  const [contacts] = useState(mockContacts);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.platform.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getPriorityVariant = (priority: string) => {
    return priority === 'Top 100' ? 'default' : 'secondary';
  };

  return (
    <DashboardLayout title="Priority Contacts">
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="p-4 md:p-6 border-b bg-surface/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">Priority Contacts</h1>
              <p className="text-muted-foreground mt-1">
                Manage and organize your most important contacts
              </p>
            </div>
            <Button className="gap-2 w-full md:w-auto">
              <Plus className="w-4 h-4" />
              Add Contact
            </Button>
          </div>

          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search contacts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Contacts Table */}
        <div className="flex-1 overflow-auto">
          <Card className="m-4 md:m-6 glass">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-b">
                      <TableHead className="font-semibold text-muted-foreground">NAME</TableHead>
                      <TableHead className="font-semibold text-muted-foreground">PLATFORM</TableHead>
                      <TableHead className="font-semibold text-muted-foreground">PRIORITY</TableHead>
                      <TableHead className="font-semibold text-muted-foreground">SYNC STATUS</TableHead>
                      <TableHead className="font-semibold text-muted-foreground">ACTIONS</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredContacts.map((contact) => (
                      <TableRow key={contact.id} className="hover:bg-surface/30">
                        <TableCell className="font-medium text-foreground">
                          {contact.name}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {contact.platform}
                        </TableCell>
                        <TableCell>
                          <Badge 
                            variant={getPriorityVariant(contact.priority)}
                            className={contact.priority === 'Top 100' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary-foreground'}
                          >
                            {contact.priority}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-success" />
                            <span className="text-success text-sm font-medium">Synced</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                            <Edit className="w-4 h-4" />
                            <span className="ml-2 hidden sm:inline">Edit</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}