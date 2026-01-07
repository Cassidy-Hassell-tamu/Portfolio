import SectionContainer from "./SectionContainer";
import SectionHeading from "./SectionHeading";
import FlagBubble from "./FlagBubble";
import { themeClasses } from "../constants/theme";

import { currentSection } from "../constants/currentSection";

function CurrentSection() {
	return (
		<SectionContainer id="current">
			<div className="flex flex-col py-8">
				<SectionHeading className="mb-4">What I’m currently working on</SectionHeading>
				<div className="border border-primary rounded-2xl p-8 min-h-[120px] flex flex-col gap-4">
					<div className="flex flex-wrap gap-3 mb-2">
						{currentSection.techStack.map((tech) => (
							<FlagBubble key={tech} label={tech} color={themeClasses.text.neutralContainer} bg={themeClasses.bg.neutralContainer} />
						))}
					</div>
					<div className="text-base text-textDark mt-2">
						{currentSection.description}
					</div>
				</div>
			</div>
		</SectionContainer>
	);
}

export default CurrentSection;
