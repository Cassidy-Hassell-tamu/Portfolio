import SectionContainer from "./SectionContainer";
import SectionHeading from "./SectionHeading";
import { themeClasses } from "../constants/theme";
import { skills } from "../constants/skills";

function SkillBadge({ label }) {
  return (
    <span className="px-5 py-2 rounded-full bg-neutralContainer text-textDark font-medium text-base whitespace-nowrap">
      {label}
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
    <SectionContainer id="skills" padding="small">
      <div className="flex flex-col gap-2 py-8">
        <SectionHeading>Skills</SectionHeading>
        <div className="flex flex-wrap gap-4 justify-center w-full">
          {skills.map((skill) => (
            <SkillBadge key={skill} label={skill} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

export default SkillsSection