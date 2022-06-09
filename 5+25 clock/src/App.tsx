import "./styles.css";
import { BiReset } from "react-icons/bi";
import styled, { createGlobalStyle, css } from "styled-components";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { useInterval } from "@mantine/hooks";
import { Button } from "./components/Button";
import { Inline } from "./components/Inline";
import { Text } from "./components/Text";
import { LengthControl } from "./components/LengthControl";
import { Title } from "./components/Title";

const ClockBody = styled.div`
  border: 4px solid black;
  border-radius: 10px;
  background-color: white;
  font-weight: 600;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  width: 200px;
`;

const AppWrapper = styled.div`
  background-color: #1c7ed6;
  text-align: center;
  padding: 50px;
`;

const App = () => {
  const [breakLength, setBreakLength] = React.useState(5 * 60);
  const [sessionLength, setSessionLength] = React.useState(25 * 60);
  const [currentTime, setCurrentTime] = React.useState(sessionLength);
  const [currentStage, setCurrentStage] = React.useState("Session");
  const interval = useInterval(() => {
    if (currentTime === 0) {
      setCurrentStage((s) => (s == "Session" ? "Break" : "Session"));
    }
    setCurrentTime((s) => (s == 0 ? breakLength : s - 1));
  }, 1000);

  const handleReset = () => {
    setCurrentTime(sessionLength);
  };

  return (
    <AppWrapper>
      <Title>{currentStage}</Title>
      <Inline spacing="space-around">
        <LengthControl
          title="Session Length"
          time={sessionLength}
          setTime={setSessionLength}
        />
        <ClockBody>
          <Text>
            {currentTime / 60 - (currentTime % 60) / 60}:
            {currentTime % 60 < 10 && "0"}
            {currentTime % 60}
          </Text>
        </ClockBody>
        <LengthControl
          id="break-label"
          title="Break Length"
          time={breakLength}
          setTime={setBreakLength}
        />
      </Inline>
      <Inline mt="40px" spacing="center">
        <Button
          onClick={interval.toggle}
          color={interval.active ? "red" : "green"}
        >
          {interval.active ? "Stop" : "Start"} timer
        </Button>
        <Button onClick={handleReset} color="black">
          <BiReset />
        </Button>
      </Inline>
    </AppWrapper>
  );
};

export default App;
