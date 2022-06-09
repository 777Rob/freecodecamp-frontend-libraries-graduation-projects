import styled from "styled-components";

export const Button = styled.button<{ color?: string }>`
  padding: 10px;
  text-align: center;
  justify-content: center;
  display: flex;
  background-color: ${(props) => props.color};
  border-radius: 12px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;
