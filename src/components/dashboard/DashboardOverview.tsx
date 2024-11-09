import React from 'react';
import { 
  UserPlus,
  Euro,
  BookOpen,
  Bell,
  TrendingUp,
  Calendar
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { navItems } from '@/config/navigation';

interface DashboardOverviewProps {
  setCurrentSection: (section: string) => void;
}

export const DashboardOverview: React.FC<DashboardOverviewProps> = ({ setCurrentSection }) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-900">Welkom bij Arrahma Beheer</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {navItems.slice(1, -1).map(item => {
        const Icon = item.icon;
        return (
          <Card 
            key={item.id}
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setCurrentSection(item.id)}
          >
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-500">Bekijk {item.title.toLowerCase()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Snelle Acties</h3>
          <div className="space-y-3">
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={() => setCurrentSection('members')}
            >
              <UserPlus className="mr-2 h-4 w-4" />
              Nieuw Lid Toevoegen
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={() => setCurrentSection('finance')}
            >
              <Euro className="mr-2 h-4 w-4" />
              Bijdrage Registreren
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={() => setCurrentSection('classes')}
            >
              <BookOpen className="mr-2 h-4 w-4" />
              Klas Inschrijving
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Activiteit</h3>
          <div className="space-y-4">
            <div className="flex items-center text-sm">
              <Bell className="h-4 w-4 text-blue-500 mr-2" />
              <span>Nieuwe ledenregistraties bekijken</span>
            </div>
            <div className="flex items-center text-sm">
              <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
              <span>Financieel overzicht bijwerken</span>
            </div>
            <div className="flex items-center text-sm">
              <Calendar className="h-4 w-4 text-purple-500 mr-2" />
              <span>Aankomende evenementen plannen</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);