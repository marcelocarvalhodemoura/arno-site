import type { NavItem } from "@/content/types";

export const primaryNav: NavItem[] = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "O Grupo" },
  { to: "/ramos", label: "Ramos" },
  { to: "/atividades", label: "Vivência" },
  { to: "/agenda", label: "Agenda" },
];

export const footerNav: NavItem[] = [
  { to: "/sobre", label: "História e valores" },
  { to: "/ramos", label: "Ramos e idades" },
  { to: "/atividades", label: "Vivência e programas" },
  { to: "/agenda", label: "Calendário" },
  { to: "/participe", label: "Como ingressar" },
];

export const legacyRedirects = [
  { path: "/about", to: "/sobre" },
  { path: "/activities", to: "/atividades" },
  { path: "/calendar", to: "/agenda" },
  { path: "/contact", to: "/participe" },
] as const;
