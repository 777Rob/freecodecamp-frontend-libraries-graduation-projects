import styled from "styled-components";

export const Inline = styled.div<{ spacing?: string }>`
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
  justify-content: ${(props) => props.spacing};
  gap: 12px;
`;
