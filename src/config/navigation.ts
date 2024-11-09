import { 
  Home,
  Users,
  BookOpen,
  Calendar,
  Settings,
  Mail,
  FileText,
  Euro,
} from 'lucide-react';

export const navItems = [
  { id: 'dashboard', title: 'Dashboard', icon: Home },
  { id: 'members', title: 'Leden', icon: Users },
  { id: 'finance', title: 'Financiën', icon: Euro },
  { id: 'classes', title: 'Klassen', icon: BookOpen },
  { id: 'events', title: 'Evenementen', icon: Calendar },
  { id: 'reports', title: 'Rapporten', icon: FileText },
  { id: 'messages', title: 'Berichten', icon: Mail },
  { id: 'settings', title: 'Instellingen', icon: Settings },
];