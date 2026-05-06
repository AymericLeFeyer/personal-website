export interface Contacts {
  email: string
  phone: string
  linkedin: string
  github: string
}

export interface Company {
  company: string
  position: string
  start_date: string
  end_date: string | null
  responsibilities: string[]
}

export interface Technology {
  name: string
  frequency: number
  comments?: string
}

export interface Mission {
  title: string
  context: string
  company: string
  start_date: string
  end_date: string | null
  is_side_project: boolean
  link?: { url: string; text: string }
  technologies: Technology[]
  tasks: string[]
  images?: string[]
}

export interface Education {
  institution: string
  degree: string
  start_date: string
  end_date: string | null
}

export interface ProfileEvent {
  name: string
  date: string
  type: string
  description: string
}

export interface Testimonial {
  name: string
  role: string
  company: string
  message: string
  link?: string
}

export type Availability = 'available' | 'soon' | 'unavailable'

export interface Profile {
  name: string
  role: string
  availability?: Availability
  contacts: Contacts
  companies: Company[]
  missions: Mission[]
  education: Education[]
  events: ProfileEvent[]
  testimonials: Testimonial[]
}
