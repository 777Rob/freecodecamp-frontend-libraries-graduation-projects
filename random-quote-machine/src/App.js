import { useState } from "react";
import "./styles.css";
import {
  ColorSwatch,
  Box,
  Center,
  Card,
  Image,
  Text,
  Badge,
  Avatar,
  Button,
  Group,
  useMantineTheme
} from "@mantine/core";
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaTwitter,
  FaPinterest,
  FaFacebookSquare,
  FaFeather
} from "react-icons/fa";
import { Prism } from "@mantine/prism";
import { Quotes, colors } from "./Data";

const demoCode = `
<Card shadow="sm" p="lg">
  <Text>
    <FaQuoteLeft />
      {quote.text}
    <FaQuoteRight />
  </Text>

  <Center inline sx={{ marginTop: 10, marginBottom: 10 }}>
    <Avatar radius="lg" size="lg" src={quote.image} />
    <Text size="sm">{quote.author}</Text>
  </Center>

  <Group position="apart" direction="row" noWrap align="center">
    <Center sx={{ gap: 10 }}>
      <FaTwitter onClick={handleTwitter} size="30px" />
      <FaPinterest onClick={handlePintrest} size="30px" />
    </Center>

    <Button onClick={handleNewQuote} variant="light" color="blue">
      Get a random quote
    </Button>

  </Group>
</Card>
`;

const QuoteCard = () => {
  const [quote, setQuote] = useState(
    Quotes[Math.floor(Math.random() * Quotes.length)]
  );
  const handleTwitter = () =>
    window.location
      .replace(`https://twitter.com/intent/tweet?hashtags=quotes&text=
  ${encodeURIComponent('"' + quote.text + '" ' + quote.author)}`);

  const handlePintrest = () =>
    window.location.replace(
      `https://www.pinterest.com/pin/create/button/?url=${window.location}share&description=${quote.text}-${quote.author}&is_video=false&media=${quote.image}`
    );

  const handleNewQuote = () =>
    setQuote(Quotes[Math.floor(Math.random() * Quotes.length)]);

  return (
    <Card shadow="sm" p="lg" sx={{ width: "100%" }}>
      <Text id="text">
        <FaQuoteLeft />
        {quote.text || ""}
        <FaQuoteRight />
      </Text>
      <Center
        id="author"
        inline
        sx={{
          marginLeft: "auto",
          marginRight: "0px",
          marginTop: 10,
          marginBottom: 10
        }}
      >
        <Avatar radius="lg" size="lg" src={quote.image || ""} />
        <Text size="sm">-{quote.author || ""}</Text>
        <FaFeather />
      </Center>
      <Group position="apart" direction="row" noWrap align="center">
        <Center sx={{ gap: 10 }}>
          <FaTwitter id="tweet-quote" onClick={handleTwitter} size="30px" />
          <FaPinterest onClick={handlePintrest} size="30px" />
        </Center>
        <Button
          id="new-quote"
          onClick={handleNewQuote}
          variant="light"
          color="blue"
        >
          Get a random quote
        </Button>
      </Group>
    </Card>
  );
};

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState(
    colors[Math.floor(Math.random() * colors.length + 1)]
  );

  return (
    <Box
      sx={{
        backgroundColor: backgroundColor
      }}
      id="quote-box"
    >
      <Text sx={{ fontSize: "25px", fontWeight: "bold" }}>
        Random Quote Machine
      </Text>
      <Group position="center" sx={{ backgroundColor: "" }} spacing="xs">
        {colors.map((color) => (
          <ColorSwatch
            onClick={() => setBackgroundColor(color)}
            key={color}
            color={color}
          />
        ))}
      </Group>

      <QuoteCard />
      <Prism withLineNumbers language="js">
        {demoCode}
      </Prism>
      <a href="https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-random-quote-machine">
        Problem
      </a>
    </Box>
  );
};

export default App;
