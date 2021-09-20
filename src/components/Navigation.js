import React from "react";
import NavigationTab from "components/NavigationTab";
import tw from "tailwind-styled-components";

const Container = tw.aside`
  col-span-2

  flex
  flex-col

  gap-y-12

  h-full
`;

export default function Navigation({
  sections,
  handleTabSelection,
  activeTab,
}) {
  return (
    <Container>
      {sections.map((sectionName) => {
        return (
          <NavigationTab
            key={sectionName}
            name={sectionName}
            isActive={activeTab === sectionName}
            handleClick={handleTabSelection}
          />
        );
      })}
    </Container>
  );
}
