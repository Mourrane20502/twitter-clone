import {
  Bell,
  CircleEllipsis,
  House,
  Import,
  Mail,
  Search,
  TwitterIcon,
  User,
  UsersRound,
  Zap,
} from "lucide-react";
import { CgCommunity } from "react-icons/cg";
import fifthPost from "../assets/fifthpost.jpg";
import firstPost from "../assets/firstpost.jpeg";
import fourthPost from "../assets/fourthpost.jpg";
import lastPost from "../assets/last.jpg";
import secondPost from "../assets/secondpost.jpeg";
import thirdPost from "../assets/thirdpost.webp";
import user from "../assets/user.png";

export const SideBarInfo = [
  {
    icon: <House className="size-6" />,
    label: "Home",
    href: "/",
  },
  {
    icon: <Search />,
    label: "Explore",
    href: "/explore",
  },
  {
    icon: <Bell />,
    label: "Notifications",
    href: "/notifications",
  },
  {
    icon: <Mail />,
    label: "Messages",
    href: "/messages",
  },
  {
    icon: <CgCommunity />,
    label: "Communities",
    href: "/communities",
  },
  {
    icon: <Import />,
    label: "Bookmarks",
    href: "/bookmarks",
  },
  {
    icon: <UsersRound />,
    label: "Lists",
    href: "/lists",
  },
  {
    icon: <TwitterIcon />,
    label: "Premium",
    href: "/premium",
  },
  {
    icon: <Zap />,
    label: "Verified Orgs",
    href: "/verified",
  },
  {
    icon: <User />,
    label: "Profile",
    href: "/profile",
  },
  {
    icon: <CircleEllipsis />,
    label: "More",
    href: "/more",
  },
];
export const HomePageInfo = [
  {
    id: 1,
    user: {
      name: "John Doe",
      username: "@johndoe",
      avatar: user,
    },
    description: "Just launched my new portfolio! 🚀 Check it out!",
    image: firstPost,
    publishedTime: "now",
  },
  {
    id: 2,
    user: {
      name: "Jane Smith",
      username: "@janesmith",
      avatar: user,
    },
    description: "AI is changing everything. Here's my take on it 👇",
    image: secondPost,
    publishedTime: "27m",
  },
  {
    id: 3,
    user: {
      name: "Ali Bouzid",
      username: "@devAli",
      avatar: user,
    },
    description:
      "Working on a cool SaaS for Moroccan students 🇲🇦✨ Stay tuned!",
    image: thirdPost,
    publishedTime: "2h",
  },
  {
    id: 4,
    user: {
      name: "Sanae L.",
      username: "@sanaedev",
      avatar: user,
    },
    description: "Next.js 15 is a game changer. Love the new turbopack! 💨",
    image: fourthPost,
    publishedTime: "3h",
  },
  {
    id: 5,
    user: {
      name: "Zakaria Tech",
      username: "@zaktech",
      avatar: user,
    },
    description: "Building open-source tools for fun & impact 💻",
    image: fifthPost,
    publishedTime: "14h",
  },
  {
    id: 6,
    user: {
      name: "Nadia UX",
      username: "@nadiaux",
      avatar: user,
    },
    description: "Redesigned a banking app — here’s the before & after 👇",
    image: lastPost,
    publishedTime: "1d",
  },
];

export const FollowersOptions = [
  {
    avatar: user,
    name: "Abdullah 17",
    username: "@21A_F21",
  },
  {
    avatar: user,
    name: "AHMED-KOBASHI",
    username: "@wrestling_will_",
  },
  {
    avatar: user,
    name: "Adam Cole",
    username: "@adam_cole",
  },
];
