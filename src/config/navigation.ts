/** Shared navigation structure for the header and footer. */

export interface NavItem {
  label: string;
  href: string;
}

export const primaryNav: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];

export const headerCta: NavItem = { label: "Start a project", href: "/contact" };
