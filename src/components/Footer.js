import React from "react";
import styled from "styled-components";
import tw from "tailwind-styled-components";
import ChartStatistics from "./ChartStatistics";
import Controls from "./Controls";

const Container = styled.footer`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  column-gap: 2rem;

  margin-top: 30px;
`;

const ChartsContainer = tw.div`
  col-span-10
  flex
`;

export default function Footer({
  handleSectionChange,
  handleSectionReload,
  chartsData,
}) {
  return (
    <Container>
      <ChartsContainer>
        {chartsData.map((chart) => (
          <ChartStatistics
            permutations={chart.permutations}
            comparisons={chart.comparisons}
            name={chart.name}
            width={100 / chartsData.length}></ChartStatistics>
        ))}
      </ChartsContainer>

      <Controls
        handleChange={handleSectionChange}
        handleReload={handleSectionReload}></Controls>
    </Container>
  );
}
