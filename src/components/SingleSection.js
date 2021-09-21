import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import tw from "tailwind-styled-components";
import { findObjectIndexByProperty } from "utils/util";
import Bars from "./Bars";

const Container = styled.div`
  ${(props) =>
    // @ts-ignore
    props.isActive ? "display: grid" : "display: none"};

  grid-template-rows: auto 1fr;

  height: 100%;
`;

const Title = tw.div`
  text-white
  text-6xl
  uppercase
  font-bold
  tracking-widest
`;

const Content = tw.div`
  mt-9
  flex
  flex-col
  gap-y-5
`;

const Info = tw.div`
  ${(p) => (p.isActive ? "grid" : "hidden")}
  
  h-full
  w-full

  grid
  grid-cols-2
  gap-x-5
`;

export default function SingleSection({
  sectionName,
  isActive,
  shouldChangeMode,
  shouldReload,
  handleReload,
}) {
  const isFirstRender = useRef(true);

  const [mode, setMode] = useState("tests");

  const [testValues, setTestValues] = useState({ input: [], output: [] });

  const [analyticsValues, setAnalyticsValues] = useState({
    input: [],
    output: [],
  });

  const updateChart = (sortData) => {
    try {
      const {
        modes: {
          analytics: {
            counters: { permutations, comparisons },
          },
        },
      } = sortData;

      return { name: sectionName, permutations, comparisons };
    } catch (e) {
      return {};
    }
  };

  useEffect(() => {
    const reload = () => {
      // const url = "localhost";
      // const response = await fetch(url);
      // const data = await response.json();

      const testInput = Array.from({ length: 1000 }, () =>
        Math.round(Math.random() * 140)
      );

      const analyticsInput = Array.from({ length: 15 }, () =>
        Math.round(Math.random() * 140)
      );

      const data = [
        {
          name: "Вставками",
          modes: {
            analytics: {
              input: analyticsInput,
              output: Array.from(analyticsInput).sort((a, b) => a - b),
              counters: {
                permutations: (Math.random() * 50).toFixed(),
                comparisons: (Math.random() * 50).toFixed(),
              },
            },
            test: {
              input: testInput,
              output: Array.from(testInput).sort((a, b) => a - b),
            },
          },
        },
        {
          name: "Слиянием",
          modes: {
            analytics: {
              input: analyticsInput,
              output: Array.from(analyticsInput).sort((a, b) => a - b),
              counters: {
                permutations: (Math.random() * 50).toFixed(),
                comparisons: (Math.random() * 50).toFixed(),
              },
            },
            test: {
              input: testInput,
              output: Array.from(testInput).sort((a, b) => a - b),
            },
          },
        },
        {
          name: "Выбором",
          modes: {
            analytics: {
              input: analyticsInput,
              output: Array.from(analyticsInput).sort((a, b) => a - b),
              counters: {
                permutations: (Math.random() * 50).toFixed(),
                comparisons: (Math.random() * 50).toFixed(),
              },
            },
            test: {
              input: testInput,
              output: Array.from(testInput).sort((a, b) => a - b),
            },
          },
        },
        {
          name: "Пузырьковая",
          modes: {
            analytics: {
              input: analyticsInput,
              output: Array.from(analyticsInput).sort((a, b) => a - b),
              counters: {
                permutations: (Math.random() * 50).toFixed(),
                comparisons: (Math.random() * 50).toFixed(),
              },
            },
            test: {
              input: testInput,
              output: Array.from(testInput).sort((a, b) => a - b),
            },
          },
        },
      ];

      const sortIndex = findObjectIndexByProperty(data, "name", sectionName);
      const sortData = data[sortIndex];

      handleReload(updateChart(sortData));

      const {
        modes: { analytics, test },
      } = sortData;

      setTestValues(test);
      setAnalyticsValues(analytics);
    };

    const changeMode = () => {
      mode === "tests" ? setMode("analytics") : setMode("tests");
    };

    if (shouldReload || isFirstRender.current) {
      reload();
      isFirstRender.current = false;
    }
    if (shouldChangeMode) changeMode();
  }, [shouldChangeMode, shouldReload, mode]);

  return (
    <Container
      // @ts-ignore
      isActive={isActive}>
      <Title>Сортировка {sectionName}</Title>
      <Content>
        <Info isActive={mode === "tests"}>
          <Bars values={testValues.input} title={"Тесты"} />
          <Bars values={testValues["output"]} title={""} />
        </Info>
        <Info isActive={mode === "analytics"}>
          <Bars values={analyticsValues["input"]} title={"Аналитика"} />
          <Bars values={analyticsValues["output"]} title={""} />
        </Info>
      </Content>
    </Container>
  );
}
