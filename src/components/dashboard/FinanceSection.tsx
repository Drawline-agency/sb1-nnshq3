import React from 'react';
import { Euro, TrendingUp, Download } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const FinanceSection: React.FC = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold text-gray-900">Financieel Overzicht</h2>
      <Button>
        <Download className="mr-2 h-4 w-4" />
        Exporteer Rapport
      </Button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Totaal Ontvangen</p>
              <p className="text-2xl font-bold">€3,675</p>
              <p className="text-xs text-green-500">+8% vs vorige maand</p>
            </div>
            <Euro className="h-8 w-8 text-green-500" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Openstaand</p>
              <p className="text-2xl font-bold">€875</p>
              <p className="text-xs text-red-500">17 leden</p>
            </div>
            <TrendingUp className="h-8 w-8 text-red-500" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Verwacht</p>
              <p className="text-2xl font-bold">€4,250</p>
              <p className="text-xs text-blue-500">deze maand</p>
            </div>
            <TrendingUp className="h-8 w-8 text-blue-500" />
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);