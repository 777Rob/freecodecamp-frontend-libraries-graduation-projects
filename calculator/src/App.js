import "./styles.css";
import { Stack, Text, Button, Grid, Card } from "@mantine/core";
import { reducer, initialState } from "./Reducer";
import { Numbers, Operations } from "./data";
import { useReducer } from "react";

const Calculator = () => {
  // Get state and dispatch
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Card
      sx={{
        backgroundColor: "#1098AD",
        width: "350px",
        borderRadius: "10px",
      }}
    >
      {/* Display current and previous user inputs */}
      <Stack
        sx={{
          backgroundColor: "#D0EBFF",
          borderTopRightRadius: "10px",
          borderTopLeftRadius: "10px",
          // color: "white",
          padding: "15px 20px 0px",
          alignItems: "flex-end",
          marginBottom: "10px",
        }}
      >
        {state.prevValue}
        <Text
          sx={{
            height: "50px",
            marginLeft: "10px",
            overflow: "hidden",
            fontSize:
              state.userInput.length > 12
                ? state.userInput.length < 24
                  ? "20px"
                  : "12px"
                : "40px",
          }}
        >
          {state.userInput}
        </Text>
      </Stack>
      <Grid>
        {/* +,-,*,/ Operations */}
        {Operations.map((operation) => (
          <Grid.Col span={4}>
            <Button
              sx={{ backgroundColor: "#364FC7" }}
              id={operation.id}
              onClick={() => dispatch({ type: operation.id })}
              fullWidth
            >
              {operation.display}
            </Button>
          </Grid.Col>
        ))}

        {/* All of the numbers */}
        {Numbers.map((number) => (
          <Grid.Col span={4}>
            <Button
              fullWidth
              sx={{ backgroundColor: "#4C6EF5" }}
              onClick={() => dispatch({ type: "type", digit: number.value })}
              id={number.id}
            >
              <Text sx={{ fontSize: "23px", fontWeight: "bold" }}>
                {number.value}
              </Text>
            </Button>
          </Grid.Col>
        ))}
      </Grid>
    </Card>
  );
};

export default function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}
