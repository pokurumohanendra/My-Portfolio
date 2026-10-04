import { projects } from "../data/projects";

const haystack = (p) =>
  [p.title, p.shortDesc, p.description, p.solution, ...p.techStack].filter(Boolean).join(" ").toLowerCase();

/** Projects whose text mentions `term` (case-insensitive). */
export const projectsMatching = (term) => {
  const q = term?.trim().toLowerCase();
  if (!q) return projects;
  return projects.filter((p) => haystack(p).includes(q));
};

/** Number of projects that use a skill, honouring the skill's optional `match`. */
export const countProjectsUsing = (skill) => {
  const term = skill.match === undefined ? skill.name : skill.match;
  return term ? projectsMatching(term).length : 0;
};

/** Source-code links for a project: `repos` if present, otherwise the single `github` URL. */
export const repoLinks = (project) => {
  if (project.repos?.length) return project.repos;
  return project.github ? [{ label: "Source code", url: project.github }] : [];
};
