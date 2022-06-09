import { FaEquals, FaDivide, FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import { AiFillUpSquare, AiOutlineClear } from "react-icons/ai";
import { Center } from "@mantine/core";
export const Numbers = [
  { id: "zero", value: 0 },
  { id: "one", value: 1 },
  { id: "two", value: 2 },
  { id: "three", value: 3 },
  { id: "four", value: 4 },
  { id: "five", value: 5 },
  { id: "six", value: 6 },
  { id: "seven", value: 7 },
  { id: "eight", value: 8 },
  { id: "nine", value: 9 },
];

export const Operations = [
  { id: "add", display: <FaPlus /> },
  { id: "subtract", display: <FaMinus /> },
  { id: "multiply", display: <FaTimes /> },
  { id: "divide", display: <FaDivide /> },
  { id: "equals", display: <FaEquals /> },
  { ïd: "decimal", display: <GoPrimitiveDot /> },
  {
    id: "clear",
    display: (
      <Center align="center">
        Clear
        <AiOutlineClear />
      </Center>
    ),
  },
  { id: "power", display: <AiFillUpSquare /> },
];
