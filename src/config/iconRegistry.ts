import {
  PieChart, GraduationCap, User, BookOpen, Home,
  ChevronLeft, ChevronRight, LogOut, Info,
  LucideProps
} from 'lucide-react';

import { ForwardRefExoticComponent, RefAttributes } from 'react';

type CustomIconComponent = ForwardRefExoticComponent<Omit<LucideProps, "ref">> & RefAttributes<SVGSVGElement>;

export const iconMap: Record<string, CustomIconComponent> = {
  FaChartPie: PieChart,
  FaUniversity: GraduationCap,
  FaUserTie: User,
  FaBook: BookOpen,
  FaHome: Home,
  FaChevronLeft: ChevronLeft,
  FaChevronRight: ChevronRight,
  FaSignOutAlt: LogOut,
  FaInfo: Info,
};
