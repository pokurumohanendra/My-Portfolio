// SOCIAL LINKS — built from site.config so URLs live in one place.
// Add `leetcode`, `twitter`, etc. to siteConfig.social and they appear
// everywhere (footer, contact, command palette) automatically.
import { FaGithub, FaLinkedin, FaCode, FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { siteConfig } from "../config/site.config";

const meta = {
  github: { label: "GitHub", Icon: FaGithub },
  linkedin: { label: "LinkedIn", Icon: FaLinkedin },
  leetcode: { label: "LeetCode", Icon: FaCode },
  twitter: { label: "X (Twitter)", Icon: FaXTwitter },
};

export const socialLinks = Object.entries(siteConfig.social)
  .filter(([key, url]) => url && meta[key])
  .map(([key, url]) => ({ id: key, url, ...meta[key] }));

export const emailLink = {
  id: "email",
  label: "Email",
  url: `mailto:${siteConfig.email}`,
  Icon: HiOutlineMail,
};

/** Social links plus email, in display order. */
export const contactLinks = [...socialLinks, emailLink];
