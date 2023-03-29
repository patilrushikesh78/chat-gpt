import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import {
  Button,
  FormContainer,
  Pre,
  TextArea,
  Title,
  Wrapper,
} from "./styles/styledComponet";
function App() {
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0.5,
        max_tokens: 100,
      });
      console.log(response.data.choices);
      setResult(response.data.choices[0].text);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <Wrapper>
        <FormContainer>
          <Title>ChatGPT</Title>
          <TextArea
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Write here"
          />
          <br />
          <Button
            disabled={loading || prompt.length === 0}
            onClick={handleSubmit}
          >
            {loading ? "Generating..." : "Submit"}
          </Button>
          {result.length !== 0 && <Pre>{result}</Pre>}
        </FormContainer>
      </Wrapper>
    </div>
  );
}

export default App;
