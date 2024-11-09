import React from 'react';
import { Users, UserPlus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const MemberSection: React.FC = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold text-gray-900">Ledenbeheer</h2>
      <Button>
        <UserPlus className="mr-2 h-4 w-4" />
        Nieuw Lid
      </Button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Totaal Leden</p>
              <p className="text-2xl font-bold">245</p>
            </div>
            <Users className="h-8 w-8 text-blue-500" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Actieve Leden</p>
              <p className="text-2xl font-bold">232</p>
            </div>
            <Users className="h-8 w-8 text-green-500" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Nieuwe Leden</p>
              <p className="text-2xl font-bold">12</p>
              <p className="text-xs text-gray-500">deze maand</p>
            </div>
            <UserPlus className="h-8 w-8 text-purple-500" />
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);