export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Case Study", href: "/case-study" },
  { label: "Resume", href: "/resume" },
  { label: "Blog", href: "/blog" },
  { label: "Services", href: "/services" },
  { label: "Playground", href: "/playground" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export const primaryCTA = {
  label: "View My Work",
  href: "#work",
};

export const socialLinks: SocialLink[] = [
  { label: "Twitter", href: "https://twitter.com/asadrana", icon: "Twitter" },
  { label: "LinkedIn", href: "https://linkedin.com/in/asadrana", icon: "Linkedin" },
  { label: "GitHub", href: "https://github.com/asadrana", icon: "Github" },
];

export const brand = {
  name: "Asad Rana",
  role: "Product Designer",
  tagline: "Designing experiences that feel inevitable.",
  email: "hello@asadrana.design",
  location: "San Francisco, CA",
  available: true,
};

export type { NavLink as NavLinkType };
