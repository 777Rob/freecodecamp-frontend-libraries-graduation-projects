import "./styles.css";
import { Text, Box, Textarea, Grid, Stack } from "@mantine/core";
import { marked } from "marked";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { defaultInput } from "./defaultInput";

const App = () => {
  const [markdown, setMarkdown] = useState(defaultInput);

  return (
    <Grid>
      <Grid.Col span={6}>
        <Stack>
          <Text sx={{ fontSize: "34px", fontWeight: "bold" }} align="left">
            Editor:{" "}
          </Text>
          <Textarea
            id="editor"
            value={markdown}
            variant="filled"
            autosize={true}
            onChange={(e) => setMarkdown(e.target.value)}
          />
        </Stack>
      </Grid.Col>
      <Grid.Col span={6}>
        <Stack>
          <Text sx={{ fontSize: "34px", fontWeight: "bold" }} align="left">
            Preview:{" "}
          </Text>

          <ReactMarkdown
            id="preview"
            children={markdown}
            remarkPlugins={[remarkGfm]}
          />
        </Stack>
      </Grid.Col>
    </Grid>
  );
};
export default App;
