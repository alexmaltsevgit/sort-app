import React, { useState } from "react";
const { default: tw } = require("tailwind-styled-components");

const Container = tw.div`
  col-span-2
`;

const Button = tw.button`
  py-6
  w-full

  text-white
  font-semibold
  text-2xl

  transition
  duration-300
`;

const ChangeModeButton = tw(Button)`
  mb-8
  bg-green-600
  hover:bg-green-700
`;

const ReloadButton = tw(Button)`
  bg-red-500
  hover:bg-red-600
`;

export default function Controls({
  handleChange,
  handleReload,
  initialMode = "tests",
}) {
  const [mode, setMode] = useState(initialMode);

  const onChange = (e) => {
    handleChange(e);
    setMode(mode === "tests" ? "analytics" : "tests");
  };

  return (
    <Container>
      <ChangeModeButton onClick={onChange}>
        {mode === "tests" ? "Аналитика" : "Тесты"}
      </ChangeModeButton>
      <ReloadButton onClick={handleReload}>Обновить</ReloadButton>
    </Container>
  );
}
