import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import tw from "tailwind-styled-components";
import styled from "styled-components";

const Container = styled.div`
  ${(p) => "width: " + p.width + "%;"}
  height: 100%;
`;

const Canvas = styled.canvas``;

export default function ChartStatistics({
  width,
  name,
  permutations,
  comparisons,
}) {
  const canvas = useRef(null);

  useEffect(() => {
    const chart = new Chart(canvas.current.getContext("2d"), {
      type: "bar",
      data: {
        labels: ["Сравнения", "Перестановки"],
        datasets: [
          {
            data: [comparisons, permutations],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: ["rgb(255, 99, 132)", "rgb(255, 159, 64)"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: name,
            padding: {
              bottom: 30,
            },
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [permutations, comparisons]);

  return (
    <Container width={width}>
      <Canvas ref={canvas}></Canvas>
    </Container>
  );
}
