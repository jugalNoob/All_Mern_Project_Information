3️⃣ Explanation

OpenAI is the LLM class; you can replace it with any model, including a wrapper for TinyLLaMA via Ollama.

.call(prompt) sends the prompt to the model and gets the response.

You can extend this to multiple steps (chains), memory, or tool usage later.

4️⃣ Optional: Using Local TinyLLaMA with LangChain.js

You can wrap your local TinyLLaMA API like this:



import { LLM } from "langchain/schema";
import axios from "axios";

class TinyLLaMA extends LLM {
  async _call(prompt) {
    const res = await axios.post("http://localhost:11434/api/generate", {
      model: "tinyllama:1.1b",
      prompt,
      max_tokens: 100
    });
    return res.data.response;
  }
}

async function main() {
  const model = new TinyLLaMA();
  const response = await model._call("What is the color of an apple?");
  console.log("AI:", response);
}

main();
