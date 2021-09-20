import React, { useEffect, useState } from "react";
import SingleSection from "./SingleSection";
import Navigation from "./Navigation";
import tw from "tailwind-styled-components";

const Container = tw.main`
  grid
  grid-cols-12
  gap-x-8
  mt-14
  h-full
`;

const SingleSectionContainer = tw.div`
  col-span-10
  h-full
`;

export default function Sections({
  shouldChangeMode,
  shouldReload,
  handleReload,
}) {
  const sections = ["Вставками", "Слиянием", "Выбором", "Пузырьковая"];

  const [currentSection, setCurrentSection] = useState(sections[0]);

  const handleTabSelection = (e) => {
    setCurrentSection(e.target.textContent);
  };

  return (
    <Container>
      <SingleSectionContainer>
        {sections.map((sectionName) => (
          <SingleSection
            sectionName={sectionName}
            key={sectionName}
            isActive={sectionName === currentSection}
            shouldChangeMode={
              shouldChangeMode && sectionName === currentSection
            }
            shouldReload={shouldReload && sectionName === currentSection}
            handleReload={handleReload}></SingleSection>
        ))}
      </SingleSectionContainer>

      <Navigation
        sections={sections}
        activeTab={currentSection}
        handleTabSelection={handleTabSelection}></Navigation>
    </Container>
  );
}
