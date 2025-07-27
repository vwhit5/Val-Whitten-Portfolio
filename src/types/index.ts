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

export interface NavigationProps {
  onContactClick: () => void;
}

export interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}
