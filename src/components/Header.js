import React from "react";
import styled from "styled-components";
import tw from "tailwind-styled-components";

const Container = styled.header`
  grid-area: header;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  opacity: 80%;
`;

const StudentList = tw.ul`
  grid
  grid-cols-2
  gap-x-6
`;

const StudentItem = tw.li`
  
`;

const Title = tw.h1`
  max-w-3xl
  text-4xl
  text-right
`;

export default function Header() {
  return (
    <Container>
      <StudentList>
        <StudentItem>Владимиров Дмитрий</StudentItem>
        <StudentItem>Мальцев Александр</StudentItem>
        <StudentItem>Вересова Виктория</StudentItem>
        <StudentItem>Тарасов Павел</StudentItem>
      </StudentList>
      <Title>
        Разработка программного комплекса по исследованию алгоритмов сортировки
      </Title>
    </Container>
  );
}
