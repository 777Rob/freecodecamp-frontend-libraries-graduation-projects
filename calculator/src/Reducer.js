export const initialState = { userInput: 0, prevValue: 0, operation: null };

const performOperation = (initialState) => {
  // Function for performing aritmetical operations
  const { userInput, prevValue, operation } = initialState;
  let a = parseFloat(userInput.toString().replace(",", ""));
  let b = parseFloat(prevValue.toString().replace(",", ""));
  console.log(a);
  console.log(b);
  switch (operation) {
    case "add":
      return { userInput: a + b, prevValue: userInput, operation: "sum" };
    case "subtract":
      return { userInput: a - b, prevValue: userInput, operation: "subtract" };
    case "multiply":
      return { userInput: a * b, prevValue: userInput, operation: "multiply" };
    case "divide":
      return {
        userInput: b / a,
        prevValue: userInput,
        operation: "divide",
      };
    case "power":
      return { userInput: a ** b, prevValue: userInput, operation: "power" };

    default:
      return initialState;
  }
};

export const reducer = (state, action) => {
  // Reducer performs action when given action type
  // Most actions change state which is stored by the reducer

  switch (action.type) {
    case "decimal":
      return { ...state, userInput: `${state.userInput}.` };

    case "type":
      if (state.userInput == 0 && action.digit == 0) {
        return state;
      }
      if (state.userInput === 0) {
        return { ...state, userInput: `${action.digit}` };
      }
      return { ...state, userInput: `${state.userInput}${action.digit}` };

    // Select addition
    case "add":
      if (state.operation == null) {
        return { userInput: 0, operation: "add", prevValue: state.userInput };
      }
      return { ...state, operation: "add" };
    // Select subsctraction
    case "subctract":
      if (state.operation == null) {
        return {
          userInput: 0,
          operation: "subtract",
          prevValue: state.userInput,
        };
      }
      return { ...state, userInput: `-${state.userInput}` };

    // Select multiplication
    case "multiply":
      if (state.operation == null) {
        return {
          userInput: 0,
          operation: "multiply",
          prevValue: state.userInput,
        };
      }
      return { ...state, operation: "multiply" };
    // Select division
    case "divide":
      if (state.operation == null) {
        return {
          userInput: 0,
          operation: "divide",
          prevValue: state.userInput,
        };
      }
      return { ...state, operation: "divide" };
    // Select power operation to be performed
    case "power":
      if (state.operation == null) {
        return {
          userInput: 0,
          operation: "power",
          prevValue: state.userInput,
        };
      }
      return { ...state, operation: "power" };
    // Clear inputs and state
    case "clear":
      return { userInput: 0, operation: null, prevValue: 0 };

    // Perform operation
    case "equals":
      return performOperation(state);
    default:
      return state;
  }
};
