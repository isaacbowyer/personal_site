import { IContact } from "@/interfaces/IContact";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const useContactSection = () => {
  const CONTACTS: IContact[] = [
    {
      id: 1,
      title: "GitHub",
      icon: FaGithub,
      url: "https://github.com/isaacbowyer",
    },
    {
      id: 2,
      title: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/isaacbowyer/",
    },
    {
      id: 3,
      title: "References",
      icon: FaUser,
      url: "https://www.linkedin.com/in/isaacbowyer/details/recommendations/",
    },
    {
      id: 4,
      title: "Email",
      icon: MdEmail,
    },
  ];

  return {
    state: {
      contactItems: CONTACTS,
    },
  };
};
