export interface Contacts {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export interface Company {
  company: string;
  position: string;
  start_date: string;
  end_date: string;
  row: number;
  responsibilities: string[];
}

export interface Technology {
  name: string;
  frequency: number;
  comments?: string;
}

export interface MissionLink {
  url: string;
  text: string;
}

export interface Mission {
  title: string;
  context: string;
  company: string;
  start_date: string;
  end_date: string;
  row: number;
  is_side_project: boolean;
  technologies: Technology[];
  tasks: string[];
  link?: MissionLink;
}

export interface Education {
  institution: string;
  degree: string;
  start_date: string;
  end_date: string;
  icon: string;
}

export interface CalendarEvent {
  name: string;
  date: string;
  description: string;
  type: 'talk' | 'certification';
  icon: string;
}

export interface Profile {
  name: string;
  role: string;
  contacts: Contacts;
  companies: Company[];
  missions: Mission[];
  education: Education[];
  events: CalendarEvent[];
}
