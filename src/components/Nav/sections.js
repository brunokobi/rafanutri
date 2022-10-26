import { FiBook } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { IoIosHome } from "react-icons/io";
import { FaAppleAlt } from "react-icons/fa";


export const sections = [
  {
    label: "Home",
    url: "/",
    icon: IoIosHome,
  },
  {
    label: "Sobre",
    url: "/about",
    icon: FaAppleAlt,
  },

  {
    label: "Projetos",
    url: "/projects",
    icon: FiBook,
  },   
  {
    label: "Linkedin",
    url: "https://www.linkedin.com/in/rafaela-soares-souza-kobi-675369236/",
    icon: AiOutlineLinkedin,
  },
  
  {
    label: "Instagram",
    url: "https://www.instagram.com/ra.faela820/",
    icon: AiOutlineInstagram,
  },
  {
    label: "Facebook",
    url: "https://www.facebook.com/rafaela.kobi",
    icon: AiOutlineFacebook,
  },
      

];
