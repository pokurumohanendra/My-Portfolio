import Section from "../ui/Section";
import Reveal from "../shared/Reveal";
import { skillCategories, learningNow } from "../../data/skills";
import { countProjectsUsing } from "../../lib/projects";
import { useProjectFilter } from "../../hooks/useProjectFilter";
import { useSectionNav } from "../../hooks/useSectionNav";

/** A skill that, when it appears in projects, links to those projects. */
function SkillItem({ skill }) {
  const { setQuery, setType } = useProjectFilter();
  const { goToSection } = useSectionNav();
  const count = countProjectsUsing(skill);

  if (count === 0) return <li className="text-ink">{skill.name}</li>;

  const showProjects = () => {
    setType("All");
    setQuery(skill.match ?? skill.name);
    goToSection("projects");
  };

  return (
    <li>
      <button
        type="button"
        onClick={showProjects}
        className="group w-full flex items-baseline justify-between gap-3 text-left text-ink hover:text-accent transition-colors"
        aria-label={`${skill.name}: used in ${count} ${count === 1 ? "project" : "projects"}. Show them.`}
      >
        <span>{skill.name}</span>
        <span className="font-mono text-xs text-ink-3 group-hover:text-accent">
          {count} {count === 1 ? "project" : "projects"}
        </span>
      </button>
    </li>
  );
}

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Tools I use, grouped by where they sit in the stack. Select a skill to see the projects that use it."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-line">
        {skillCategories.map((cat) => (
          <Reveal key={cat.id} className="p-6 border-b border-r border-line">
            <h3 className="eyebrow mb-4">{cat.label}</h3>
            <ul className="space-y-2">
              {cat.skills.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </ul>
          </Reveal>
        ))}

        <Reveal className="p-6 border-b border-r border-line bg-surface-2">
          <h3 className="eyebrow mb-4">Exploring next</h3>
          <ul className="space-y-2">
            {learningNow.map((tech) => (
              <li key={tech.name} className="text-ink">
                {tech.name}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
