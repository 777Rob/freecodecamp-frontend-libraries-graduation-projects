import { FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa";
import * as React from "react";
import { Inline } from "../Inline";
import { Text } from "../Text";
import { Title } from "../Title";
import { Stack } from "../Stack";

type LengthControlProps = {
  time: number;
  setTime: (a: number) => void;
  title: string;
};

export const LengthControl = ({ time, setTime, title }: LengthControlProps) => {
  return (
    <Stack>
      <Title>{title}</Title>
      <Inline>
        <FaArrowAltCircleUp
          style={{ cursor: "pointer" }}
          size="30px"
          onClick={() => setTime(time + 60)}
        />
        <Text>{time / 60}</Text>
        <FaArrowAltCircleDown
          size="30px"
          style={{ cursor: "pointer" }}
          onClick={() => setTime(time !== 0 ? time - 60 : time)}
        />
      </Inline>
    </Stack>
  );
};
