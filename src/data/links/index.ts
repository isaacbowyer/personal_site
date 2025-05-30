import { INavLink } from "@/interfaces/INavLink";

const NAV_LINKS: INavLink[] = [
  { href: "/#expertise", label: "EXPERTISE" },
  { href: "/#projects", label: "PROJECTS" },
  { href: "/#work", label: "WORK" },
  { href: "/#contact", label: "CONTACT" },
];

const INITAL_LINK = "/";
const HOME_LINK = "/#home";

const PROJECT_LINKS = {
  OCCUPATIONAL_HEALTH_APP: "/projects/project/occupational-health-app/",
  GAI_TRANSLATE: "https://www.gaitranslate.ai/",
};

export const LINKS = {
  INITAL: INITAL_LINK,
  NAV_BAR: NAV_LINKS,
  PROJECTS: PROJECT_LINKS,
  HOME: HOME_LINK,
};
