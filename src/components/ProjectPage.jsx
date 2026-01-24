// Import Baloo 2 and Fredoka fonts for bubbly, playful emphasis
import "@fontsource/baloo-2/700.css";
import "@fontsource/fredoka/700.css";
// Import Inter font for step numbers
import "@fontsource/inter/700.css";
import SectionContainer from './SectionContainer';
import { themeClasses } from '../constants/theme';
import SectionHeading from './SectionHeading';
import MetaDataList from './MetaDataList';
import TechStackPills from './TechStackPills';

// Intro Section
const IntroSection = ({ title, description, metadata }) => (
  <SectionContainer maxWidth="narrow" className="bg-leaves-neutral">
    <h1 className={`${themeClasses.fontSize.heroHeading} font-bold mb-6 ${themeClasses.text.dark}`}>{title}</h1>
    <div className="flex flex-col items-start">
      {description.map ? description.map((para, idx) => (
				<p key={idx} className={`mb-4 last:mb-0 ${themeClasses.fontSize.body}`}>{para}</p>
      )) : (
        <p className={`mb-6 ${themeClasses.fontSize.body}`}>{description}</p>
      )}
      {metadata && metadata.length > 0 && <MetaDataList items={metadata} />}
    </div>
  </SectionContainer>
);

// Problem Definition Section
const ProblemDefinitionSection = ({ definition, painPoints, constraints }) => (
  <SectionContainer maxWidth="narrow" padding="large" className="bg-neutralContainer">
    <SectionHeading>Problem Definition</SectionHeading>
    <div className={`mb-2 ${themeClasses.fontSize.body}`}>{definition}</div>
    <div className="mb-2">
      <span className="font-medium">Pain Points</span>
      <ul className="list-disc ml-6">
        {painPoints.map((point, idx) => <li key={idx}>{point}</li>)}
      </ul>
    </div>
    {constraints && constraints.length > 0 && (
      <div>
        <span className="font-medium">Constraints</span>
        <ul className="list-disc ml-6">
          {constraints.map((c, idx) => <li key={idx}>{c}</li>)}
        </ul>
      </div>
    )}
  </SectionContainer>
);

// Solution Section
const SolutionSection = ({ solution, techStack, image }) => (
  <SectionContainer maxWidth="narrow">
    <SectionHeading>Solution</SectionHeading>
    <div className={`mb-2 ${themeClasses.fontSize.body}`}>{solution}</div>
		{techStack && techStack.length > 0 && <TechStackPills stack={techStack} bg={themeClasses.bg.secondaryLightContainer} color={themeClasses.text.secondaryLightContainer} />}
    {image && (
      <div className="mt-4">
        <img src={image} alt="Project screenshot" className="w-full max-w-xl border rounded" />
      </div>
    )}
  </SectionContainer>
);

// Process Section
// Accepts: process (array of steps), images (optional array)
const accentColors = [
  'bg-primaryContainer',
  'bg-secondaryLightContainer',
  'bg-neutralContainer',
  'bg-primary',
  'bg-secondaryContainer',
];
const textColors = [
  'text-onPrimaryContainerText',
  'text-onSecondaryLightContainer',
  'text-onNeutralContainer',
  'text-onPrimary',
  'text-onSecondaryContainer',
];

