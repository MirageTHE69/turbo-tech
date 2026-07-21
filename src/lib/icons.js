import { 
  Wrench, 
  Layers, 
  GitCommit, 
  Settings, 
  Users, 
  GraduationCap, 
  Hammer, 
  Award, 
  ShieldCheck, 
  Building2, 
  Briefcase, 
  CheckCircle,
  Activity,
  Cpu,
  Flame,
  Zap,
  Clock,
  Box
} from 'lucide-react';

const iconMap = {
  Wrench,
  Layers,
  GitCommit,
  Settings,
  Users,
  GraduationCap,
  Hammer,
  Award,
  ShieldCheck,
  Building2,
  Briefcase,
  CheckCircle,
  Activity,
  Cpu,
  Flame,
  Zap,
  Clock,
  Box
};

export function getIcon(iconName, defaultIcon = Wrench) {
  if (!iconName) return defaultIcon;
  return iconMap[iconName] || defaultIcon;
}
