import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Card,
  ColorPicker,
  Grid,
  Group,
  Slider,
  Switch,
  Text,
  Tooltip,
  useMantineTheme
} from "@mantine/core";
import { useInterval, useToggle, useWindowEvent } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { bankOne, bankTwo } from "./data";
import "./styles.css";

const DrumsBox = () => {
  const theme = useMantineTheme();
  const [volume, setVolume] = useState(100);
  const [volumeEnd, setVolumeEnd] = useState(100);

  // Different music instrument modes
  const [mode, toggle] = useToggle(bankOne, [bankOne, bankTwo]);
  const [highlighted, setHighlited] = useState("");

  // Reset note highlighting after 1000ms
  const interval = useInterval(() => setHighlited(""), 1000);

  // Initial colors
  const [colors, setColors] = useState({
    background: "#476fd6",
    instrument: "#d5e05a"
  });
  const [color, setColor] = useState(null);

  // Initialise interval
  useEffect(() => {
    interval.start();
  }, []);

  const playNote = (keyCode) => {
    // Check if there is any note matching pressed key
    const note = mode.filter((item) => `Key${item.keyTrigger}` == keyCode)[0];
    // Play the sound
    console.log(volumeEnd / 100);
    let audio = new Audio(note.url);
    audio.volume = volume / 100;
    audio.play();
    // Highlight the note
    setHighlited(note.keyTrigger);
  };

  // Listen for key down events
  useWindowEvent("keydown", (event) => {
    // If M is pressed toggle mode
    if (event.code === "KeyM") {
      toggle();
    } else {
      playNote(event.code);
    }
  });

  return (
    <Card sx={{ width: "750px" }} id="drum-machine">
      <Card.Section id="display">
        <Grid
          sx={{
            backgroundColor: colors.background,
            padding: "50px"
          }}
        >
          {mode.map((item) => (
            // One note
            <Grid.Col
              className="drum-pad"
              sx={{
                borderRadius: "15px",
                backgroundColor:
                  highlighted == item.keyTrigger
                    ? colors.background
                    : theme.fn.rgba(colors.background, 0.4)
              }}
              span={4}
            >
              <Tooltip
                opened={highlighted == item.keyTrigger}
                label={item.id}
                withArrow
              >
                <audio className="clip" id={item.keyTrigger} src={item.url} />
                <ActionIcon
                  size={90}
                  onClick={() => playNote(`Key${item.keyTrigger}`)}
                  sx={{ fontSize: "50px", color: colors.instrument }}
                  variant={
                    highlighted !== item.keyTrigger ? "outline" : "filled"
                  }
                >
                  {item.icon}
                </ActionIcon>
                <Text sx={{ marginTop: "15px", fontWeight: "bold" }}>
                  {item.keyTrigger}
                </Text>
              </Tooltip>
            </Grid.Col>
          ))}
        </Grid>
      </Card.Section>

      {/* Controls */}
      <Card.Section
        sx={{
          padding: "10px",
          lineHeight: 4,
          backgroundColor: theme.colors["dark"][5],
          color: theme.colors["dark"][0]
        }}
      >
        <Text underline size="xl">
          Controls
        </Text>

        {/* Volume chaning slider */}
        <Text size="xl">
          Volume: <b>{volume}</b> <Slider value={volume} onChange={setVolume} />
        </Text>

        {/* Instrument mode switch */}
        <Text size="xl" underline fontWeight="bold">
          Instrument mode
        </Text>
        <Text size="xl">
          Instrument mode: <b>{mode === bankOne ? "Bank One" : "Bank Two"}</b>
        </Text>
        <Badge>Press M to change the mode or toggle switch bellow</Badge>

        {/* Mode switch */}
        <Text
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          Mode switch
          <Switch
            size="xl"
            width="50px"
            checked={mode === bankOne}
            onChange={() => toggle()}
          />
        </Text>

        {/* Color customization */}
        <Text size="xl" underline>
          Color customization
        </Text>
        <ColorPicker
          size="xl"
          format="hex"
          value={color}
          onChange={setColor}
          fullWidth
        />
        <Text
          sx={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          Selected color: {color}
          <Box sx={{ width: "20px", height: "20px", backgroundColor: color }} />
        </Text>

        {/* Color switching buttons */}
        <Group position="center">
          <Button
            onClick={() => {
              // Set colors and reset color state
              setColors({ ...colors, instrument: color });
              setColor(null);
            }}
          >
            Set Instrument Color
          </Button>
          <Button
            onClick={() => {
              setColors({ ...colors, background: color });
              setColor(null);
            }}
          >
            Set Background Color
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
};

const App = () => {
  return (
    <Box
      align="center"
      sx={{ border: "10px solid black", borderRadius: "20px", padding: "20px" }}
    >
      <Text align="center" sx={{ fontSize: "30px", fontWeight: "bold" }}>
        Drum box machine
      </Text>
      <DrumsBox />
    </Box>
  );
};

export default App;
