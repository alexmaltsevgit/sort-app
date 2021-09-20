import React from "react";
import tw from "tailwind-styled-components";

const Tab = tw.button`
  ${(props) =>
    // @ts-ignore
    props.isActive ? "bg-gray-800" : "bg-gray-700"}
    
  h-full
  
  text-xl
  font-semibold
  text-white
  
  hover:bg-gray-800
  transition
  duration-300
`;

export default function NavigationTab({ name, isActive, handleClick }) {
  return (
    <Tab
      onClick={handleClick}
      // @ts-ignore
      isActive={isActive}>
      {name}
    </Tab>
  );
}
