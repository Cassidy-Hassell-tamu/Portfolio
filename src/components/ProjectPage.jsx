import React from 'react';
import SectionContainer from './SectionContainer';
import { themeClasses } from '../constants/theme';
import SectionHeading from './SectionHeading';
import MetaDataList from './MetaDataList';

// Intro Section
const IntroSection = ({ title, description, metadata }) => (
  <SectionContainer maxWidth="narrow">
    <h1 className={`${themeClasses.fontSize.heroHeading} font-bold mb-6 ${themeClasses.text.dark}`}>{title}</h1>
    <div className="flex flex-col items-start max-w-2xl">
      <p className={`mb-6 ${themeClasses.fontSize.body}`}>{description}</p>
      {metadata && metadata.length > 0 && <MetaDataList items={metadata} />}
    </div>
  </SectionContainer>
);

// Problem Definition Section
const ProblemDefinitionSection = ({ definition, painPoints, constraints }) => (
  <SectionContainer maxWidth="narrow">
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
    <div className="mb-2">
      <span className="font-medium">Tech Stack</span>
      <ul className="list-disc ml-6">
        {techStack.map((tech, idx) => <li key={idx}>{tech}</li>)}
      </ul>
    </div>
    {image && (
      <div className="mt-4">
        <img src={image} alt="Project screenshot" className="w-full max-w-xl border rounded" />
      </div>
    )}
  </SectionContainer>
);

// Process Section
const ProcessSection = ({ techStack, description }) => (
  <SectionContainer maxWidth="narrow">
    <SectionHeading>Process</SectionHeading>
    <div className={`border ${themeClasses.border.neutral} rounded p-4 bg-neutralContainer`}>
      <div className="mb-2">
        <span className="font-medium">Tech Stack:</span> {techStack}
      </div>
      <div>
        <span className="font-medium">Description:</span> {description}
      </div>
    </div>
  </SectionContainer>
);

// What I Learned Section
const WhatILearnedSection = ({ items }) => (
  <SectionContainer maxWidth="narrow">
    <SectionHeading>What I Learned</SectionHeading>
    <div className="flex gap-4 flex-wrap">
      {items.map((item, idx) => (
        <span key={idx} className={`bg-primaryContainer ${themeClasses.text.primaryContainer} rounded px-4 py-2 ${themeClasses.fontSize.small}`}>{item}</span>
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
  processTechStack,
  processDescription,
  learnedItems,
  links,
}) => (
  <div className="w-full">
    <IntroSection title={title} description={description} metadata={metadata || []} />
    {Boolean(problemDefinition || (painPoints && painPoints.length > 0) || (constraints && constraints.length > 0)) ? (
      <ProblemDefinitionSection definition={problemDefinition} painPoints={painPoints || []} constraints={constraints || []} />
    ) : null}
    {Boolean(solution || (techStack && techStack.length > 0) || image) ? (
      <SolutionSection solution={solution} techStack={techStack || []} image={image} />
    ) : null}
    {Boolean(processTechStack || processDescription) ? (
      <ProcessSection techStack={processTechStack} description={processDescription} />
    ) : null}
    {learnedItems && learnedItems.length > 0 ? (
      <WhatILearnedSection items={learnedItems} />
    ) : null}
    {links && links.length > 0 ? (
      <LinksSection links={links} />
    ) : null}
  </div>
);

export default ProjectPage;
