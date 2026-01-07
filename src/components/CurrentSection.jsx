import SectionContainer from "./SectionContainer";
import SectionHeading from "./SectionHeading";
import FlagBubble from "./FlagBubble";
import { themeClasses } from "../constants/theme";

const techStack = [
	"React", "Vite", "Tailwind CSS", "JavaScript", "HTML", "CSS"
];

function CurrentSection() {
	return (
		<SectionContainer id="current" padding="small">
			<div className="flex flex-col py-8">
				<SectionHeading className="mb-4">What I’m currently working on</SectionHeading>
				<div className="border border-primary rounded-2xl p-8 min-h-[120px] flex flex-col gap-4">
					<div className="flex flex-wrap gap-3 mb-2">
						{techStack.map((tech) => (
							<FlagBubble key={tech} label={tech} color={themeClasses.text.neutralContainer} bg={themeClasses.bg.neutralContainer} />
						))}
					</div>
					<div className="text-base text-textDark mt-2">
						I am currently developing this portfolio website using Cursor for setup, GitHub Copilot for the rest, and React. I'm focusing on quick development and making a portfolio that can grow with me.
					</div>
				</div>
			</div>
		</SectionContainer>
	);
}

export default CurrentSection;
