import React, { useEffect, useRef, useState } from "react";
import Sections from "components/Sections";
import Header from "components/Header";
import Footer from "components/Footer";
import tw from "tailwind-styled-components";
import { findObjectIndexByProperty } from "utils/util";

const Root = tw.div`
  flex
  flex-col
  gap-y-5
  px-5
  py-4
  h-screen
  max-h-screen
  text-white
`;

function App() {
  const [shouldChangeMode, setShouldChangeMode] = useState(false);
  const [shouldReload, setShouldReload] = useState(true);
  const [chartsData, setChartsData] = useState([]);

  const changeSectionMode = () => {
    setShouldChangeMode(true);
  };

  const reloadSection = () => {
    setShouldReload(true);
  };

  const onReload = (chartData) => {
    const chartIndex = findObjectIndexByProperty(
      chartsData,
      "name",
      chartData.name
    );

    setChartsData((prevCharts) => {
      const newCharts = prevCharts;

      chartIndex === -1
        ? newCharts.push(chartData)
        : (newCharts[chartIndex] = chartData);

      return newCharts;
    });
  };

  useEffect(() => {
    if (shouldChangeMode) setShouldChangeMode(false);
    if (shouldReload) setShouldReload(false);
  }, [shouldChangeMode, shouldReload]);

  return (
    <Root>
      <Header></Header>
      <Sections
        shouldChangeMode={shouldChangeMode}
        shouldReload={shouldReload}
        handleReload={onReload}></Sections>
      <Footer
        handleSectionChange={changeSectionMode}
        handleSectionReload={reloadSection}
        chartsData={chartsData}></Footer>
    </Root>
  );
}

export default App;
