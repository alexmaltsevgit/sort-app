import chroma from "chroma-js";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import tw from "tailwind-styled-components";

const Container = tw.div`
  flex
  flex-col
  justify-between
  align-bottom
  h-full
`;

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  background-color: #2c2c2c;
`;

class BarDrawer {
  constructor(canvas, barCount) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.barWidth = canvas.width / barCount;

    this.pickColorFromValue = chroma
      .scale(["f50303", "ff6800", "f5ff00", "6cff00", "12ff00"])
      .domain([0, canvas.height]);
  }

  drawOne = (value, index) => {
    this.ctx.fillStyle = this.pickColorFromValue(value);
    this.ctx.fillRect(
      this.barWidth * index,
      this.canvas.height,
      this.barWidth,
      -value
    );
  };

  clear = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };
}

export default function Bars({ values, title }) {
  const canvas = useRef(null);

  useEffect(() => {
    const drawer = new BarDrawer(canvas.current, values.length);
    values.forEach(drawer.drawOne);

    return drawer.clear;
  }, [values]);

  return (
    <Container>
      <Canvas ref={canvas}></Canvas>
    </Container>
  );
}
