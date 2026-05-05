export const RESUME_URL =
  "https://rxresu.me/sudipta.just/senior-software-engineer";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://devsudipto.com";

export const SITE_NAME = "Sudipta Mondal — Senior Software Engineer";

export const CONTACT_EMAIL = "contact@devsudipto.com";

export const PERSON = {
  name: "Sudipta Mondal",
  jobTitle: "Senior Software Engineer & Full-Stack Architect",
  description:
    "Senior Software Engineer with 8+ years building SaaS platforms, real-time systems, and cloud infrastructure.",
  image: "/myself.png",
  email: CONTACT_EMAIL,
  addressLocality: "Dhaka",
  addressCountry: "BD",
  knowsAbout: [
    "Software Architecture",
    "SaaS Development",
    "React",
    "Vue",
    "Next.js",
    "Nuxt.js",
    "Node.js",
    "NestJS",
    "TypeScript",
    "Go",
    "AWS",
    "Docker",
    "Kubernetes",
    "WebRTC",
    "Real-time Systems",
    "DevOps",
    "Project Management",
  ],
} as const;

export const SERVICE_SELECT_EVENT = "service:selected";

export const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#reviews", label: "Reviews" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;

export const FORM_SERVICE_OPTIONS = [
  "Full-Stack SaaS Build",
  "Backend API & Systems",
  "DevOps & Cloud Setup",
  "Integrations & Automation",
  "Performance Audit & Fix",
  "Project Management",
  "Case Study Inquiry",
  "Other",
] as const;

export const SOCIAL_LINKS = [
  {
    id: "github",
    title: "GitHub",
    href: "https://github.com/sudipto-28",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/sudipta-mondal-390ba8153",
  },
  {
    id: "stackoverflow",
    title: "Stack Overflow",
    href: "https://stackoverflow.com/users/10237715/sudipta-mondal",
  },
  {
    id: "youtube",
    title: "YouTube",
    href: "https://www.youtube.com/@ScalewithSudipto",
  },
  {
    id: "upwork",
    title: "Upwork",
    href: "https://www.upwork.com/freelancers/~012e05def915f38212",
  },
] as const;

export type SocialLink = (typeof SOCIAL_LINKS)[number];
export type SocialId = SocialLink["id"];

export function SocialIcon({
  id,
  size = 15,
}: {
  id: SocialId;
  size?: number;
}) {
  const svgProps = {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    width: size,
    height: size,
    "aria-hidden": true,
  } as const;

  switch (id) {
    case "github":
      return (
        <svg {...svgProps}>
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...svgProps}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case "stackoverflow":
      return (
        <svg {...svgProps}>
          <path d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H17.78v-2.137H6.111v2.137zm.259-4.852l11.584 2.42.451-2.136-11.584-2.42-.451 2.136zm1.359-5.056l10.729 5.044.965-2.065-10.729-5.043-.965 2.064zm2.715-4.972l8.5 7.565 1.433-1.617-8.5-7.565-1.433 1.617zM15.025 0l-1.773 1.313 6.615 8.86 1.772-1.313L15.025 0z" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...svgProps}>
          <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
        </svg>
      );
    case "upwork":
      return (
        <svg {...svgProps}>
          <rect
            x="3.25"
            y="3.25"
            width="17.5"
            height="17.5"
            rx="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path d="M7.25 8.5h1.75v4.25a1.75 1.75 0 103.5 0V8.5h1.75v4.25a3.5 3.5 0 11-7 0V8.5zm8 0H17v1.1h.08a2.4 2.4 0 012.12-1.22 2.55 2.55 0 012.55 2.72V15H20v-3.68c0-.77-.43-1.27-1.12-1.27-.78 0-1.38.58-1.38 1.43V15h-1.75V8.5z" />
        </svg>
      );
    default:
      return null;
  }
}
