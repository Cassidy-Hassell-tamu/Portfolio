import SectionContainer from "./SectionContainer";
import SectionHeading from "./SectionHeading";
import { skills } from "../constants/skills";

function SkillLevelBar({ level }) {
  // level: 1-5
  // Map level to height (in px) and color (red to green)
  const heights = [6, 12, 16, 20, 24]; // px for levels 1-5 (smaller max height)
  const colors = [
    "bg-sky-400",
    "bg-sky-500",
    "bg-cyan-400",
    "bg-emerald-400",
    "bg-green-500",
  ];
  const height = heights[level - 1] || heights[0];
  const color = colors[level - 1] || colors[0];
  return (
    <span className="flex items-end ml-3 h-6">{/* align bar to bottom, fixed container height */}
      <span
        className={`transition-all duration-300 rounded-full ${color}`}
        style={{ width: '10px', height: `${height}px` }}
      />
    </span>
  );
}

function SkillBadge({ name, level }) {
  return (
    <span className="flex items-center px-5 py-2 rounded-full bg-neutralContainer text-textDark whitespace-nowrap">
      <span>{name}</span>
      <SkillLevelBar level={level} />
    </span>
  );
}

/**
 * SkillsSection Component
 * * Justification for extraction:
 * - Dedicated section: Skills & Technologies is a distinct section on the portfolio
 * - Reusability: Can be reused or rearranged independently of other sections
 * - Maintainability: Isolates skills content for easier updates
 * - Consistent styling: Uses SectionContainer and SectionHeading for uniform appearance
 * - Scalability: Easy to add/remove skills without affecting other sections
 * - Clarity: Separates concerns, making the codebase cleaner and more organized
 */
function SkillsSection() {
  return (
    <SectionContainer id="skills">
      <div className="flex flex-col gap-2 py-8">
        <SectionHeading>Skills</SectionHeading>
        <div className="flex flex-wrap gap-4 justify-center w-full">
          {skills.map((skill) => (
            <SkillBadge key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

export default SkillsSection