import { ReactNode } from "react";

import styled from "styled-components";

interface CardProps {
  children?: ReactNode;
}

export const Card = ({ children }: CardProps) => (
  <CardContainer>
    <CardHeader />
    {children}
  </CardContainer>
);

export const CardHeader = styled.div`
  width: 168px;
  height: 17px;

  margin: 0 auto 99px;

  border-radius: 8px;

  background-color: var(--color-purple-light-secondary);
`;

const CardContainer = styled.div`
  width: 795px;
  height: 689px;

  margin: auto;
  padding: 24px 56px 34px;

  border-radius: 40px;

  background-color: var(--color-white);
`;
