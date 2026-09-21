export type SiteIdentity = {
  name: string;
  shortName: string;
  city: string;
  neighborhood: string;
  founded: number;
  address: string;
  addressExtra: string;
  phone: string;
  email: string;
  meetings: string;
  facebook: string;
  instagram: string;
};

export type LawItem = { n: string; text: string };

export type Branch = {
  id: string;
  name: string;
  branch: string;
  ages: string;
  members: string;
  color: string;
  tone: string;
  lema: string;
  marco: string;
  summary: string;
  details: string;
};

export type MethodItem = { title: string; text: string };

export type Activity = {
  id: number;
  title: string;
  tag: string;
  description: string;
  image: string;
};

export type ScoutEvent = {
  id: number;
  date: string;
  title: string;
  description: string;
  time: string;
  tag: string;
};

export type NewsItem = { date: string; title: string; excerpt: string };

export type TimelineItem = { year: string; title: string; text: string };

export type TeamMember = { name: string; role: string; bio: string };

export type JoinStep = { n: string; title: string; text: string };

export type NavItem = { to: string; label: string };
