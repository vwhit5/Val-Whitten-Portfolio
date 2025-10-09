export interface Job {
  title: string;
  employer: string;
}

export interface Project {
  name: string;
  category: string;
  metric: string;
  description: string;
  problem: string;
  action: string;
  result: string;
  colorClasses: string;
}

export type AppTab = "portfolio" | "strategy";

export interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface NavigationProps {
  onContactClick: () => void;
  onTabChange: (tab: AppTab) => boolean;
  activeTab: AppTab;
}

export interface PasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (password: string) => boolean;
}
