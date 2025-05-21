import { INavLink } from "@/interfaces/INavLink";

const NAV_LINKS: INavLink[] = [
  { href: "/#expertise", label: "EXPERTISE" },
  { href: "/#projects", label: "PROJECTS" },
  { href: "/#work", label: "WORK" },
  { href: "/#contact", label: "CONTACT" },
];

const HOME_LINK = "/#home";

const PROJECT_LINKS = {
  OCCUPATIONAL_HEALTH_APP: "/projects/project/1/",
};

export const LINKS = {
  NAV_BAR: NAV_LINKS,
  PROJECTS: PROJECT_LINKS,
  HOME: HOME_LINK,
};