const ProcessSection = ({ process = [], images = [] }) => (
  <SectionContainer maxWidth="narrow">
    <SectionHeading>Process</SectionHeading>
    <div className="rounded-2xl p-6 bg-white/90 border border-primary flex flex-col gap-8">
      {Array.isArray(process) && process.length > 0 ? (
        <div className="flex flex-col gap-8">
          {process.map((step, idx) => {
            const accent = accentColors[idx % accentColors.length];
            const text = textColors[idx % textColors.length];
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`flex flex-col sm:flex-row items-stretch gap-4 ${isEven ? '' : 'sm:flex-row-reverse'}`}
              >
                {/* Accent shape */}
                  <div className={`flex items-center justify-center sm:w-32 w-full`}>
                    <div className={`w-20 h-20 ${accent} flex items-center justify-center border-2 border-white rounded-full`}>
                      <span
                        className={`text-4xl font-extrabold ${text} select-none`}
                        style={{ fontFamily: 'Fredoka, Inter, Arial, sans-serif', letterSpacing: '1px', fontWeight: 700 }}
                      >
                        {idx + 1}
                      </span>
                    </div>
                  </div>
                {/* Step content */}
                <div className={`flex-1 px-4 py-3 rounded-xl bg-white border border-primary font-medium flex items-center`}>
                  {step}
                </div>
                {/* Optional image, styled as a flat card */}
                {images[idx] && (
                  <div className="flex items-center justify-center sm:w-40 w-full">
                    <img src={images[idx]} alt={`Process step ${idx + 1}`} className="rounded-2xl border border-neutralContainer max-w-xs w-full h-auto bg-white" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className={`${themeClasses.text.neutral} italic`}>No process steps available.</div>
      )}
    </div>
  </SectionContainer>
);

// What I Learned Section
const WhatILearnedSection = ({ items }) => (
  <SectionContainer>
    <SectionHeading>What I Learned</SectionHeading>
    <div
      className="w-full flex flex-wrap justify-center gap-x-8 gap-y-6
        lg:mx-[-4rem] xl:mx-[-6rem] 2xl:mx-[-8rem]
        lg:w-[calc(100%+8rem)] xl:w-[calc(100%+12rem)] 2xl:w-[calc(100%+16rem)]
        mx-auto"
      style={{ transition: 'margin 0.2s, width 0.2s' }}
    >
      {items.map((item, idx) => (
        <span
          key={idx}
          className={`bg-primaryContainer ${themeClasses.text.primary} rounded-2xl px-7 py-4 ${themeClasses.fontSize.body} font-normal transition-all duration-200 hover:shadow-md hover:-translate-y-1 hover:bg-primaryContainer/100`}
          style={{ minWidth: '180px', textAlign: 'center' }}
        >
          {item}
        </span>
      ))}
    </div>
  </SectionContainer>
);

// Links Section
const LinksSection = ({ links }) => (
  <SectionContainer maxWidth="narrow">
    <SectionHeading>Links</SectionHeading>
    <ul className={themeClasses.fontSize.small}>
      {links.map(({ label, url }, idx) => (
        <li key={idx} className="mb-1">
          <span className="font-medium">{label}:</span> <a href={url} className={`${themeClasses.text.primary} underline`} target="_blank" rel="noopener noreferrer">Link</a>
        </li>
      ))}
    </ul>
  </SectionContainer>
);

// Main Project Page
const ProjectPage = ({
  title,
  description,
  metadata,
  problemDefinition,
  painPoints,
  constraints,
  solution,
  techStack,
  image,
  processDescription,
	process,
	processImages,
  learnedItems,
  links,
}) => (
  <div className="w-full py-6 sm:px-6 lg:px-8 space-y-8">
    <IntroSection title={title} description={description} metadata={metadata || []} />
    {links && links.length > 0 ? (
      <LinksSection links={links} />
    ) : null}
    {learnedItems && learnedItems.length > 0 ? (
      <WhatILearnedSection items={learnedItems} />
    ) : null}
    {Boolean(problemDefinition || (painPoints && painPoints.length > 0) || (constraints && constraints.length > 0)) ? (
      <ProblemDefinitionSection definition={problemDefinition} painPoints={painPoints || []} constraints={constraints || []} />
    ) : null}
    {Boolean(process || processDescription || processImages) ? (
      <ProcessSection process={process} description={processDescription} images={processImages} />
    ) : null}
    {Boolean(solution || (techStack && techStack.length > 0) || image) ? (
      <SolutionSection solution={solution} techStack={techStack || []} image={image} />
    ) : null}
  </div>
);

export default ProjectPage;
